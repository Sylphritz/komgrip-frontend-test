<template>
  <div class="row my-4">
    <div class="col-lg-12 col-md-6 mb-md-0 mb-4">
      <div class="card">
        <div class="card-header pb-0">
          <div class="row">
            <div class="col-lg-6 col-12">
              <h6>Cryptocurrencies</h6>
            </div>
            <div class="col-lg-6 col-12 my-auto text-end">
              <div
                class="d-flex align-items-end justify-content-sm-end justify-content-between gap-3"
              >
                <button
                  type="button"
                  class="btn btn-outline-primary btn-sm mb-0"
                  :disabled="pageOffset === 0"
                  @click="getPreviousPage"
                >
                  <i class="fas fa-angle-left fs-6 align-middle"></i>
                </button>
                <button
                  type="button"
                  class="btn btn-outline-primary btn-sm mb-0"
                  :disabled="assets.length === 0"
                  @click="getNextPage"
                >
                  <i class="fas fa-angle-right fs-6 align-middle"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="card-body px-0 pb-2">
          <div class="table-responsive">
            <table class="table table-hover align-items-center mb-0">
              <thead>
                <tr>
                  <th
                    class="text-center text-uppercase text-secondary font-weight-bolder opacity-7"
                  >
                    No
                  </th>
                  <th class="text-uppercase text-secondary font-weight-bolder opacity-7 p-2">
                    Name
                  </th>
                  <th
                    class="text-center text-uppercase text-secondary font-weight-bolder opacity-7"
                  >
                    Symbol
                  </th>
                  <th class="text-end text-uppercase text-secondary font-weight-bolder opacity-7">
                    Supply/Max Supply
                  </th>
                  <th class="text-end text-uppercase text-secondary font-weight-bolder opacity-7">
                    USD
                  </th>
                  <th
                    class="text-center text-uppercase text-secondary font-weight-bolder opacity-7"
                  >
                    24 Hr
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-if="fetching && assets.length === 0" class="text-center">
                  <td colspan="6" class="py-3"><i class="fas fa-spinner fa-spin fs-3"></i></td>
                </tr>
                <AssetTableRow v-else v-for="asset in assets" :key="asset.id" :asset="asset" />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import AssetTableRow from './AssetTable/AssetTableRow.vue'
import { useUserAssetsStore } from '@/stores/userAssets'

const userAssetsStore = useUserAssetsStore()
const { assets, pageOffset, fetching } = storeToRefs(userAssetsStore)
const { getPreviousPage, getNextPage } = userAssetsStore
</script>
