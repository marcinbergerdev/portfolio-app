<template>
  <section class="projects-wrapper">
    <header class="projects-header">
      <h2 class="projects-header__title">my projects</h2>
    </header>

    <article class="projects-container">
      <ul class="projects-list">
        <li class="projects-box" v-for="(project, id) in projects" :key="id">
          1
          <div></div>
        </li>
      </ul>
    </article>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

const projects = ref([{ name: "Project1" },{ name: "Project2" }]);
</script>

<style scoped lang="scss">
.projects-wrapper {
}
.projects-header {
  &__title {
  }
}

.projects-container {
}
.projects-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
.projects-box {
  width: min(100%, 30rem);
  height: 30rem;
  background-color: red;
}
</style>
