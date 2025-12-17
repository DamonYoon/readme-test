---
title: Submit transaction
excerpt: |
  이 엔드포인트는 트랜잭션 전송을 두 가지 형식으로 지원합니다.

  1. **JSON 형식으로 제출하는 경우:**
    - 먼저 트랜잭션을 BCS로 인코딩해야 합니다. 만약 사용하는 언어에 BCS를 지원하는 라이브러리가 있다면 해당 라이브러리를 사용하세요.
    - BCS를 직접 인코딩할 수 없다면 Encode Submission API를 활용할 수 있습니다. 이 API를 사용할 때는, 신뢰할 수 있는 노드에만 요청을 보내야 합니다. 노드가 요청 내용을 조작할 수 있기 때문입니다.
    - 인코딩된 트랜잭션에 서명합니다.
    - 서명된 트랜잭션을 "application/json" Content-Type으로 제출합니다.

  2. **BCS 형식으로 제출하는 경우:**
    - BCS로 인코딩된 서명된 트랜잭션을 "application/x.aptos.signed_transaction+bcs" Content-Type으로 제출합니다.
api:
  file: web3-data-api.yaml
  operationId: aptos_submitTransaction
hidden: false
---