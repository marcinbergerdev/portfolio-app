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
  background-color: gray;
}
</style>
