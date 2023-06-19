<template>
  <span
    class="stars-parallax"
    :class="`stars-parallax${1 + id}`"
    v-for="(__, id) in 3"
    :key="id"
  ></span>
</template>

<style scoped lang="scss">
@function multiple-box-shadow($n) {
  $value: "#{random(2000)}px #{random(2000)}px #{var(--gold)}";
  @for $i from 2 through $n {
    $value: "#{$value}, #{random(2000)}px #{random(2000)}px #{var(--gold)}";
  }
  @return unquote($value);
}

$shadows-small: multiple-box-shadow(700);
$shadows-medium: multiple-box-shadow(200);
$shadows-big: multiple-box-shadow(100);

@keyframes animStar {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-2000px);
  }
}

.stars-parallax {
  position: absolute;
  z-index: -10;
  display: block;
  background: transparent;
  opacity: 0.6;
  border-radius: 50%;
}

.stars-parallax1 {
  width: 1px;
  height: 1px;
  box-shadow: $shadows-small;
  animation: animStar 50s linear infinite;
}

.stars-parallax2 {
  width: 2px;
  height: 2px;
  box-shadow: $shadows-medium;
  animation: animStar 100s linear infinite;
}

.stars-parallax3 {
  width: 3px;
  height: 3px;
  box-shadow: $shadows-big;
  animation: animStar 150s linear infinite;
}
</style>