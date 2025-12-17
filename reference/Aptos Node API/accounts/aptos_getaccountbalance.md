---
title: Get account balance
excerpt: >
  지정된 계정, 자산 타입, 그리고 특정 트랜잭션의 원장 버전에 대해 coin/fungible asset (primary fungible
  asset store만 해당)의 잔액을 반환합니다. 원장 버전을 요청에 명시하지 않으면 최신 원장 버전이 사용됩니다.

  Aptos 노드는 구성 가능한 기간에 따라 계정 상태 기록을 정리(pruning)합니다. 요청된 원장 버전이 정리된 경우 서버는 410 상태
  코드로 응답합니다.
api:
  file: web3-data-api.yaml
  operationId: aptos_getAccountBalance
hidden: false
---