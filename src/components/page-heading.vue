<template>
    <div class="page-heading content">
        <h2>{{ title }}</h2>
        <p>{{ desc }}</p>
    </div>
</template>

<script>
// @ is an alias to /src
export default {
    name: "PageHeading",
    components: {},
    props: ['title', 'desc'],
};
</script>

<style scoped>
</style>
