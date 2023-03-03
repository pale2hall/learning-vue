<template>
    <div class="user-status">
        <span v-if="user">
            Welcome back, {{ user || name || "-" }}
        </span>
        <span v-if="!user">
            <ui-button text="Sign In" @click="logUserIn()"></ui-button>
        </span>
    </div>
</template>

<script setup>

import { useCurrentUser } from 'vuefire'
import UiButton from '@/components/ui-button.vue';

const user = useCurrentUser();
// console.log("db",db);
// console.log("auth",auth);

function logUserIn(){
    console.log("what..?");
}

</script>