<template>
  <section class="projects-wrapper">
    <header class="projects-header">
      <h2 class="projects-header__title">my projects</h2>
    </header>

    <ul class="projects-list">
      <li class="projects-item" v-for="(project, id) in projects" :key="id">
        <a href="#" class="projects-link">
          <div
            class="projects-link__img"
            :style="{ 'background-image': `url(${project.img})` }"
          ></div>
        </a>
      </li>
    </ul>
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
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10rem 0;

  @media (width >= 768px) {
    gap: 15rem;
  }
}
.projects-header {
  &__title {
    font-size: 3rem;
  }
}

.projects-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 7rem;
  align-items: center;

  @media (width >= 768px) {
    flex-flow: row wrap;
  }
}

.projects-item {
  display: grid;
  place-items: center;
  width: 100%;

  @media (width >= 768px) {
    width: 40rem;
  }
}

.projects-link {
  display: block;
  width: min(80%, 30rem);
  height: 20rem;

  &__img {
    width: 100%;
    height: 100%;

    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
}

// @keyframes showLanguage {
//   0% {
//     transform: scale(0);
//     opacity: 0;
//   }
//   60% {
//     opacity: 0;
//   }
//   100% {
//     transform: translate(1);
//     opacity: 1;
//   }
// }

// $projects: 4;
// @for $i from 1 through $projects {
//   .project#{$i} {
//     animation: showLanguage (0.2s * $i + 1) ease-in-out;
//   }
// }
</style>
