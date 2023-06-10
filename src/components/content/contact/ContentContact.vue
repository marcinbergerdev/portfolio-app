<template>
  <div class="contact-container">
    <header class="contact-header">
      <h2 class="contact-header__title">contact me</h2>
    </header>

    <section class="contact-content">
      <ContactSocial />
      <ContactFurtherDetails />
      <ContactForm />
    </section>
  </div>
</template>

<script setup lang="ts">
import ContactForm from "./ContactForm.vue";
import ContactSocial from "./ContactSocial.vue";
import ContactFurtherDetails from "./ContactFurtherDetails.vue";
</script>

<style scoped lang="scss">
.contact-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem 0;
  width: 100%;
  background-attachment: fixed;
}
.contact-header {
  &__title {
    font-size: 2.5rem;
    letter-spacing: 2px;
    font-weight: 500;
  }
}

.contact-content {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 0 2rem;
  width: 100%;
  height: 100%;
  background: inherit;

  @media (width >= 768px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    padding: 4rem;
    width: 90%;
    background-color: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(4rem);
    border: 1px solid var(--black);
    border-radius: 1.5rem;
  }
}
</style>
