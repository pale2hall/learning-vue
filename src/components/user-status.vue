<template>
    <div class="user-status">
            <div v-if="user" title="user.id">Welcome back! {{ user.email || user.uid }}
                <ui-button text="Sign Out" @click="logUserOut()"></ui-button>
            </div>
            <ui-button v-if="!user" text="Sign In" @click="logUserIn()"></ui-button>
    </div>
</template>

<script setup>
import { ref } from 'vue'
// import { useCurrentUser } from 'vuefire';
import UiButton from '@/components/ui-button.vue';
import { firebaseApp, dbTools, firebaseAuth } from "@/firebase";
import { useFirestore } from 'vuefire';

console.log(firebaseApp);

const db = useFirestore();

firebaseAuth.onAuthStateChanged(
    firebaseUser => user.value = firebaseUser
);

const user = ref(null);

function logUserIn(){
    console.log("Loggin user in?");
    console.table(user);
    dbTools.log_in_anon();
    console.table(user);
    console.table(db);
}
function logUserOut(){
    console.log("Loggin user out?");
    console.table(user);
    dbTools.log_out();
    console.table(user);
    console.table(db);
}

</script>