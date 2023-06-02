<template>
  <button
    class="hamburger-box"
    :class="isHamburgerActive"
    v-if="isHamburgerVisible"
    @click="menu.toggleMenuHandler"
    aria-label="Main Menu"
  >
    <svg width="40" height="40" viewBox="0 0 100 100">
      <path
        class="hamburger-line top"
        d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
      />
      <path class="hamburger-line mid" d="M 20,50 H 80" />
      <path
        class="hamburger-line bottom"
        d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
      />
    </svg>
  </button>
</template>

<script setup lang="ts">
import { useWindowSize } from "@vueuse/core";
import { useToggleMenu } from "../../store/ToggleMenu";
import { computed } from "vue";

const { width } = useWindowSize();
const menu = useToggleMenu();

const isHamburgerActive = computed<object>(() => {
  return { opened: menu.isOpen };
});

const isHamburgerVisible = computed<boolean>(() => {
  return width.value >= 768 ? false : true;
});
</script>

<style scoped lang="scss">
.hamburger-box {
  position: fixed;
  top: 1.5rem;
  right: 1.5rem;
  z-index: 100;

  display: flex;
  padding: 0.5rem;
  border: none;
  background-color: var(--black);
  border-radius: 35%;
  cursor: pointer;
}
.hamburger-line {
  fill: none;
  stroke: #fff;
  stroke-width: 6;
  transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
    stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
}
.top {
  stroke-dasharray: 60 207;
  stroke-width: 6;
}
.mid {
  stroke-dasharray: 60 60;
  stroke-width: 6;
}
.bottom {
  stroke-dasharray: 60 207;
  stroke-width: 6;
}
.opened .top {
  stroke-dasharray: 90 207;
  stroke-dashoffset: -134;
  stroke-width: 6;
}
.opened .mid {
  stroke-dasharray: 1 60;
  stroke-dashoffset: -30;
  stroke-width: 6;
}
.opened .bottom {
  stroke-dasharray: 90 207;
  stroke-dashoffset: -134;
  stroke-width: 6;
}
</style>
