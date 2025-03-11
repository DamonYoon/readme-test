---
title: Recipe Test
description: Recipe Description
hidden: false
recipe:
  color: '#018FF4'
  icon: 🦉
---
```javascript JavaScript
const { v4: uuidv4 } = require("uuid");
const crypto = require("crypto");
const sign = require("jsonwebtoken").sign;

const access_key = "YOUR_ACCESS_KEY";
const secret_key = "YOUR_SECRET_KEY";

const generateAuth = (params) => {
  let queryParts = [];
  for (const key in params) {
    if (Array.isArray(params[key])) {
      queryParts.push(params[key].map(value => `${key}[]=${value}`).join("&"));
    } else {
      queryParts.push(`${key}=${params[key]}`);
    }
  }
  const queryString = queryParts.join("&");
  const hash = crypto.createHash("sha512").update(queryString, "utf-8").digest("hex");

  const payload = {
    access_key,
    nonce: uuidv4(),
    query_hash: hash,
    query_hash_alg: "SHA512",
  };

  return sign(payload, secret_key);
};

```

```json Response Example
{ "success": true }
```

# Step 1

<!-- javascript@1-30 -->

test

# Step 2

<!-- javascript@2 -->

Install libraries