<template>
  <div class="home">
    <h3>Home</h3>
    <UserStatus :user="{ user }">
      <div v-if="user">Welcome back [{{ user.uid }}]</div>
      <ui-card title="sample card" content="this is content?"></ui-card>
    </UserStatus>
  </div>
</template>

<script setup>
// @ is an alias to /src

import UserStatus from '@/components/login-box.vue';
import UiCard from '@/components/ui-card.vue';

</script>
