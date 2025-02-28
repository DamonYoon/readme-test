import fs from "fs";
import path from "path";
import yaml from "js-yaml";
import { Command } from "commander";
import { OpenAPIV3_1 } from "openapi-types";

const program = new Command();

program
  .option("-v, --version <version>", "API version (default: v1)", "v1")
  .option(
    "-f, --file <file>",
    "OpenAPI base file (default: main.yaml)",
    "main.yaml",
  );

program.parse(process.argv);
const options = program.opts();

const apiVersion = options.version;
const baseFileName = options.file;

const baseDir = path.join("api-definitions", apiVersion);
const baseFilePath = path.join(baseDir, baseFileName);
const outputFilePath = path.join(baseDir, `merged_${baseFileName}`);

function loadYamlFile(filePath: string): OpenAPIV3_1.Document | null {
  try {
    const fileContents = fs.readFileSync(filePath, "utf8");
    return yaml.load(fileContents) as OpenAPIV3_1.Document;
  } catch (error) {
    console.error(`❌ Error reading YAML file: ${filePath}`, error);
    return null;
  }
}

function mergeYamlFilesFromDir(
  baseObject: Record<string, any>,
  dirPath: string,
  mergeKey?: keyof OpenAPIV3_1.Document,
) {
  if (!fs.existsSync(dirPath)) return;

  fs.readdirSync(dirPath)
    .filter((file) => file.endsWith(".yaml"))
    .forEach((file) => {
      const fileData = loadYamlFile(path.join(dirPath, file));
      if (fileData) {
        if (mergeKey) {
          Object.assign(
            baseObject[mergeKey] as Record<string, any>,
            fileData[mergeKey] || {},
          );
        } else {
          Object.keys(fileData as Record<string, any>).forEach((key) => {
            baseObject[key] = {
              ...(baseObject[key] || {}),
              ...(fileData as Record<string, any>)[key],
            };
          });
        }
      }
    });
}

function mergeYamlFiles() {
  console.log(
    `🔄 Merging YAML files for version: ${apiVersion}, using base file: ${baseFilePath}`,
  );

  const openapiSpec = loadYamlFile(baseFilePath);

  if (!openapiSpec) {
    console.error(`❌ Base file ${baseFilePath} not found or invalid.`);
    process.exit(1);
  }

  console.log(openapiSpec);
  // components
  if (!openapiSpec.components)
    openapiSpec.components = {} as Record<string, any>;

  mergeYamlFilesFromDir(openapiSpec, path.join(baseDir, "components"));

  console.log(openapiSpec);
  // paths
  openapiSpec.paths = openapiSpec.paths || ({} as Record<string, any>);

  mergeYamlFilesFromDir(openapiSpec, path.join(baseDir, "paths"), "paths");
  console.log(openapiSpec);

  fs.writeFileSync(
    outputFilePath,
    yaml.dump(openapiSpec, { noRefs: true, lineWidth: -1 }),
    "utf8",
  );
  console.log(`✅ Merged OpenAPI 3.1.0 spec saved to ${outputFilePath}`);
}

mergeYamlFiles();
