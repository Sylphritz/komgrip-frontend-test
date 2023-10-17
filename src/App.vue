<template>
  <AppLayout>
    <div class="row" v-if="!fetchingPinnedAssets">
      <div
        v-for="pinnedAsset in pinnedAssets"
        class="col-xl-3 col-sm-6 mb-xl-0 mb-4"
        :key="pinnedAsset.id"
      >
        <StatCard
          :title="pinnedAsset.name"
          :price="pinnedAsset.priceUsd"
          :change-percent="pinnedAsset.changePercent24Hr"
        />
      </div>
    </div>
    <div v-else class="py-4 text-center">
      <i class="fas fa-spinner fa-spin fs-3"></i>
    </div>
    <AssetsTable />
  </AppLayout>
</template>

<script setup lang="ts">
import AppLayout from '@/components/Layout/AppLayout.vue'
import StatCard from '@/components/StatCard.vue'
import AssetsTable from '@/components/AssetsTable.vue'
import { useUserAssetsStore } from './stores/userAssets'
import { storeToRefs } from 'pinia'

const { pinnedAssets, fetchingPinnedAssets } = storeToRefs(useUserAssetsStore())
</script>
