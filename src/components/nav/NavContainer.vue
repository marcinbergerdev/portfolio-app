<template>
  <div class="backdrop" v-show="menu.isOpen" @click="menu.closeMenuHandler"></div>
  <nav class="nav-container" :class="isOpened">
    <MatrixAnimation></MatrixAnimation>
    <Logo></Logo>
    <NavList></NavList>
  </nav>
</template>

<script setup lang="ts">
import MatrixAnimation from "../animation/MatrixAnimation.vue";
import Logo from "../logo/Logo.vue";
import NavList from "./NavList.vue";
import { useToggleMenu } from "../../store/ToggleMenu";
import { computed } from "vue";

const menu = useToggleMenu();

const isOpened = computed<object>(() => {
  return { opened: menu.isOpen };
});
</script>

<style scoped lang="scss">
.backdrop {
  position: absolute;
  top: 0;
  z-index: 50;
  width: 100%;
  height: 100vh;
  background-color: var(--black);
  opacity: 0.3;

  @media (width >= 768px) {
    display: none;
  }
}

.nav-container {
  position: absolute;
  top: 0;
  z-index: 100;
  transform: translateX(-20rem);

  display: flex;
  flex-direction: column;
  width: min(20rem, 100%);
  height: 100vh;

  background-color: var(--black);
  transition: transform 0.15s ease-in-out;
  overflow: auto;

  @media (width >= 768px) {
    position: relative;
    transform: none;
    transition: all 0s ease 0s;
  }
}

.opened {
  transform: translateX(0);
  transition: 0.15s ease-in-out;
}
</style>
