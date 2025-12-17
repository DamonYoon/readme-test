---
title: Get account module
excerpt: >
  계정 주소에 대한 모듈을 반환합니다. 트랜잭션의 원장 버전을 지정할 수 있으며 원장의 버전이 지정되지 않은 경우, 최신 원장의 버전을
  가져옵니다.

  Aptos 노드는 구성 가능한 기간에 따라 계정 상태 기록을 정리(pruning)합니다. 요청된 원장 버전이 정리된 경우 서버는 410 상태
  코드로 응답합니다.
api:
  file: web3-data-api.yaml
  operationId: aptos_getAccountModule
hidden: false
---