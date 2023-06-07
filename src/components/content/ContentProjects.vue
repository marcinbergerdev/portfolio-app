<template>
  <section class="projects-wrapper">
    <header class="projects-header">
      <h2 class="projects-header__title">my projects</h2>
    </header>

    <ul class="projects-list">
      <li
        class="projects-item"
        :class="`project${1 + id}`"
        v-for="(project, id) in projects"
        :key="id"
      >
        <div class="project-glass glass-1"></div>
        <div class="project-glass glass-2"></div>
        <div class="project-glass glass-3"></div>

        <a
          :href="project.link"
          class="project-link"
          :style="{ 'background-image': `url(${project.img})` }"
        >
        </a>

        <div class="project-intro">
          <h3 class="project-intro__title">{{ project.title }}</h3>
          <p class="project-intro__description">{{ project.description }}</p>
        </div>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { Projects } from "../../types/Projects";

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

@keyframes showLanguageMobile {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  55% {
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes showLanguageDesktop {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  55% {
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 0.8;
  }
}

$projects: 4;
@for $i from 1 through $projects {
  .project#{$i} {
    animation: showLanguageMobile (0.35s * $i + 0.3) ease-out;
    @media (width >= 768px) {
      animation: showLanguageDesktop (0.35s * $i + 0.3) ease-out;
    }
  }
}
.projects-item {
  position: relative;
  display: grid;
  place-items: center;
  width: min(80%, 35rem);
  border-radius: 30px;
  opacity: 1;

  @media (width >= 768px) {
    opacity: 0.8;
    transition: all 0.15s ease-in-out;

    &:hover {
      opacity: 1;
      .project-link {
        opacity: 1;
        transform: scale(0.95);
        transition: all 0.15s ease-in-out;
      }

      .project-glass {
        $degree: 30deg;
        transition: all 0.15s ease-in-out;

        &.glass-1 {
          transform: translate3d(-2.5rem, -1rem, 0rem) rotate3d(1, 10, 1, 30deg);
        }
        &.glass-2 {
          transform: translate3d(2.5rem, -1rem, 0rem) rotate3d(0, 1, 0, -30deg);
        }
        &.glass-3 {
          transform: translate3d(0rem, 3rem, 0rem) rotate3d(1, 0.2, 0, 30deg);
        }
      }

      .project-intro {
        opacity: 1;
        transform: rotateX(0) translate(-50%, -2rem);
        transition: all 0.15s ease-in-out;
      }
    }
  }
}

.project-link {
  position: relative;
  display: block;
  width: 100%;
  height: 20rem;

  border-radius: 30px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  transition: all 0.15s ease-in-out;

  @media (width >= 768px) {
    opacity: 1;
  }
}

.project-glass {
  @media (width >= 768px) {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;

    width: 100%;
    height: 100%;
    perspective: 1200px;

    border-radius: 27px;
    background-color: rgba(#293442, 0.35);
    backdrop-filter: blur(0.3rem);
    transition: all 0.15s ease-in-out;
    &.glass-1 {
      clip-path: polygon(0% 0%, 35% 0%, 50% 50%, 0% 75%);
    }
    &.glass-2 {
      clip-path: polygon(35% 0%, 100% 0%, 100% 75%, 50% 50%);
    }
    &.glass-3 {
      clip-path: polygon(50% 50%, 100% 75%, 100% 100%, 0 100%, 0 75%);
    }
  }
}

.project-intro {
  position: absolute;
  top: -3.5rem;

  display: flex;
  align-items: center;
  gap: 1rem;

  &__title,
  &__description {
    font-size: 1.7rem;
  }

  &__description {
    display: flex;
    align-items: center;
    &::before {
      content: "-";
      margin-right: 1rem;
    }
  }

  @media (width >= 768px) {
    display: block;
    position: absolute;
    top: auto;
    bottom: -2rem;
    left: 50%;
    right: 1rem;
    z-index: 5;
    transform: rotateX(60deg) translate(-50%, 0);

    color: va(--text-color);
    opacity: 0;
    transition: all 0.15s ease-in-out;

    &__title {
      font-size: 2.3rem;
    }

    &__description {
      display: block;
      font-size: 1.3rem;

      &::before {
        content: "";
        margin: 0;
      }
    }
  }
}
</style>
