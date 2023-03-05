<template>
    <div class="page-heading content">
        <h2>{{ title }}</h2>
        <p>{{ desc }}</p>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  title: String,
  desc: String,
})

</script>

<style scoped>
</style>
