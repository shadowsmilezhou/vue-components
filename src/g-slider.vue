<template>
    <transition name="slide">
        <div :class="[`sider`,{slideChange}]" >
            <slot></slot>
            <button @click="slideChange=!slideChange">close</button>
        </div>
    </transition>
</template>
<script>
    export default {
        name: 'g-slider',
        data () {
            return {
                slideChange: false
            }
        },
        methods: {
        }
    }
</script>

<style lang="scss" scoped>
    .sider {
        position: relative;
        > button {
            position: absolute;
            top: 0;
            right: 0;
        }
    }
    .slideChange {
        width: 3%;
    }
    .slide-enter-active, .slide-leave-active {
        transition: all .3s;
    }
    .slide-enter, .slide-leave-to {
        margin-left: -50px;
    }
</style>
