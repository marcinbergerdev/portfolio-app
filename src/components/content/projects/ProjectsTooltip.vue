<template>
  <div class="tooltip-list" v-if="isTooltip">
    <span v-for="(lang, id) in languages" :key="id" v-if="isTooltip">
      {{ lang }}
    </span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  languages?: string[];
  isTooltip: boolean;
}>();
</script>

<style scoped lang="scss">
@keyframes delayTooltip {
  0% {
    opacity: 0;
  }
  70% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.tooltip-list {
  display: none;

  @media (width >= 768px) {
    position: absolute;
    bottom: -62%;
    left: 50%;
    transform: translateX(-50%);

    display: flex;
    flex-flow: wrap row;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    width: 30rem;
    height: 10rem;

    font-size: 1.3rem;
    border-radius: 2rem;
    background-color: rgba(var(--glass-color), 0.45);
    backdrop-filter: blur(0.45rem);
    border: 1px solid var(--gold);
    animation: delayTooltip 0.5s ease-in-out;
  }
}
</style>
