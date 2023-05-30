<template>
  <div class="app-container">
    <NavContainer></NavContainer>

    <main class="content-container">
      <router-view v-slot="{ Component }">
        <transition name="rout" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<script setup lang="ts">
import NavContainer from "./components/nav/NavContainer.vue";
</script>

<style lang="scss">

.app-container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
}

.content-container {
  
}

</style>