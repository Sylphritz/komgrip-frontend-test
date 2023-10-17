import { describe, it, expect, beforeEach } from 'vitest'

import { mount } from '@vue/test-utils'
import NavBar from '@/components/Layout/NavBar.vue'
import { createPinia, setActivePinia } from 'pinia'
import { useLayoutStore } from '@/stores/layout'

describe('NavBar', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('renders successfully and matches the snapshot', () => {
    const wrapper = mount(NavBar, {
      shallow: true
    })

    expect(wrapper.element).toMatchSnapshot()
  })

  it('renders my name: Pavee Udomkarnpaisarn', () => {
    const wrapper = mount(NavBar, {
      shallow: true
    })

    expect(wrapper.text()).toContain('Pavee Udomkarnpaisarn')
  })

  it('toggles sidebar state when clicking the menu button', async () => {
    const wrapper = mount(NavBar, {
      shallow: true
    })
    const layoutStore = useLayoutStore()

    global.innerWidth = 375

    const sidebarToggleButton = wrapper.find('#iconNavbarSidenav')

    expect(sidebarToggleButton).toBeDefined()
    expect(layoutStore.sidebarOpened).toBe(false)

    await sidebarToggleButton.trigger('click')

    expect(layoutStore.sidebarOpened).toBe(true)
  })
})
