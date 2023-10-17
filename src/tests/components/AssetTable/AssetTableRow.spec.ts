import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import AssetTableRow from '@/components/AssetTable/AssetTableRow.vue'
import { MOCK_ASSETS_RESPONSE } from '@/mocks/api/assetsMock'

describe('AssetTableRow', () => {
  it('renders successfully and matches the snapshot', () => {
    const wrapper = mount(AssetTableRow, {
      shallow: true,
      props: {
        asset: MOCK_ASSETS_RESPONSE.data[0]
      }
    })

    expect(wrapper.element).toMatchSnapshot()
  })

  it('renders the displayed values in the correct format', () => {
    const asset = MOCK_ASSETS_RESPONSE.data[0]
    const wrapper = mount(AssetTableRow, {
      shallow: true,
      props: {
        asset
      }
    })

    expect(wrapper.find('[data-test="asset-table-row-rank"]').element.textContent).toBe('1.')
    expect(wrapper.find('[data-test="asset-table-row-name"]').element.textContent).toBe('Bitcoin')
    expect(wrapper.find('[data-test="asset-table-row-symbol"]').element.textContent).toBe('BTC')
    expect(wrapper.find('[data-test="asset-table-row-supply"]').element.textContent).toBe(
      '17,193,925 / 21,000,000'
    )
    expect(wrapper.find('[data-test="asset-table-row-price"]').element.textContent).toBe(
      '$6,929.82'
    )
    expect(wrapper.find('[data-test="asset-table-row-change"]').element.textContent?.trim()).toBe(
      '-0.81%'
    )
  })

  it('renders the price change in green when the value is positive', () => {
    const asset = MOCK_ASSETS_RESPONSE.data[0]
    const wrapper = mount(AssetTableRow, {
      shallow: true,
      props: {
        asset: {
          ...asset,
          changePercent24Hr: '1.68'
        }
      }
    })

    expect(
      wrapper
        .find('[data-test="asset-table-row-change"]')
        .element.classList.contains('text-success')
    ).toBe(true)
  })

  it('renders the price change in red when the value is negative', () => {
    const asset = MOCK_ASSETS_RESPONSE.data[0]
    const wrapper = mount(AssetTableRow, {
      shallow: true,
      props: {
        asset
      }
    })

    expect(
      wrapper.find('[data-test="asset-table-row-change"]').element.classList.contains('text-danger')
    ).toBe(true)
  })

  it('renders the price change in regular text color when the value is 0', () => {
    const asset = MOCK_ASSETS_RESPONSE.data[0]
    const wrapper = mount(AssetTableRow, {
      shallow: true,
      props: {
        asset: {
          ...asset,
          changePercent24Hr: '0'
        }
      }
    })

    expect(
      wrapper.find('[data-test="asset-table-row-change"]').element.classList.contains('text-danger')
    ).not.toBe(true)
    expect(
      wrapper
        .find('[data-test="asset-table-row-change"]')
        .element.classList.contains('text-success')
    ).not.toBe(true)
  })
})
