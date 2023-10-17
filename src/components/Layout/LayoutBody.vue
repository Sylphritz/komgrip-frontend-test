<template>
  <div class="container-fluid py-4">
    <slot />
    <LayoutFooter />
  </div>
</template>

<script setup lang="ts">
import LayoutFooter from './LayoutFooter.vue'
</script>
