import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import SidebarFooter from '@/components/Layout/Sidebar/SidebarFooter.vue'

describe('SidebarFooter', () => {
  it('matches the snapshot', () => {
    const wrapper = mount(SidebarFooter)
    expect(wrapper.element).toMatchSnapshot()
  })

  it('links to the API documentation', () => {
    const wrapper = mount(SidebarFooter)
    expect(wrapper.find('a').attributes('href')).toBe('https://komgrip.co.th/coincap/')
  })

  it('has the correct background image', () => {
    const wrapper = mount(SidebarFooter)
    expect(wrapper.find('.full-background').attributes('style')).toBe(
      "background-image:url('/images/white-curved.jpeg');"
    )
  })
})
