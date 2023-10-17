import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import ShopIcon from '@/components/Icons/ShopIcon.vue'

describe('ShopIcon', () => {
  it('matches the snapshot', () => {
    const wrapper = mount(ShopIcon)
    expect(wrapper.element).toMatchSnapshot()
  })
})
