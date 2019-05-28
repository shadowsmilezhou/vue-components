<template>
    <button class="g-button">按钮</button>
</template>

<script>
    export default {
        name: "button"
    }
</script>

<style lang="scss" >

    body{
        font-size: var(--font-size);
    }
    .g-button {
        font-size:var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        border-radius: var(--button-border);
        background-color: var(--button-bg);
        &:hover{
            background-color: var(--border-color-hover);
        }
        &:active{
            background-color: var(--button-active-bg);
        }
        &:focus{
            outline: none;
        }
    }


</style>