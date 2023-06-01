<template>
  <div class="about-container">
    <header class="about-header">
      <h2 class="about-header__title">about me</h2>
      <p class="about-header__description">
        I have a very creative mind. My many interests and hobbies allow me to
        to look at each problem from a broader perspective, they allow me to think
        unconventionally, and thus generate an advantage over the competition. "Brightly
        the outlined goal is my priority. I believe it was delivered on time, high
        quality work is the key to real company results.
      </p>
    </header>

    <section class="skills-container">
      <ul class="skills-list">
        <li class="skill-data" v-for="(skill, id) in skills" :key="id">
          <img class="skill-data__img" :src="skill.img" alt="html-icon" />
          <h3 class="skill-data__title">{{ skill.name }}</h3>
        </li>
      </ul>
    </section>

    <section class="start-container">
      <h4 class="start-container__title">start of learning</h4>
      <span class="start-container__date">27.05.2020</span>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const skills = ref([
  { img: "/src/assets/icons/html.svg", name: "HTML" },
  { img: "/src/assets/icons/css.svg", name: "CSS/SCSS" },
  { img: "/src/assets/icons/javascript.svg", name: "JavaScript" },
  { img: "/src/assets/icons/typescript.svg", name: "TypeScript" },
  { img: "/src/assets/icons/vue.svg", name: "Vue" },
]);
</script>

<style lang="scss" scoped>
.about-container {
  width: 100%;
  height: 100%;
}

.about-header {
  padding: 0 2rem;
  &__title {
    font-size: 3rem;
  
  }

  &__description {
    width: min(54rem, 100%);
    margin: 2rem auto;
    font-size: 1.5rem;
  }
}

.skills-container {
}

.skill-data {
  &__img {
  }

  &__title {
  }
}

.start-container {
  &__title {
  }

  &__date {
  }
}
</style>
