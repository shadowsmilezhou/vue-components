<template>
    <div>
        <g-button icon="setup">默认样式</g-button>
        <g-button icon="backward">默认样式</g-button>
        <g-button icon="forward" icon-position="right">默认样式</g-button>
        <g-button icon="setup" icon-position="right">默认样式</g-button>
        <g-button icon="setup" :loading="true">默认样式</g-button>
        <g-button disabled>默认样式</g-button>
        <p><strong>使用方法</strong></p>
        <pre><code>{{name}}</code></pre>

    </div>

</template>

<script>
    import Button from  '../../../src/g-button'
    export default {
        name: "button-demos.vue",
        components:{
            'g-button':Button
        },
        data(){
            return {
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
