import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import AppLayout from '@/components/Layout/AppLayout.vue'

describe('AppLayout', () => {
  it('renders successfully and matches the snapshot', () => {
    const wrapper = mount(AppLayout, {
      shallow: true,
      slots: {
        default: 'testbody'
      }
    })

    expect(wrapper.element).toMatchSnapshot()
  })
})
