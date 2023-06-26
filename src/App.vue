<template>
  <div class="app-container">
    <NavContainer></NavContainer>
    <HamburgerButton></HamburgerButton>

    <main class="content-container">
      <BgParallax />

      <router-view v-slot="{ Component }">
        <transition name="rout" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import BgParallax from "./components/animation/BgParallax.vue";
const NavContainer = defineAsyncComponent(() => import("./components/nav/NavContainer.vue"));
const HamburgerButton = defineAsyncComponent(() => import("./components/hamburger/HamburgerButton.vue"));


</script>

<style lang="scss">
.app-container {
  width: 100%;
  height: 100vh;
  display: flex;
}

.content-container {
  flex: 1;
  padding: 10rem 0 7rem 0;
  text-align: center;
  overflow: auto;
  color: var(--text-color);

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-track {
    background-color: var(--bg-color);
  }

  &::-webkit-scrollbar-thumb {
    background-color: #8e760c;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: var(--gold);
  }
}
</style>