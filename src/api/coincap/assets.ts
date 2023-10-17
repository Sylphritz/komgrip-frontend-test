import client from '@/api/coincap/client'
import type { Asset, AssetsResponse } from './types'

export const getAssets = async (offset = 0, limit = 5): Promise<Asset[]> => {
  const response = await client.get<AssetsResponse>('/assets', {
    params: {
      limit,
      offset
    }
  })

  return response.data.data
}

export const getAssetsByIds = async (assets: string[]): Promise<Asset[]> => {
  const response = await client.get<AssetsResponse>('/assets', {
    params: {
      ids: assets.join(',')
    }
  })

  return response.data.data
}
