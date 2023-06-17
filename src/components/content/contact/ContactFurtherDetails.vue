<template>
  <div class="contact-info">
    <span>or</span>
    <span>write to me directly</span>
    <img src="/assets/icons/email.svg" alt="email" />
  </div>
</template>

<style scoped lang="scss">
.contact-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem 0;
  font-size: 1.6rem;
  margin: 5rem 0;

  @media (width >= 768px) {
    display: none;
  }
}
</style>
