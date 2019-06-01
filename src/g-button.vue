<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')">

        <g-icon v-if="icon && !loading" :name="icon" class="icon"></g-icon>
        <g-icon v-if="loading" name="waiting" class="icon waiting"></g-icon>
        <div class="contents">
            <slot></slot>
        </div>

    </button>


</template>

<script>
    import Icon from './g-icon'
    export default {
        name: "g-button",
        components:{
            "g-icon":Icon
        },
        props:{
            icon:{
                type:String,
                default:''
            },
            iconPosition:{
                type: String,
                default: "left",
                validator(value) {
                    return value === 'left' || value === 'right'
                }
            },
            loading:{
                type:Boolean,
                default:false
            }
        }
    }
</script>

<style lang="scss" scoped>


    $font-size:14px;
    $button-height: 32px;
    $background-color: white;
    $border-radius: 4px;
    $border-color-hover:#666;
    $button-active-bg:#eee;
    $button-bg:white;
    $color:#333;
    $border-color:#999;
    @keyframes waiting {
        0%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }
    .g-button {
        display:inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        font-size: $font-size;
        border: 1px solid $border-color;
        background-color:$background-color ;
        border-radius: $border-radius;
        height: $button-height;
        padding: 0 1em;
        &:hover{
            background-color: $border-color-hover;
        }
        &:active{
            background-color: $button-active-bg;
        }
        &:focus{
            outline: none;
        }
        > .icon{
            margin-right:.5em ;
            order:1
        }
        > .contents {
            order:2
        }

        &.icon-right {
            padding-right: 0.1em;
            > .icon{
                margin-left: .5em;
                order: 2;
            }
            > .contents {
                order:1;
            }
        }
        > .waiting {
            animation: waiting 1s infinite linear;
        }


    }


</style>