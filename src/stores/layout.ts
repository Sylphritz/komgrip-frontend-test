import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useLayoutStore = defineStore('layout', () => {
  const sidebarOpened = ref(false)

  const toggleSidebar = () => {
    sidebarOpened.value = !sidebarOpened.value

    if (sidebarOpened.value) {
      document.body.classList.add('g-sidenav-pinned')
    } else {
      document.body.classList.remove('g-sidenav-pinned')
    }
  }

  return { sidebarOpened, toggleSidebar }
})
