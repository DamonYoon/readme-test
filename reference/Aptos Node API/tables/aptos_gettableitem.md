---
title: Get table item
excerpt: >
  table_handle, key_type, value_type과 key 값을 이용하여 특정 table item을 조회할 수 있습니다.

  Aptos 노드는 계정 상태 히스토리를 설정된 기간에 따라 정리(pruning)합니다. 요청한 원장 버전이 이미 정리된 경우, 서버는 410
  응답을 반환합니다.
api:
  file: web3-data-api.yaml
  operationId: aptos_getTableItem
hidden: false
---