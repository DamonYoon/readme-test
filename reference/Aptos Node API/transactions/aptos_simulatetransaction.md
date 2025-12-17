---
title: Simulate transaction
excerpt: >
  트랜잭션을 실제로 실행하지 않고 시뮬레이션하는 API입니다.


  시뮬레이션 결과는 실제 서명된 트랜잭션을 실행했을 때와 동일한 트랜잭션 출력과 이벤트를 포함합니다. 다만, 스토리지가 업데이트되지 않기
  때문에 상태 해시는 포함되지 않습니다. 이 API를 사용하여 트랜잭션 제출 시 필요한 최대 gas 양을 추정할 수 있습니다.


  사용 방법:
    - zero-padded된 서명을 가진 트랜잭션을 생성합니다.
    - 생성된 트랜잭션을 이 API에 제출합니다.

  BCS 형식으로 이 엔드포인트를 사용하려면, BCS로 인코딩된 서명된 트랜잭션을 제출해야 합니다.
api:
  file: web3-data-api.yaml
  operationId: aptos_simulateTransaction
hidden: false
---