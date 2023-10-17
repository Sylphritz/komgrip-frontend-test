import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import LayoutBody from '@/components/Layout/LayoutBody.vue'

describe('LayoutBody', () => {
  it('renders successfully and matches the snapshot', () => {
    const wrapper = mount(LayoutBody, {
      shallow: true
    })

    expect(wrapper.element).toMatchSnapshot()
  })
})
