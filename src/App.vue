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
import BgParallax from "./components/animation/BgParallax.vue";
import NavContainer from "./components/nav/NavContainer.vue";
import HamburgerButton from "./components/hamburger/HamburgerButton.vue";
</script>

<style lang="scss">
.app-container {
  width: 100%;
  height: 100vh;
  display: flex;
}

.content-container {
  flex: 1;
  padding-top: 10rem;
  text-align: center;
  overflow-y: scroll;
  @media (width >= 768px) {
    margin: 0;
    padding-top: 16rem;
  }
}
</style>
