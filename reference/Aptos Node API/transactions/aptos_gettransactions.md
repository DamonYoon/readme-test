---
title: Get transactions
excerpt: |
  온체인에 커밋된 트랜잭션을 조회합니다. 페이지 크기와 시작 원장 버전을 제공하여 특정 시퀀스의 트랜잭션을 가져올 수 있습니다.

  버전이 정리(pruned)된 경우 410이 반환됩니다.
  대기 중인 트랜잭션을 조회하려면 Get Transaction by Hash API를 사용하세요.
api:
  file: web3-data-api.yaml
  operationId: aptos_getTransactions
hidden: false
---