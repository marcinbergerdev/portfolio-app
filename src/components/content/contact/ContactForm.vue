<template>
  <form class="form-container" @submit.prevent="">
    <div class="inputs-box">
      <input class="user-input" type="text" />
      <input class="user-input" type="text" />
      <input class="user-input" type="email" />
      <textarea class="user-input" name="" id="" cols="30" rows="10"></textarea>
    </div>
    <button>send</button>
  </form>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.form-container {
  flex: 2;
}

.inputs-box {
  display: flex;
  flex-direction: column;
}

.user-input {
}
</style>
