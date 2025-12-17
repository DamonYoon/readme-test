---
title: Get blocks by version
excerpt: >
  이 엔드포인트는 특정 블록의 트랜잭션과 해당 블록 정보를 조회할 수 있습니다.


  트랜잭션은 기본 최대 트랜잭션 개수로 제한됩니다. 모든 트랜잭션이 반환되지 않는 경우, 나머지 트랜잭션은 get transactions
  API를 이용해 별도로 조회해야 합니다. 블록이 pruning(정리)된 경우 410 상태 코드가 반환됩니다.
api:
  file: web3-data-api.yaml
  operationId: aptos_getBlocksByVersion
hidden: false
---