<template>
  <ul class="projects-list">
    <ContentItem
      v-for="(project, id) in projects"
      :key="id"
      :id="id"
      :link="project.link"
      :image="project.img"
      :title="project.title"
      :description="project.description"
    ></ContentItem>
  </ul>
</template>

<script setup lang="ts">
import { Projects } from "../../../types/Projects";
import ContentItem from "./ContentItem.vue";
import { ref } from "vue";

const projects = ref<Projects[]>([
  {
    title: "Shopex",
    description: "Online Shop",
    img: "/assets/projects/shopex.png",
    link: "https://shoopdev.netlify.app/#/shop",
  },
  {
    title: "Fito",
    description: "Control your diet",
    img: "/assets/projects/fito.png",
    link: "https://fito-app.netlify.app/home",
  },
  {
    title: "QuizyEasy",
    description: "Test your knowledge",
    img: "/assets/projects/quiz.png",
    link: "https://quizy-easy.netlify.app/start-quiz",
  },
  {
    title: "Galerion",
    description: "Collect best pictures",
    img: "/assets/projects/galerion.png",
    link: "https://galerion.netlify.app/home/random",
  },
]);
</script>

<style scoped lang="scss">
.projects-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 13rem;
  padding-bottom: 7rem;

  @media (width >= 768px) {
    flex-flow: row wrap;
  }
}
</style>
