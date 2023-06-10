<template>
  <div class="social-container">
    <a
      class="social-link"
      :href="link"
      v-for="({ link, icon, name }, id) in socials"
      :key="id"
    >
      <img class="social-link__icon" :src="icon" :alt="name" />

      <span class="social-link__name">{{ name }}</span>
    </a>
  </div>
</template>

<script setup lang="ts">
import { Socials } from "../../../types/Socials";
import { ref } from "vue";

const socials = ref<Socials[]>([
  {
    link: "https://www.linkedin.com/in/marcin-berger-11bb03261/",
    icon: "/assets/icons/linkedin.svg",
    name: "Linkedin",
  },
]);
</script>

<style scoped lang="scss">
.social-container {
  flex: 1;
  display: flex;
  align-items: flex-start;
  margin-top: 5rem;

  justify-content: center;
  @media (width >= 768px) {
    margin: 0;
    justify-content: flex-end;
  }
}

.social-link {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 1rem;

  padding: 0.3rem 0;
  width: min(17rem, 100%);
  border: 2px solid var(--black);
  border-radius: 15rem;
  backdrop-filter: blur(2rem);

  @media (width >= 768px) {
    backdrop-filter: none;
    opacity: 0.8;
    transition: all 0.15s ease-in-out;

    &:hover {
      opacity: 1;
      box-shadow: 0 0 15px 3px rgba(#d4aa00, 0.26);
      transition: all 0.15s ease-in-out;
    }
  }

  &__icon,
  &__name {
    pointer-events: none;
  }

  &__icon {
    width: 3rem;
    height: 3rem;
  }
  &__name {
    font-size: 1.6rem;
  }
}
</style>
