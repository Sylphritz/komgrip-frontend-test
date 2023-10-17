import { setActivePinia, createPinia } from 'pinia'
import { useLayoutStore } from '@/stores/layout'
import { beforeEach, describe, expect, it } from 'vitest'

describe('useLayoutStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('toggles sidebar state', async () => {
    const layoutStore = useLayoutStore()

    expect(layoutStore.sidebarOpened).not.toBe(true)

    layoutStore.toggleSidebar()

    expect(layoutStore.sidebarOpened).toBe(true)
  })
})
