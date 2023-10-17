<template>
  <li class="nav-item">
    <a class="nav-link" :class="{ active: isActive }" :href="url">
      <div
        class="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center"
      >
        <Component v-if="icon" :is="icon" />
        <i v-else class="fas fa-square"></i>
      </div>
      <span class="nav-link-text ms-1">
        <slot />
      </span>
    </a>
  </li>
</template>

<script setup lang="ts">
defineProps({
  url: {
    type: String,
    required: true
  },
  icon: {
    type: Object
  },
  isActive: {
    type: Boolean
  }
})
</script>

<style lang="scss" scoped>
.fas {
  color: inherit;
}
</style>
