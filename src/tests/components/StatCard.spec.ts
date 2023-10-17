import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import StatCard from '@/components/StatCard.vue'

describe('StatCard', () => {
  it('renders successfully and matches the snapshot', () => {
    const wrapper = mount(StatCard, {
      shallow: true,
      props: {
        title: 'Bitcoin',
        price: '123456.789',
        changePercent: '1.23'
      }
    })

    expect(wrapper.element).toMatchSnapshot()
  })

  it('renders the displayed values in the correct format', () => {
    const wrapper = mount(StatCard, {
      shallow: true,
      props: {
        title: 'Bitcoin',
        price: '123456.789',
        changePercent: '1.23'
      }
    })

    expect(wrapper.find('p').element.textContent).toBe('Bitcoin')
    expect(wrapper.find('h5').element.textContent).toBe('$123,456.79')
    expect(wrapper.find('span').element.textContent).toBe('1.23%')
  })

  it('displays the change percentage in green when the value is positive', () => {
    const wrapper = mount(StatCard, {
      shallow: true,
      props: {
        title: 'Bitcoin',
        price: '123456.789',
        changePercent: '1.23'
      }
    })

    expect(wrapper.find('span').element.textContent).toBe('1.23%')
    expect(wrapper.find('span').element.classList.contains('text-success')).toBe(true)
  })

  it('displays the change percentage in red when the value is negative and no minus signs', () => {
    const wrapper = mount(StatCard, {
      shallow: true,
      props: {
        title: 'Bitcoin',
        price: '123456.789',
        changePercent: '-1.23'
      }
    })

    expect(wrapper.find('span').element.textContent).toBe('1.23%')
    expect(wrapper.find('span').element.classList.contains('text-danger')).toBe(true)
  })
})
