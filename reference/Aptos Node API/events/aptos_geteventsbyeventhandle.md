---
title: Get events by event handle
excerpt: >
  이벤트 타입은 계정 주소와 단조 증가하는 creation_number(이벤트 타입별로 계정에 대해 부여되는 번호)로 전역에서 식별할 수
  있습니다. 이 API는 해당 이벤트 타입에 해당하는 이벤트 목록을 반환합니다.


  > ⚠️ 일부 API 호출 관련 안내

  > 

  > Aptos 노드 클라이언트의 최신 버전에서 Legacy Indexer가 제외됨에 따라, 일부 API 호출 시 Indexer 관련 오류가
  발생할 수 있습니다. 

  > 현재 해당 기능의 복구 또는 대체 API 제공 방안을 검토 중이며, 관련 조치가 완료되는 대로 업데이트를 제공하겠습니다.

  > 이용에 불편을 드려 죄송합니다.
api:
  file: web3-data-api.yaml
  operationId: aptos_getEventsByEventHandle
hidden: false
---