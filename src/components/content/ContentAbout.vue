<template>
  <div class="about-container">
    <header class="about-header">
      <h2 class="about-header__title">
        <img
          class="about-header__title-glasses"
          src="../../assets/icons/glasses.png"
          alt="glasses"
        />about me
      </h2>
      <p class="about-header__description">
        I have a very creative mind. My many interests and hobbies allow me to to look at
        each problem from a broader perspective, they allow me to think unconventionally,
        and thus generate an advantage over the competition. "Brightly the outlined goal
        is my priority. I believe it was delivered on time, high quality work is the key
        to real company results.
      </p>
    </header>

    <section class="about-skills">
      <ul class="skills-list">
        <li class="skills-item" v-for="(skill, id) in skills" :key="id">
          <img class="skills-item__img" :src="skill.img" alt="html-icon" />
          <h3 class="skills-item__title">{{ skill.name }}</h3>
        </li>
      </ul>
    </section>

    <!-- <section class="about-start">
      <h4 class="about-start__title">start of learning</h4>
      <span class="about-start__date">27.05.2020</span>
    </section> -->
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const skills = ref([
  { img: "./src/assets/icons/html.svg", name: "HTML" },
  { img: "./src/assets/icons/css.svg", name: "CSS/SCSS" },
  { img: "./src/assets/icons/javascript.svg", name: "JavaScript" },
  { img: "./src/assets/icons/typescript.svg", name: "TypeScript" },
  { img: "./src/assets/icons/vue.svg", name: "Vue" },
]);
</script>

<style lang="scss" scoped>
.about-container {
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

.about-skills {
  margin-top: 7rem;
}

.skills-list {
  display: flex;
  justify-content: center;
  flex-flow: wrap row;
  gap: 5rem;
}

.skills-item {
  &__img {
    width: 10rem;
    height: 10rem;
  }

  &__title {
  }
}

.about-start {
  &__title {
  }

  &__date {
  }
}
</style>
