---
title: Get transaction by hash
excerpt: |
  트랜잭션 해시로 트랜잭션을 조회합니다. 이 해시는 트랜잭션 제출 시 API가 반환하는 값(Pending Transaction)과 동일합니다.

  직접 트랜잭션 해시를 생성하는 방법:
  1. 메시지 바이트 생성: "RawTransaction" 바이트 + 트랜잭션의 BCS 바이트를 연결
  2. SHA3-256 해시 알고리즘을 메시지 바이트에 적용
  3. 해시된 바이트를 0x 접두어와 함께 헥스 문자열로 인코딩
api:
  file: web3-data-api.yaml
  operationId: aptos_getTransactionByHash
hidden: false
---