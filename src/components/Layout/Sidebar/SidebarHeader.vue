<template>
  <div class="sidenav-header">
    <i
      class="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-xl-none"
      aria-hidden="true"
      id="iconSidenav"
      @click="toggleSidebar"
    ></i>
    <a class="navbar-brand m-0" href="/" target="_blank">
      <img src="/images/logo.png" class="navbar-brand-img h-100" alt="main_logo" />
      <span class="ms-1 font-weight-bold">Komgrip Technologies</span>
    </a>
  </div>
</template>

<script setup lang="ts">
import { useLayoutStore } from '@/stores/layout'

const layoutStore = useLayoutStore()
const { toggleSidebar } = layoutStore
</script>
