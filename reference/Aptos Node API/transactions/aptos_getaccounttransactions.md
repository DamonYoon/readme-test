---
title: Get account transactions
excerpt: >
  계정이 온체인에 커밋한 시퀀스 번호 기반 트랜잭션을 조회합니다. (시퀀스가 없는 트랜잭션은 조회되지 않습니다.) 

  시작 버전이 너무 과거인 경우 410 오류가 반환되며, 시작 버전이 지정되지 않은 경우 버전 0부터 시작합니다. 

  대기 중인 트랜잭션을 조회하려면 Get Transaction by Hash API를 사용하세요.


  > ⚠️ 일부 API 호출 관련 안내

  > 

  > Aptos 노드 클라이언트의 최신 버전에서 Legacy Indexer가 제외됨에 따라, 일부 API 호출 시 Indexer 관련 오류가
  발생할 수 있습니다. 

  > 현재 해당 기능의 복구 또는 대체 API 제공 방안을 검토 중이며, 관련 조치가 완료되는 대로 업데이트를 제공하겠습니다.

  > 이용에 불편을 드려 죄송합니다.
api:
  file: web3-data-api.yaml
  operationId: aptos_getAccountTransactions
hidden: false
---