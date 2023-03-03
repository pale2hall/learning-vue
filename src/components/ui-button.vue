<template>
    <button class="ui-button">
       {{ text }}
    </button>
</template>

<script>
// @ is an alias to /src
export default {
    name: "UiButton",
    components: {},
    props: ['text',],
};
</script>

<style scoped lang="scss">
@import '@/assets/scss/vars.scss';
.ui-button{
    @include slightShadow;
    @include topGlow;
    display: inline-block;
    border:1px solid black;
    border-radius: .3rem;
    // margin:1rem;
    padding:.3rem;
    background-color:$color30;
    text-decoration: none;
    color: $textColorLight;
    min-width: 8em;
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;
    &:hover{
        color:white;
        background-color:darken($color30, 10%)
    }
}
</style>
