<template>
  <LayoutSidebar />
  <main class="main-content position-relative max-height-vh-100 h-100 mt-1 border-radius-lg">
    <NavBar />
    <LayoutBody>
      <slot />
    </LayoutBody>
  </main>
</template>

<script setup lang="ts">
import LayoutSidebar from '@/components/Layout/LayoutSidebar.vue'
import NavBar from './NavBar.vue'
import LayoutBody from './LayoutBody.vue'
</script>
