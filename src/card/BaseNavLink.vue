<template>
  <router-link :class="mode" :to="path" v-if="!redirectToGithub">
    <slot></slot>
    <span class="link-name">{{ name }}</span>
  </router-link>

  <a :class="mode" :href="path" v-else>
    <slot></slot>
    <span class="link-name">{{ name }}</span>
  </a>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  mode: string;
  path: string;
  name: string;
}>();

const redirectToGithub = computed(() => {
  return props.name === "github";
});
</script>

<style scoped lang="scss">


.link-name {
  display: block;
}
</style>
