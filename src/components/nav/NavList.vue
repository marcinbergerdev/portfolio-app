<template>
  <ul class="nav-list">
    <NavItem
      v-for="option in options"
      :key="option.id"
      :id="option.id"
      :name="option.name"
      :path="option.path"
    ></NavItem>
  </ul>
</template>

<script setup lang="ts">
import NavItem from "./NavItem.vue";
import { Options } from "../../types/Options";
import { ref } from "vue";

const options = ref<Options[]>([
  { id: 1, name: "about me", path: "/about" },
  { id: 2, name: "projects", path: "/projects" },
  {
    id: 3,
    name: "github",
    path: "https://github.com/marcinbergerdev",
  },
  { id: 4, name: "contact", path: "/contact" },
]);
</script>

<style scoped lang="scss">
.nav-list{
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4rem;
  padding: 4rem 1.5rem;
}
</style>