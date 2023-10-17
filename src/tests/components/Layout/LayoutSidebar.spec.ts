import { describe, it, expect, beforeEach } from 'vitest'

import { mount } from '@vue/test-utils'
import LayoutSidebar from '@/components/Layout/LayoutSidebar.vue'
import { createPinia, setActivePinia } from 'pinia'
import { useLayoutStore } from '@/stores/layout'

describe('LayoutSidebar', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('renders successfully and matches the snapshot', () => {
    const wrapper = mount(LayoutSidebar, {
      shallow: true
    })

    expect(wrapper.element).toMatchSnapshot()
  })

  it('has a white background when opened in mobile responsive mode', () => {
    const wrapper = mount(LayoutSidebar, {
      shallow: true
    })

    const layoutStore = useLayoutStore()
    layoutStore.sidebarOpened = true

    expect(wrapper.element.classList.contains('bg-white')).toMatchSnapshot()
  })
})
