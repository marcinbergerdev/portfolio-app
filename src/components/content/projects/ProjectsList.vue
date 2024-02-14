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
      :languages="project.languages"
    ></ContentItem>
  </ul>
</template>

<script setup lang="ts">
import { Projects } from "../../../types/Projects";
import ContentItem from "./ProjectsItem.vue";
import { ref } from "vue";

const projects = ref<Projects[]>([
  {
    title: "Calendar Manager",
    description: "Plan your life",
    img: "/assets/projects/calendar.png",
    link: "https://calendar-menager.netlify.app",
    languages: ["(HTML/CSS/SCSS)", "TypeScript", "Nuxt 3", "Unit Testing", "FireBase"],
  },
  {
    title: "Shopex",
    description: "Online Shop",
    img: "/assets/projects/shopex.png",
    link: "https://shoopdev.netlify.app/#/shop",
    languages: [
      "(HTML/CSS/SCSS)",
      "TypeScript",
      "Vue 3(Composition API, Routing, Transition, Pinia)",
      "FireBase",
    ],
  },
  {
    title: "Fito",
    description: "Control your diet",
    img: "/assets/projects/fito.png",
    link: "https://fito-app.netlify.app/home",
    languages: [
      "(HTML/CSS/SCSS)",
      "TypeScript",
      "Vue(Option API, Routing,Transition,Vuex)",
      "FireBase",
    ],
  },
  {
    title: "QuizyEasy",
    description: "Test your knowledge",
    img: "/assets/projects/quiz.png",
    link: "https://quizy-easy.netlify.app/start-quiz",
    languages: [
      "(HTML/CSS/SCSS)",
      "TypeScript",
      "Vue(Option API, Routing,Transition)",
      "Locale Storage",
    ],
  },
  {
    title: "Galerion",
    description: "Collect best pictures",
    img: "/assets/projects/galerion.png",
    link: "https://galerion.netlify.app/home/random",
    languages: ["(HTML/CSS/SCSS)", "Vue(Option API,Routing)", "Axios", "Locale Storage"],
  },
]);
</script>

<style scoped lang="scss">
.projects-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15rem;
  padding-bottom: 7rem;

  @media (width >= 768px) {
    flex-flow: row wrap;
    padding: 0 5rem 7rem 5rem;
  }
}
</style>
