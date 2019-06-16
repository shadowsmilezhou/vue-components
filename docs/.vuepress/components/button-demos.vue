<template>
    <div>
        <g-button icon="setup">默认样式</g-button>
        <g-button icon="backward">默认样式</g-button>
        <g-button icon="forward" icon-position="right">默认样式</g-button>
        <g-button icon="setup" icon-position="right">默认样式</g-button>
        <g-button icon="setup" :loading="true">默认样式</g-button>
        <g-button disabled>默认样式</g-button>
        <div style="margin-top: 20px">
        <g-popover position="top" trigger="hover">
            <template slot="content">
                <div>查看代码</div>
            </template>
            <g-button style="border-color: black" @click="displayName" icon="desc" icon-position="right">按钮代码</g-button>
        </g-popover>
        <pre v-if="nameVisible"><code>{{name}}</code></pre>
        </div>
    </div>

</template>

<script>
    import Button from '../../../src/g-button/g-button'
    import GPopover from '../../../src/g-popover/g-popover'
    export default {
        name: "button-demos.vue",
        components:{
            'g-button':Button,
            GPopover
        },
        methods:{
            displayName(){
                this.nameVisible = !this.nameVisible
            }
        },
        data(){
            return {
                nameVisible:false,
                name:`

<g-button icon="setup">默认样式</g-button>
<g-button icon="backward">默认样式</g-button>
<g-button icon="forward" icon-position="right">默认样式</g-button>
<g-button icon="setup" icon-position="right">默认样式</g-button>
<g-button icon="setup" :loading="true">默认样式</g-button>
<g-button disabled>默认样式</g-button>
                `.replace(/\t\r\n/,'').trim()
            }
        }
    }
</script>
