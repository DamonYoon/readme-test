---
title: Get transaction summaries
excerpt: >
  계정의 온체인 커밋된 트랜잭션(시퀀스 번호 기반 및 순서 없는 트랜잭션 모두)의 요약 정보를 조회합니다. 각 트랜잭션 요약에는 발신자 주소,
  트랜잭션 해시, 버전 및 재시도 방지 Nonce가 포함됩니다.


  - start_version이 제공되면, 해당 버전부터 시작하는 트랜잭션 요약이 출력됩니다.

  - start_version이 제공되지 않고 end_version만 제공되면, end_version에서 끝나는 트랜잭션 요약이 출력됩니다.

  - start_version과 end_version이 모두 제공되지 않으면, 계정의 가장 최근 커밋된 트랜잭션 요약이 출력됩니다.

  - 출력은 항상 버전의 오름차순으로 정렬된 트랜잭션 요약으로 구성됩니다.

  - 대기 중인 트랜잭션을 조회하려면 Get Transaction by Hash API를 사용하세요.
api:
  file: web3-data-api.yaml
  operationId: aptos_getTransactionSummaries
hidden: false
---