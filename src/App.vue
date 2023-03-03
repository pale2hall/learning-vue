<template>
  <nav>
    <div>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/help">Help</router-link>|
      <router-link to="/report">Report</router-link>
    </div>
    <user-status></user-status>
  </nav>
  <router-view />
</template>

<script setup>

import { auth } from '@/firebase'
import UserStatus from '@/components/user-status.vue'; 
console.log(auth);

</script>

<style lang="scss">
@import '@/assets/scss/vars.scss';
body, html {
  background-color: $color60;
  color: $textColorLight;
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin:0;padding:0;

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


nav a{
  color: $color10;
}

nav{
  display: grid;
  grid-template-columns: 3fr 1fr;
  background-color: $color10;
  color: $textColorLight;
  margin:0;
  padding:1rem .1rem $navTabHeight .1rem ;
  a{
    color:$textColorLight;
    border-bottom:$navTabHeight solid rgba(255,255,255,.01);;
    text-decoration: none;
    padding:.5rem .5rem .2rem .5rem;
    border-radius: 10% 10% 0 0;
    &:hover{

      color: darken($textColorLight,10%);
      border-color:$color60;
      background-color:darken($color10,20%);;
    }
    &.router-link-exact-active {
      border-color:$color60;
      background-color:$color60;
      color:$textColorDark;
    }
  }
}


</style>
