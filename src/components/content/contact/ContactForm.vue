<template>
  <form class="form-container" @submit.prevent="sendHandler">

    <div class="inputs-container">

      <div class="input-box">
        <input class="input-box__input" type="text" placeholder="name" />
        <p class="input-box__error-message" v-if="isError">this is required</p>
      </div>

      <div class="input-box">
        <input class="input-box__input" type="text" placeholder="title" />
        <p class="input-box__error-message" v-if="isError">this is required</p>
      </div>

      <div class="input-box">
        <input class="input-box__input" type="email" placeholder="email" />
        <p class="input-box__error-message" v-if="isError">this is required</p>
      </div>

      <div class="input-box">
        <textarea
          class="input-box__input message-area"
          cols="30"
          rows="16"
          placeholder="your message..."
        ></textarea>
        <p class="input-box__error-message" v-if="isError">error</p>
      </div>

    </div>

    <button class="send-button">send</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isError = ref<boolean>(false);


const sendHandler = () => {
  
}

</script>

<style scoped lang="scss">
.form-container {
  flex: 2;
}

.inputs-container {
  display: flex;
  gap: 2rem 0;
  flex-direction: column;
}

.input-box {
  display: flex;
  flex-direction: column;
  flex: 1;

  &__input {
    padding: 1.5rem 2rem;
    font-size: 1.4rem;
    color: var(--white);
    background-color: #080e13;
    border-radius: 15px;
    border: 1px solid var(--black);
    outline: none;

    &:focus {
      outline: 1px solid #b89302;
    }
  }

  &__error-message {
    align-self: flex-start;
    margin: 0.9rem;
    font-size: 1.3rem;
    color: var(--form-error);
    font-weight: 500;
  }
}

.message-area {
  resize: vertical;
}

.send-button {
  margin-top: 5rem;
  padding: 0.9rem 0;
  width: min(17rem, 100%);
  font-size: 1.8rem;
  color: var(--white);
  background-color: transparent;
  border: 2px solid var(--black);
  border-radius: 15rem;
  backdrop-filter: blur(2rem);

  opacity: 0.8;
  transition: all 0.15s ease-in-out;

  &:hover {
    cursor: pointer;
    opacity: 1;
    box-shadow: 0 0 15px 3px rgba(#d4aa00, 0.26);
    transition: all 0.15s ease-in-out;
  }
}
</style>
