import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import SidebarItem from '@/components/Layout/Sidebar/SidebarItem.vue'
import ShopIcon from '@/components/Icons/ShopIcon.vue'

describe('SidebarItem', () => {
  const url = 'testUrl'

  it('renders successfully and matches the snapshot', () => {
    const wrapper = mount(SidebarItem, {
      props: {
        url,
        icon: ShopIcon,
        isActive: false
      },
      shallow: true
    })

    expect(wrapper.element).toMatchSnapshot()
  })

  it('links to the correct url', () => {
    const wrapper = mount(SidebarItem, {
      props: {
        url,
        icon: ShopIcon,
        isActive: false
      },
      shallow: true
    })
    expect(wrapper.find('a.nav-link').attributes('href')).toBe(url)
  })

  it('has active class when set to active', () => {
    const wrapper = mount(SidebarItem, {
      props: {
        url,
        icon: ShopIcon,
        isActive: true
      },
      shallow: true
    })

    expect(wrapper.find('a.nav-link').classes()).toStrictEqual(['nav-link', 'active'])
  })

  it('renders the default icon when no icon is supplied', () => {
    const wrapper = mount(SidebarItem, {
      props: {
        url,
        isActive: false
      },
      shallow: true
    })

    expect(wrapper.find('.fas.fa-square')).toBeDefined()
  })
})
