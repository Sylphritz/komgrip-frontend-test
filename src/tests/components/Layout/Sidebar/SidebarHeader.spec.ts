import { describe, it, expect, beforeEach } from 'vitest'

import { mount } from '@vue/test-utils'
import SidebarHeader from '@/components/Layout/Sidebar/SidebarHeader.vue'
import { createPinia, setActivePinia } from 'pinia'

describe('SidebarHeader', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('matches the snapshot', () => {
    const wrapper = mount(SidebarHeader)
    expect(wrapper.element).toMatchSnapshot()
  })

  it('has the title of Komgrip Technologies', () => {
    const wrapper = mount(SidebarHeader)
    expect(wrapper.text()).toBe('Komgrip Technologies')
  })
})
