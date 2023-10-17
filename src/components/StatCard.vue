<template>
  <div class="card">
    <div class="card-body p-3">
      <div class="row">
        <div class="col-8">
          <div class="numbers">
            <p class="text-sm mb-0 text-capitalize font-weight-bold">{{ title }}</p>
            <h5 class="font-weight-bolder mb-0">{{ formattedPrice }}</h5>
            <span
              class="text-sm font-weight-bolder"
              :class="{
                'text-success': parseFloat(changePercent) > 0,
                'text-danger': parseFloat(changePercent) < 0
              }"
              >{{ percentage }}%</span
            >
          </div>
        </div>
        <div class="col-4 text-end">
          <div class="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
            <i class="ni ni-money-coins text-lg opacity-10" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  changePercent: {
    type: String,
    required: true
  }
})

const percentage = computed(() => {
  const rawNumber = parseFloat(props.changePercent)

  return rawNumber < 0 ? rawNumber.toFixed(2).slice(1) : rawNumber.toFixed(2)
})
const formattedPrice = computed(() =>
  parseFloat(props.price).toLocaleString('en-US', {
    useGrouping: true,
    style: 'currency',
    currency: 'USD'
  })
)
</script>
