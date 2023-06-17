<template>
  <teleport to="body">
    <div class="modal-container">
      <LoadingSpinner v-if="loadingSpinner" />

      <dialog v-else class="dialog-box" open>
        <h2 class="dialog-box__title" :class="isError">{{ title }}</h2>
        <button class="dialog-box__closeButton" @click="$emit('close')">Close</button>
      </dialog>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import LoadingSpinner from "../../animation/LoadingSpinner.vue";
import { computed } from "vue";

defineEmits<{
  close: [];
}>();

const props = defineProps<{
  isErrorMessage: string;
  loadingSpinner: boolean;
  title: string;
}>();

const isError = computed<string>(() => {
  return props.isErrorMessage;
});
</script>

<style scoped lang="scss">
.modal-container {
  position: absolute;
  top: 0;
  z-index: 100;

  display: grid;
  place-items: center;

  padding: 0 4rem;
  width: 100%;
  height: 100vh;
  background-color: rgba(#000000, 0.3);
}

.dialog-box {
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem 0;
  padding: 3rem 4rem;
  width: min(50rem, 100%);

  border-radius: 2rem;
  background-color: rgba(var(--glass-color), 0.45);
  backdrop-filter: blur(0.45rem);
  border: 1px solid var(--gold);

  &__title {
    color: var(--form-success);
    font-weight: 500;
  }

  &__closeButton {
    padding: 0.5rem 2rem;
    background-color: transparent;
    border: 1px solid var(--black);
    border-radius: 2rem;
    color: var(--white);
    transition: 0.2s ease-out;

    @media (width >= 768px) {
      &:hover {
        cursor: pointer;
        background-color: var(--black);
        transition: 0.2s ease-out;
      }
    }
  }
}

.error {
  color: var(--form-error);
}
</style>
