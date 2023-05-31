<template>
  <header class="header-logo">
    <router-link to="/about" class="glitch" data-text="marcinbergerdev"
      >marcinbergerdev</router-link
    >
  </header>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.header-logo {
  grid-area: logo;
  position: relative;
  z-index: 1;
  padding: 3rem 0;
  text-align: center;
  overflow: hidden;
}

.glitch {
  position: relative;
  display: block;
  font-size: 2rem;
  text-shadow: 0px -0px 3px rgba(255, 255, 255, 1);
  animation: noise-anim 3s 6s infinite linear alternate-reverse,
    shift 4s 6s ease-in-out infinite alternate, blur 8s 6s ease-in-out infinite alternate;
  transform: skewX(0deg);

  @media (width >= 768px) {
    font-size: 2.2rem;
  }
}
.glitch::after,
.glitch::before {
  content: attr(data-text);
  position: absolute;
  top: 0;
  color: transparent;
  background: transparent;
  clip: rect(0, 900px, 0, 0);
  animation: noise-anim 3s 6s infinite linear alternate-reverse,
    shift 4s 6s ease-in-out infinite alternate;
  transform: skewX(0deg);
  overflow: hidden;
  opacity: 0.8;
}

.glitch::after {
  left: 3px;
  text-shadow: -1px 0 red;
  z-index: -2;
}

.glitch::before {
  left: 1px;
  text-shadow: -3px 0 cyan;
  z-index: -1;
}

@keyframes noise-anim {
  $steps: 20;
  @for $i from 0 through $steps {
    #{percentage($i*calc(1 / $steps))} {
      clip: rect(random(100) + px, 9999px, random(100) + px, 0);
    }
  }
}

@keyframes blur {
  100% {
    text-shadow: 0px 0px 0px rgb(232, 235, 230), 0px 0px 1px rgba(255, 255, 255, 0),
      0px 0px 1px rgba(255, 255, 255, 0), 1px 1px 1px rgba(100, 240, 255, 0),
      0px 0px 1px rgba(255, 255, 255, 0);
  }

  75% {
    text-shadow: 0px 0px 0px rgba(255, 255, 255, 1), 0px 0px 1px rgb(210, 214, 208),
      0px 0px 1px rgb(210, 214, 208), 1px 1px 1px rgba(100, 240, 255, 1),
      0px 0px 1px rgb(210, 214, 208);
  }

  98% {
    text-shadow: 0px 0px 0px rgba(255, 255, 255, 0), 0px 0px 1px rgba(255, 255, 255, 0),
      0px 0px 1px rgba(255, 255, 255, 0), 1px 1px 1px rgba(255, 100, 100, 1),
      0px 0px 1px rgba(255, 255, 255, 0);
  }
}

@keyframes shift {
  41% {
    transform: skewX(5deg);
  }
  42% {
    transform: skewX(-5deg);
  }
  59% {
    transform: skewX(10deg) skewY(3deg);
  }
  60% {
    transform: skewX(-5deg) skewY(-5deg);
  }

  70% {
    transform: skewX(-8deg) skewY(-4deg);
    transform: scale(1.1);
  }
  80% {
    transform: scale(1);
  }
  100% {
    transform: skewX(0deg);
  }
}
</style>
