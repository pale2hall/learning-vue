<template>
    <aside>
        <h3>Sign In Anonymously</h3>
        <!-- @click="console.log('hi')"  -->
        <ui-button text="Log In"></ui-button>
    </aside>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import UiButton from '@/components/ui-button.vue';


export default {
  name:"LoginBox",
  components:{
        UiButton,
    }
}

</script>