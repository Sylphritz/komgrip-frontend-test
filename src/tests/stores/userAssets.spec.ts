import { setActivePinia, createPinia } from 'pinia'
import { useUserAssetsStore } from '@/stores/userAssets'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { MOCK_ASSETS_RESPONSE } from '@/mocks/api/assetsMock'
import { nextTick } from 'vue'
import { ASSETS_PER_PAGE } from '@/constants/constants'

describe('useLayoutStore', () => {
  vi.mock('@/api/coincap/assets', () => ({
    getAssets: () => MOCK_ASSETS_RESPONSE.data,
    getAssetsByIds: () => MOCK_ASSETS_RESPONSE.data
  }))

  beforeEach(() => {
    setActivePinia(createPinia())
  })

  describe('pinned assets', () => {
    it('successfully store pinned assets', async () => {
      const layoutStore = useUserAssetsStore()
      await nextTick()
      expect(layoutStore.pinnedAssets).toStrictEqual(MOCK_ASSETS_RESPONSE.data)
    })
  })

  describe('assets', () => {
    it('successfully store assets', async () => {
      const layoutStore = useUserAssetsStore()
      await nextTick()
      expect(layoutStore.assets).toStrictEqual(MOCK_ASSETS_RESPONSE.data)
    })

    it('increments the offset when getting next page', async () => {
      const layoutStore = useUserAssetsStore()

      await nextTick()

      await layoutStore.getNextPage()
      expect(layoutStore.pageOffset).toBe(ASSETS_PER_PAGE)
    })

    it('decrements the offset when getting previous page', async () => {
      const layoutStore = useUserAssetsStore()

      await nextTick()

      await layoutStore.getNextPage()
      expect(layoutStore.pageOffset).toBe(ASSETS_PER_PAGE)

      await nextTick()

      await layoutStore.getPreviousPage()
      expect(layoutStore.pageOffset).toBe(0)
    })
  })
})
