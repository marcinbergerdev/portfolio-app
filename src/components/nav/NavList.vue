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
  { id: 1, name: "about me", path: "#" },
  { id: 2, name: "projects", path: "#" },
  {
    id: 3,
    name: "github",
    path: "https://github.com/marcinbergerdev",
  },
  { id: 4, name: "contact", path: "#" },
]);
</script>

<style scoped></style>
