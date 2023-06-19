<template>
  <form class="form-container" ref="formData" @submit.prevent="checkFormHandler">
    <div class="inputs-container">
      <div class="input-box" v-for="(input, id) in formInputs" :key="id">
        <input
          class="input-box__input"
          :type="input.type"
          :name="input.name"
          :placeholder="input.placeholder"
          v-model="userFormData[input.name]"
        />
        <p
          class="input-box__error-message"
          v-if="isInputEmpty && !userFormData[input.name].trim()"
        >
          this is required
        </p>
      </div>

      <div class="input-box">
        <textarea
          class="input-box__input message-area"
          cols="30"
          rows="11"
          name="message"
          placeholder="your message..."
          v-model="userFormData.message"
        ></textarea>
        <p
          class="input-box__error-message"
          v-if="isInputEmpty && !userFormData.message.trim()"
        >
          this is required
        </p>
      </div>
    </div>

    <button class="send-button">send</button>
  </form>

  <ContentFormResponseModal
    v-if="isModal"
    :is-error-message="isErrorMessage"
    :loading-spinner="isLoadingSpinner"
    :title="responseMessage"
    @close="closeModal"
  />
</template>

<script setup lang="ts">
import ContentFormResponseModal from "./ContentFormResponseModal.vue";
import EmailJs from "@emailjs/browser";
import { UserDataForm } from "../../../types/FormData";
import { FormInputs } from "../../../types/Inputs";
import { ref, reactive } from "vue";

const isInputEmpty = ref<boolean>(false);
const isLoadingSpinner = ref<boolean>(false);
const isModal = ref<boolean>(false);
const isErrorMessage = ref<string>("");

const formData = ref<string>("");
const responseMessage = ref<string>("");

const userFormData = reactive<UserDataForm>({
  name: "",
  title: "",
  email: "",
  message: "",
});

const formInputs = ref<FormInputs[]>([
  { type: "text", name: "name", placeholder: "name" },
  { type: "text", name: "title", placeholder: "title" },
  { type: "email", name: "email", placeholder: "email" },
]);

const checkFormHandler = () => {
  const inputsEmptyStatus = Object.values(userFormData).every(
    (input: string) => input !== "" && input.trim()
  );
  isInputEmpty.value = true;
  if (!inputsEmptyStatus) return;
  sendEmail();
};

const sendEmail = async () => {
  isModal.value = true;
  isLoadingSpinner.value = true;

  await EmailJs.sendForm(
    import.meta.env.VITE_SERVICE_ID,
    import.meta.env.VITE_TEMPLATE_ID,
    formData.value,
    import.meta.env.VITE_PUBLIC_KEY
  ).then(
    () => {
      responseMessage.value = "Success, sending a message was successful!";
    },
    () => {
      isErrorMessage.value = "error";
      responseMessage.value = "Sorry, something went wrong message not sent :(";
    }
  );

  isLoadingSpinner.value = false;
};

const closeModal = () => {
  isModal.value = false;
  responseMessage.value = "";
  isErrorMessage.value = "";
  userFormData.name = "";
  userFormData.title = "";
  userFormData.email = "";
  userFormData.message = "";
};
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
    background-color: var(--input-bg);
    border-radius: 15px;
    border: 1px solid var(--border-color);
    outline: none;

    &:focus {
      outline: 1px solid var(--gold);
    }

    @media (width >= 768px) {
      border: 1px solid var(--black);
    }
  }

  &__error-message {
    align-self: flex-start;
    margin: 0.4rem 0 0 0.7rem;
    font-size: 1.2rem;
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
  border: 1px solid var(--border-color);;
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

  @media (width >= 768px) {
    border: 2px solid var(--black);
  }
}

.error-border {
  outline: 1px solid var(--form-error);
}
</style>