<template>
  <section class="projects-wrapper">
    <header class="projects-header">
      <h2 class="projects-header__title">my projects</h2>
    </header>

    <article class="projects-container">
      <ul class="projects-list">
        <li
          class="projects-box"
          :class="`project${1 + id}`"
          v-for="(project, id) in projects"
          :key="id"
        >
          <header class="project-header">
            <h3 class="project-header__title">{{ project.name }}</h3>
          </header>
          <a class="project-link" :href="project.link">
            <img
              loading="lazy"
              class="project-link__img"
              :src="project.img"
              alt="project-background"
            />
          </a>
        </li>
      </ul>
    </article>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

const projects = ref([
  {
    name: "Shopex - Online Shop",
    img: "/assets/projects/shopex.png",
    link: "https://shoopdev.netlify.app/#/shop",
  },
  {
    name: "Fito - Control your diet",
    img: "/assets/projects/fito.png",
    link: "https://fito-app.netlify.app/home",
  },
  {
    name: "QuizyEasy - Test your knowledge",
    img: "/assets/projects/quiz.png",
    link: "https://quizy-easy.netlify.app/start-quiz",
  },
  {
    name: "Galerion - Collect best fotos",
    img: "/assets/projects/galerion.png",
    link: "https://galerion.netlify.app/home/random",
  },
]);
</script>

<style scoped lang="scss">
.projects-wrapper {
}
.projects-header {
  &__title {
    font-size: 3rem;
  }
}

.projects-container {
}
.projects-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-flow: wrap row;
  gap: 10rem;
  margin-top: 10rem;
}

@keyframes showLanguage {
  0% {
    transform: translateY(-5rem);
    opacity: 0;
  }
  25% {
    opacity: 0;
  }
  100% {
    transform: translate(0);
    opacity: 1;
  }
}

.projects-box {
  width: min(25rem, 100%);
  height: 25rem;
}

$projects: 4;
@for $i from 1 through $projects {
  .project#{$i} {
    animation: showLanguage (0.2s * $i + 1) ease-in-out;
  }
}

.project-header {
  margin-bottom: 1rem;
  &__title {
    font-size: 1.5rem;
    font-weight: 500;
  }
}

.project-link {
  display: block;
  width: 100%;
  height: 100%;
  background-color: #000;

  &__img {
    width: 100%;
    height: 100%;
    opacity: 0.5;
  }
}
</style>
