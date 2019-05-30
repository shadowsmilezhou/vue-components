<template>
    <transition name="slide">
        <div :class="[`sider`,{slideChange}]" >
            <slot></slot>
            <button @click="changeWidthHandle">{{text}}</button>
        </div>
    </transition>
</template>
<script>
    export default {
        name: 'g-slider',
        data () {
            return {
                slideChange: false,
                text:'close'
            }
        },
        methods: {
            changeWidthHandle(){
                this.slideChange =  !this.slideChange
                if (this.text !== 'open'){
                    this.text = 'open'
                }
                else {
                    this.text = 'close'
                }

            }
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
