<template>
    <div class="user-status">
            <ui-button text="Sign In" @click="logUserIn()"></ui-button>
    </div>
</template>

<script setup>
import { useCurrentUser } from 'vuefire'
import UiButton from '@/components/ui-button.vue';
import { dbTools } from "@/firebase";
const user = useCurrentUser();

function logUserIn(){
    console.log("Loggin user in?");
    console.table(user);
    dbTools.log_in_anon();
    console.table(user);
}

</script>