<template>
  <nav class="nav-container">
    <Logo></Logo>
    <NavList></NavList>
  </nav>
</template>

<script setup lang="ts">
import Logo from "../logo/Logo.vue";
import NavList from "./NavList.vue";
</script>

<style scoped lang="scss">
.nav-container {
  display: flex;
  flex-direction: column;

  position: absolute;
  top: 0;
  transform: translateX(-20rem);

  width: min(20rem, 100%);
  height: 100%;

  overflow: auto;
  background-color: var(--black);
  transition: transform 0.15s ease-in-out;

  @media (width >= 768px) {
    position: static;
    transform: none;
    transition: all 0s ease 0s;
  }
}

.opened {
  transform: translateX(0);
  transition: 0.15s ease-in-out;
}
</style>
