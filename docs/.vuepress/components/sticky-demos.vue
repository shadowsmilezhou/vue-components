<template>

  <div >

      <div style="width: 600px">
        <g-sticky :distance="58">
          <div style="width: 100%;height: 50px;background-color: #2196F3;"></div>
        </g-sticky>
      </div>

    <div style="margin: 20px 0;">
      <g-popover position="top" trigger="hover">
        <template slot="content">
          <div>查看代码</div>
        </template>
        <g-button style="border-color: black" @click="displayName" icon="desc" icon-position="right">粘滞组件</g-button>
      </g-popover>
      <pre v-if="nameVisible"><code>{{name}}</code></pre>
    </div>



  </div>


</template>

<script>
    import GSticky from '../../../src/g-sticky/g-sticky'
    import GButton from '../../../src/g-button/g-button'
    import GPopover from '../../../src/g-popover/g-popover'
    export default {
        name: "demo",
        components: {GSticky,GButton,GPopover},
        methods:{
            displayName(){
                this.nameVisible = !this.nameVisible
            }
        },
        data(){
            return {
                nameVisible:false,
                name:`
      <div style="width: 600px">
        <g-sticky :distance="58">
          <div style="width: 100%;height: 50px;background-color: #2196F3;"></div>
        </g-sticky>
      </div>
                `
            }
        }
    };
</script>
<style>
  * {margin: 0; padding: 0; box-sizing: border-box;}
  /*body {background: white;}*/
  /*img {max-width: 100%;}*/
  /*p{*/
    /*text-align: center;*/
  /*}*/
</style>
<style scoped lang="scss">
</style>
