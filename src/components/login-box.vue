<template>
    <aside>
        <h3 v-if="newUser">Create a new account</h3>
        <h3 v-else>Sign Back In</h3>
        <div>
            <p>Email<br><input  :value="username"
                                @input="event => username = event.target.value" type="email"></p>
            <p>Password:<br><input v-model="password" type="password"></p>
            <ui-button text="submit" @click=" sign_in_or_up();"></ui-button>
            <em>Your password is: {{ password }}</em>
            <p>Already have an account? <a href="#" @click="newUser = !newUser">Sign in</a>.</p>

        </div>
    </aside>
</template>

<script setup>
import UiButton from '@/components/ui-button.vue';
import { ref } from 'vue'
import { firebaseAuth } from "@/firebase";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';

const password = ref("");
const username = ref("");
let newUser = false;
// const newUser = ref(false);


async function  sign_in_or_up(){
    if(newUser){
      console.log("Creating new user");
      console.log("firebaseAuth",firebaseAuth);
      console.log("username",username);
      console.log("password",password);
      await createUserWithEmailAndPassword(firebaseAuth, username.value, password.value);
    } else {
      console.log("Login Existing user");
      await signInWithEmailAndPassword(firebaseAuth, username.value, password.value);
    }
  }



</script>