<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/help">Help</router-link>|
    <router-link to="/report">Report</router-link>
  </nav>
  <router-view />
</template>

<script setup>

import { auth } from '@/firebase'
console.log(auth);

</script>

<style lang="scss">
@import '@/assets/scss/vars.scss';
body {
  background-color: $color60;
  color: $textColorLight;
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}

.dark-bg {
  background-color: $color30;
  color: $textColorLight;

}

.light-bg {
  background-color: $color60;
  color: $textColorDark;
}

h1,
h2,
h3 {
  color: $accent;
}

h1 {
  font-size: 2.5rem;
}

h2 {
  font-size: 2rem;

}

h3 {
  font-size: 1.5rem;

}


nav a.router-link-exact-active {
  color: $color10;
}</style>
