<template>
    <div class="ui-card">
        <h2>{{ title }}</h2>
        <div class="content">
            <p>{{ content }}</p>
            <!-- <a href="{{ link.href }}">{{ link.text }}</a> -->
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
export default {
    name: "PageHeading",
    components: {},
    props: ['title', 'content', 'link'],
};
</script>

<style scoped lang="scss">
@import '@/assets/scss/vars.scss';
.ui-card{
    border:1px solid black;
    border-radius: .3rem;
    margin:1rem;
    padding:0;
    @include slightShadow;
    background-color:$color60;
    h2 {
        margin:0;
        padding:.3rem 1rem;
        @include topGlow;
        background-color:$accent;
        color:$color60;
    }
    .content{

        padding:.3rem 1rem;
        @include topGlow;
    }
}
</style>
