
<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')">

        <g-icon v-if="icon && !loading" :name="icon" class="icon"></g-icon>
        <g-icon v-if="loading" name="waiting" class="icon waiting"></g-icon>
        <div class="content">
            <slot></slot>
        </div>

    </button>


</template>

<script>
    import Icon from './icon'
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

<style lang="scss" >

    body{
        font-size: var(--font-size);
    }
    @keyframes waiting {
        0%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }
    .g-button {
        font-size:var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        border-radius: var(--button-border);
        background-color: var(--button-bg);
        display: inline-flex;justify-content: center;align-items: center;
        vertical-align: middle;
        &:hover{
            background-color: var(--border-color-hover);
        }
        &:active{
            background-color: var(--button-active-bg);
        }
        &:focus{
            outline: none;
        }
        > .icon{
            margin-right:.5em ;
            order:1
        }
        > .content {
            order:2
        }

        &.icon-right {
            > .icon{
                margin-left: .5em;
                order: 2;
            }
            > .content {
                order:1;
            }
        }
        > .waiting {
            animation: waiting 1s infinite linear;
        }


    }


</style>