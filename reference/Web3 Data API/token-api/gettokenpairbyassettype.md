---
title: Get Token Pair By Asset Type
excerpt: >
  특정 Asset Type에 해당하는 토큰 쌍을 조회합니다.


  Aptos에서는 동일한 토큰이 두 가지 형식으로 존재할 수 있습니다:

  - Coin: 기존 Aptos의 자산 형식 (예: "0x1::aptos_coin::AptosCoin")

  - Fungible Asset (FA): 새로운 자산 형식으로 마이그레이션된 토큰


  이 API는 특정 토큰의 Coin과 FA 형식을 함께 조회할 수 있도록 해줍니다. 마이그레이션된 토큰의 경우, Coin과 FA가 동일한
  linkedAssetType으로 연결되어 있어 하나의 자산으로 관리됩니다.
api:
  file: web3-data-api.yaml
  operationId: getTokenPairByAssetType
hidden: false
---