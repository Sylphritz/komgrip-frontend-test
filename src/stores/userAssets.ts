import { reactive, ref, watch } from 'vue'
import { defineStore } from 'pinia'
import type { Asset } from '@/api/coincap/types'
import { ASSETS_PER_PAGE } from '@/constants/constants'
import { getAssets, getAssetsByIds } from '@/api/coincap/assets'

export const useUserAssetsStore = defineStore('user-assets', () => {
  // Let's pretend this user has pinned the following assets
  const pinnedAssetIds = reactive(['bitcoin', 'ethereum', 'solana', 'dogecoin'])
  const pinnedAssets = ref<Asset[]>([])
  const fetchingPinnedAssets = ref(false)

  const assets = ref<Asset[]>([])
  const fetching = ref(false)
  const pageOffset = ref(0)

  const getNextPage = () => {
    if (fetching.value) return

    pageOffset.value += ASSETS_PER_PAGE
  }

  const getPreviousPage = () => {
    if (fetching.value) return

    pageOffset.value -= ASSETS_PER_PAGE
  }

  const fetchAssets = async () => {
    if (fetching.value) return

    fetching.value = true
    assets.value = await getAssets(pageOffset.value, ASSETS_PER_PAGE)
    fetching.value = false
  }

  const fetchPinnedAssets = async () => {
    if (fetchingPinnedAssets.value) return

    fetchingPinnedAssets.value = true
    pinnedAssets.value = await getAssetsByIds(pinnedAssetIds)
    fetchingPinnedAssets.value = false
  }

  watch(
    pageOffset,
    async () => {
      await fetchAssets()
    },
    {
      immediate: true
    }
  )

  watch(
    pinnedAssetIds,
    async () => {
      await fetchPinnedAssets()
    },
    {
      immediate: true
    }
  )

  return {
    assets,
    pinnedAssets,
    fetching,
    fetchingPinnedAssets,
    pageOffset,
    getNextPage,
    getPreviousPage
  }
})
