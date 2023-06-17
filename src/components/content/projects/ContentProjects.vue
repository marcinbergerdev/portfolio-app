<template>
  <section class="projects-wrapper">
    <header class="projects-header">
      <h2 class="projects-header__title">my projects</h2>
    </header>

    <ContentList />
  </section>
</template>

<script setup lang="ts">
import ContentList from "./ContentList.vue";
</script>

<style scoped lang="scss">
.projects-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 15rem 0;
}
.projects-header {
  &__title {
    font-size: 3rem;
  }
}
</style>
