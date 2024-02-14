<template>
  <div class="about-container">

    <header class="about-header">

      <h2 class="about-header__title">
        <img
          loading="lazy"
          class="about-header__title-glasses"
          src="/assets/icons/glasses.png"
          alt="glasses"
        />about me
      </h2>

  


      <p class="about-header__description">
        Driven by a deep curiosity for the world and technology, I am a dedicated
        individual with a relentless pursuit of knowledge. My patient and meticulous
        approach enables me to dive deep into challenges, seeking answers until they are
        found. With a specialized focus on Vue.js, I bring creativity and innovation to
        every project. "only those who seek shall find"
      </p>

    </header>

    <section class="about-skills">

      <header class="skills-experience">
        <h3 class="skills-experience__title">my skills</h3>
      </header>

      <ul class="skills-list">
        <li class="skills-item" v-for="({ img, name }, id) in skills" :key="id">
          <div class="skills-languages" :class="`languages${1 + id}`">
            <img
              loading="lazy"
              class="skills-languages__img"
              :src="img"
              alt="html-icon"
            />
            <h4 class="skills-languages__title">{{ name }}</h4>
          </div>
        </li>
      </ul>

    </section>

    <section class="about-skills">

      <header class="skills-experience">
        <h3 class="skills-experience__title">currently learning</h3>
      </header>


      <ul class="skills-list">
        <li class="skills-item" v-for="({ img, name }, id) in currentSkills" :key="id">
          <div class="skills-languages" :class="`currentLanguages${1 + id}`">
            <img
              loading="lazy"
              class="skills-languages__img"
              :src="img"
              alt="html-icon"
            />
            <h4 class="skills-languages__title">{{ name }}</h4>
          </div>
        </li>
      </ul>

    </section>

    <section class="about-start">

      <h5 class="about-start__title">start of learning</h5>
      <span class="about-start__date">27.05.2020</span>

    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface MySkills {
  img: string;
  name: string;
}

const skills = ref<MySkills[]>([
  { img: "/assets/icons/html.svg", name: "HTML" },
  { img: "/assets/icons/css.svg", name: "CSS/SCSS" },
  { img: "/assets/icons/javascript.svg", name: "JavaScript" },
  { img: "/assets/icons/typescript.svg", name: "TypeScript" },
  { img: "/assets/icons/vue.svg", name: "Vue" },
  { img: "/assets/icons/nuxt.svg", name: "Nuxt" },
]);

const currentSkills = ref<MySkills[]>([
  { img: "/assets/icons/jest.svg", name: "Jest" },
]);
</script>

<style lang="scss" scoped>
.about-container {
  @media (width >= 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    min-height: 100%;
    gap: 10rem;
  }
}

.about-skills,
.about-start {
  margin-top: 13rem;

  @media (width >= 768px) {
    margin: 0;
  }
}

.about-header {
  padding: 0 2rem;

  &__title {
    position: relative;
    width: 15rem;
    margin: 0 auto;
    font-size: 3rem;
    &-glasses {
      position: absolute;
      top: 50%;
      left: 6%;
      z-index: -20;
      transform: translate(-50%, -50%) rotate(-30deg);

      width: 7rem;
      height: 7rem;
      opacity: 0.8;
    }
  }

  &__description {
    width: min(95rem, 100%);
    margin: 2rem auto;
    font-size: 1.5rem;
  }
}

.skills-list {
  display: flex;
  justify-content: center;

  flex-flow: wrap row;
  gap: 5rem;
}
.skills-item {
  display: grid;
  place-items: center;
  overflow: hidden;
  width: 10rem;
  height: 10rem;

  @media (width >= 768px) {
    width: 15rem;
    height: 15rem;
  }
}

.skills-experience {
  margin-bottom: 3rem;
  &__title {
    font-size: 3rem;
  }
}

.skills-languages {
  &__img {
    width: 8rem;
    height: 8rem;
    @media (width >= 768px) {
      width: 10rem;
      height: 10rem;
    }
  }

  &__title {
    margin-top: 0.5rem;
  }
}

@keyframes showLanguages {
  0% {
    transform: translateY(-5rem);
    opacity: 0;
  }
  45% {
    opacity: 0;
  }
  100% {
    transform: translate(0);
    opacity: 1;
  }
}

$languages: 5;
@for $i from 1 through $languages {
  .languages#{$i} {
    animation: showLanguages (0.2s * $i + 0.3) ease-in-out;
  }
}

$currentLanguages: 2;
@for $i from 1 through $currentLanguages {
  .currentLanguages#{$i} {
    opacity: 0;
    animation: showLanguages (0.2s * $i + 0.3) 0.8s forwards;
  }
}

.about-start {
  &__title {
    margin-bottom: 1rem;
    font-size: 2rem;
  }

  &__date {
    font-size: 1.5rem;
  }
}
</style>
