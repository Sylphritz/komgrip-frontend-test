import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import LayoutFooter from '@/components/Layout/LayoutFooter.vue'

describe('LayoutFooter', () => {
  it('renders successfully and matches the snapshot', () => {
    const wrapper = mount(LayoutFooter, {
      shallow: true
    })

    expect(wrapper.element).toMatchSnapshot()
  })
})
