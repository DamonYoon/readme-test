---
title: Encode submission
excerpt: >
  아직 서명하지 않은 트랜잭션 정보를 JSON 형식으로 받아서 BCS(Binary Canonical Serialization) 형식으로
  변환해주는 API입니다. 변환된 결과를 사용하여 트랜잭션에 서명한 후, Submit Transaction API를 통해 트랜잭션을 제출할 수
  있습니다.


  즉, 이 엔드포인트는 BCS를 지원하는 라이브러리가 없는 언어에서도 API에 트랜잭션 요청을 제출할 수 있게 해줍니다. 공식 Rust,
  TypeScript 또는 Python SDK와 같이 BCS를 지원하는 SDK를 사용하는 경우에는 이 엔드포인트를 사용할 필요가 없습니다.


  이 엔드포인트의 응답을 사용하여 트랜잭션에 서명하는 방법은 다음과 같습니다:

  - 응답의 16진수로 인코딩된 문자열을 바이트로 디코딩합니다.

  - 디코딩된 바이트에 서명합니다.

  - 서명된 바이트를 Ed25519 서명 형식으로 변환하고, 이를 활용하여 최종 트랜잭션 서명을 생성합니다.
api:
  file: web3-data-api.yaml
  operationId: aptos_encodeSubmission
hidden: false
---