<template>
  <li class="nav-item">
    <BaseNavLink mode="option-link" :name="name" :path="path">
      <Icon class="link-icon" icon="ion:chevron-forward-circle-outline" />
    </BaseNavLink>
  </li>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";

defineProps<{
  id: number;
  name: string;
  path: string;
}>();
</script>

<style scoped lang="scss">
.nav-item {
  position: relative;
  padding-left: 1rem;
  font-size: 2rem;
  overflow: hidden;
}

.link-icon {
  position: absolute;
  top: 2.5rem;
}
</style>
