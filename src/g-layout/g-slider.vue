<template>
    <transition name="slide">
        <div :class="[`slider`,{slideChange}]" >
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
                this.slideChange =  !this.slideChange;
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
    .slider {
        position: relative;
        transition: all .5s;
        > button {
            position: absolute;
            top: 0;
            right: 0;
        }
    }
    .slideChange.slider {
        width: 5%;
    }
    .slide-enter-active, .slide-leave-active {
        transition: all 1s;
    }
    .slide-enter, .slide-leave-to {
        margin-left: -50px;
    }
</style>
