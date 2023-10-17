export interface AssetResponse {
  data: Asset
  timestamp: number
}

export interface AssetsResponse {
  data: Asset[]
  timestamp: number
}

export interface Asset {
  id: string
  rank: string
  symbol: string
  name: string
  supply: string
  maxSupply: string | null
  marketCapUsd: string
  volumeUsd24Hr: string
  priceUsd: string
  changePercent24Hr: string
  vwap24Hr: string
}
