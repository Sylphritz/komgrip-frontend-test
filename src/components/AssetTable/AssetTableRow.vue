<template>
  <tr>
    <td class="text-center" data-test="asset-table-row-rank">{{ asset.rank }}.</td>
    <td data-test="asset-table-row-name">{{ asset.name }}</td>
    <td class="text-center" data-test="asset-table-row-symbol">{{ asset.symbol }}</td>
    <td class="text-end" data-test="asset-table-row-supply">{{ supply }} / {{ maxSupply }}</td>
    <td class="text-end" data-test="asset-table-row-price">{{ price }}</td>
    <td
      class="text-center"
      :class="{ 'text-success': rawChange > 0, 'text-danger': rawChange < 0 }"
      data-test="asset-table-row-change"
    >
      {{ changePercentage }}%
    </td>
  </tr>
</template>

<script setup lang="ts">
import { computed, type PropType } from 'vue'
import type { Asset } from '@/api/coincap/types'

const props = defineProps({
  asset: {
    type: Object as PropType<Asset>,
    required: true
  }
})

const supply = computed(() => parseInt(props.asset.supply).toLocaleString())
const maxSupply = computed(() =>
  props.asset.maxSupply
    ? parseFloat(props.asset.maxSupply).toLocaleString('en-US', {
        useGrouping: true
      })
    : 'NO LIMIT'
)
const price = computed(() =>
  parseFloat(props.asset.priceUsd).toLocaleString('en-US', {
    useGrouping: true,
    style: 'currency',
    currency: 'USD'
  })
)
const rawChange = computed(() => parseFloat(props.asset.changePercent24Hr))
const changePercentage = computed(
  () => `${rawChange.value > 0 ? '+' : ''}${rawChange.value.toFixed(2)}`
)
</script>
