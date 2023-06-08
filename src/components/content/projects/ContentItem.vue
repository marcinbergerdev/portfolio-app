<template>
  <li class="projects-item" :class="`project${1 + id}`">
    <div class="glass-effect-container" v-if="isGlass">
      <span class="glass-effect glass-1"></span>
      <span class="glass-effect glass-2"></span>
      <span class="glass-effect glass-3"></span>
    </div>

    <a :href="link" class="link" :style="{ 'background-image': `url(${image})` }"> </a>

    <div class="intro">
      <h3 class="intro__title">{{ title }}</h3>
      <p class="intro__description">{{ description }}</p>
    </div>
  </li>
</template>

<script setup lang="ts">
import { useWindowSize } from "@vueuse/core";
import { computed } from "vue";

const { width } = useWindowSize();

const isGlass = computed<boolean>(() => {
  return width.value >= 768 ? true : false;
});

defineProps<{
  id: number;
  link: string;
  image: string;
  title: string;
  description: string;
}>();
</script>

<style scoped lang="scss">
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
      .link {
        opacity: 1;
        transform: scale(0.95);
        transition: all 0.15s ease-in-out;
      }

      .glass-effect {
        $degree: 30deg;
        transition: all 0.15s ease-in-out;

        &.glass-1 {
          transform: translate3d(-2.5rem, -1rem, 0rem) rotate3d(1, 10, 1, 30deg);
        }
        &.glass-2 {
          transform: translate3d(2.5rem, -1rem, 0rem) rotate3d(0, 2, 0, -30deg);
        }
        &.glass-3 {
          transform: translate3d(0rem, 3rem, 0rem) rotate3d(1, 0.2, 0, 30deg);
        }
      }

      .intro {
        opacity: 1;
        transform: rotateX(0) translate(-50%, -2rem);
        transition: all 0.15s ease-in-out;
      }
    }
  }
}

.glass-effect {
  @media (width >= 768px) {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;

    perspective: 1200px;
    width: 100%;
    height: 100%;

    border-radius: 27px;
    background-color: rgba(var(--glass-color), 0.35);
    backdrop-filter: blur(0.3rem);
    transition: all 0.15s ease-in-out;
    pointer-events: none;
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

.link {
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

.intro {
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
    pointer-events: none;

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
