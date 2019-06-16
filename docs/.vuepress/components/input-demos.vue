<template>
  <div>
    <g-input></g-input>
    <g-input value="中文"></g-input>
    <g-input value="中文" disabled></g-input>
    <g-input value="中文" readonly></g-input>
    <g-input value="中文" error="输入错误"></g-input>

    <div style="margin: 20px 0;">
      <g-popover position="top" trigger="hover">
        <template slot="content">
          <div>查看代码</div>
        </template>
        <g-button style="border-color: black" @click="displayName" icon="desc" icon-position="right">input组件</g-button>
      </g-popover>
      <pre v-if="nameVisible"><code>{{name}}</code></pre>
    </div>

    <div style="margin-top: 30px">
    <g-input v-model="value"></g-input>
    <div>
      value: {{value}}
    </div>
    </div>

    <div style="margin: 20px 0;">
      <g-popover position="top" trigger="hover">
        <template slot="content">
          <div>查看代码</div>
        </template>
        <g-button style="border-color: black" @click="displayName1" icon="desc" icon-position="right">双向绑定</g-button>
      </g-popover>
      <pre v-if="nameVisible1"><code>{{name1}}</code></pre>
    </div>
  </div>

</template>

<script>
  import GInput from '../../../src/g-input/g-input'
  import GButton from '../../../src/g-button/g-button'
  import GPopover from '../../../src/g-popover/g-popover'
    export default {
        name: "input-demos",
        data(){
            return {
              value:'默认',
                nameVisible:false,
                nameVisible1:false,
                name:`
    <g-input></g-input>
    <g-input value="中文"></g-input>
    <g-input value="中文" disabled></g-input>
    <g-input value="中文" readonly></g-input>
                `,
                name1:`
    <g-input v-model="value"></g-input>
    <div>
      value: {{value}}
    </div>
                `
            }
        },
        components:{GInput,GButton,GPopover},
        methods:{
            displayName(){
                this.nameVisible = !this.nameVisible
            },
            displayName1(){
                this.nameVisible1 = !this.nameVisible1
            }
        }

    }
</script>

<style scoped>

</style>