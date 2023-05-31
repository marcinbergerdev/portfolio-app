<template>
  <canvas id="Matrix"></canvas>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
  const latin: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const nums: string = "0123456789";
  const alphabet: string = latin + nums;

  const canvas: any = document.getElementById("Matrix");
  const context: any = canvas.getContext("2d");

  canvas.height = window.innerHeight;

  const fontSize = 16;
  const columns = canvas.width / fontSize;

  const rainDrops: any = [];

  for (let x = 0; x < columns; x++) {
    rainDrops[x] = 1;
  }

  const draw = () => {
    context.fillStyle = "rgba(0, 0, 0, 0.05)";
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = "#00edf5";
    context.font = fontSize + "px monospace";

    for (let i = 0; i < rainDrops.length; i++) {
      const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
      context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

      if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        rainDrops[i] = 0;
      }
      rainDrops[i]++;
    }
  };

  setInterval(draw, 30);
});
</script>

<style scoped lang="scss">
#Matrix {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 100vh;
  opacity: 0.3;
}
</style>
