<template>
  <div class="home">
    <h3>Home</h3>
    <UserStatus :user="{ user }">
      <div v-if="user">Welcome back [{{ user.uid }}]</div>
      <LoginBox v-else></LoginBox>
      <ui-card title="sample card" content="this is content?"></ui-card>
    </UserStatus>
  </div>
</template>

<script>
// @ is an alias to /src

import LoginBox from '@/components/login-box.vue';
import UserStatus from '@/components/login-box.vue';
import UiCard from '@/components/ui-card.vue';

export default {
  name: 'HomeView',
    components: {
      LoginBox,
      UserStatus,
      UiCard,
  }
}
</script>
