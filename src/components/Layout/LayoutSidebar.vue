<template>
  <aside
    class="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3"
    :class="{ 'bg-white': sidebarOpened }"
    id="sidenav-main"
  >
    <SidebarHeader />
    <hr class="horizontal dark mt-0" />
    <div class="collapse navbar-collapse w-auto max-height-vh-100" id="sidenav-collapse-main">
      <ul class="navbar-nav">
        <SidebarItem :icon="ShopIcon" url="/" is-active>Dashboard</SidebarItem>
        <SidebarItem url="#">Menu 1</SidebarItem>
        <SidebarItem url="#">Menu 2</SidebarItem>
        <SidebarItem url="#">Menu 3</SidebarItem>
        <SidebarItem url="#">Menu 4</SidebarItem>
      </ul>
    </div>
    <SidebarFooter />
  </aside>
</template>

<script setup lang="ts">
import SidebarHeader from '@/components/Layout/Sidebar/SidebarHeader.vue'
import ShopIcon from '@/components/Icons/ShopIcon.vue'
import SidebarItem from './Sidebar/SidebarItem.vue'
import SidebarFooter from './Sidebar/SidebarFooter.vue'

import { useLayoutStore } from '@/stores/layout'
import { storeToRefs } from 'pinia'

const layoutStore = useLayoutStore()
const { sidebarOpened } = storeToRefs(layoutStore)
</script>
