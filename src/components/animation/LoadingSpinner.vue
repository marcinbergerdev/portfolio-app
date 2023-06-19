<template>
  <div class="loading-spinner-dots">
    <div class="loading-spinner-dots__dot"></div>
    <div class="loading-spinner-dots__dot"></div>
    <div class="loading-spinner-dots__dot"></div>
  </div>
</template>

<style scoped lang="scss">
@keyframes loading-spinner-dots-animation {
  50% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.loading-spinner-dots {
  position: absolute;
  inset: 50%;
  transform: translate(-50%);
  height: 15px;
  width: calc(35px * 3);

  &__dot {
    width: 20px;
    height: 20px;
    margin: 0 calc(15px / 2);
    border: calc(15px / 5) solid var(--gold);
    border-radius: 50%;
    float: left;
    transform: scale(0);
    animation: loading-spinner-dots-animation 1s ease infinite 0ms;

    &:nth-child(1) {
      animation-delay: calc(300ms * 1);
    }
    &:nth-child(2) {
      animation-delay: calc(300ms * 2);
    }
    &:nth-child(3) {
      animation-delay: calc(300ms * 3);
    }
  }
}
</style>