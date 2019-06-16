<template>
  <div>
    <g-scroll style="width: 300px; height: 400px;">
      <p>文字</p>
      <p>文字</p>
      <p>文字</p>
      <p>文字</p>
      <p>文字</p>
      <p>文字</p>
      <p>文字</p>
      <p>文字</p>
      <p>文字</p>
      <p>文字</p>
      <p>文字</p>
      <p>文字</p>
      <p>文字</p>
      <p>文字</p>
      <p>文字</p>
      <p>文字</p>
      <p>文字</p>
      <p>文字</p>
      <p>文字</p>
      <p>文字</p>
      <p>文字</p>
      <p>文字</p>
      <p>文字</p>
      <p>文字</p>
      <p>文字</p>
      <p>文字</p>
      <p>文字</p>
      <p>文字</p>
      <p>文字</p>
      <p>文字</p>
      <p>文字</p>
      <img src="http://zxkj.whzxkj.net/house.png" alt="">
      <p>文字</p>
      <p>文字</p>
      <p>文字</p>
      <p>文字</p>
      <p>文字</p>
      <p>文字</p>
      <p>文字</p>
      <p>文字</p>
      <p>文字</p>
      <p>文字</p>
      <p>文字</p>
      <p>文字</p>
      <p>文字</p>
      <p>文字</p>
      <p>文字</p>
      <p>文字</p>
      <p>文字</p>
      <p>文字</p>
      <p>文字</p>
      <img src="http://zxkj.whzxkj.net/house.png" alt="">


    </g-scroll>

    <div style="margin: 20px 0;">
      <g-popover position="top" trigger="hover">
        <template slot="content">
          <div>查看代码</div>
        </template>
        <g-button style="border-color: black" @click="displayName" icon="desc" icon-position="right">滚动组件</g-button>
      </g-popover>
      <pre v-if="nameVisible"><code>{{name}}</code></pre>
    </div>

  </div>
</template>
<script>

    import GScroll from '../../../src/g-scroll/g-scroll'
    import GButton from '../../../src/g-button/g-button'
    import GPopover from '../../../src/g-popover/g-popover'
    export default {
        name: "demo",
        components: {GScroll,GButton,GPopover},
        methods:{
            displayName(){
                this.nameVisible = !this.nameVisible
            }
        },
        data(){
            return {
                nameVisible:false,
                name:`
      <g-scroll style="width: 300px; height: 400px;">
      <p>文字</p>
      <p>文字</p>
      <p>文字</p>
      <p>文字</p>
      <p>文字</p>
      <p>文字</p>
      <p>文字</p>
      <p>文字</p>
      <p>文字</p>
      <p>文字</p>
      <p>文字</p>
      <p>文字</p>
      <p>文字</p>
      <p>文字</p>
      <p>文字</p>
      <p>文字</p>
      <p>文字</p>
      <p>文字</p>
      <p>文字</p>
      <p>文字</p>
      <p>文字</p>
      <p>文字</p>
      <p>文字</p>
      <p>文字</p>
      <p>文字</p>
      <p>文字</p>
      <p>文字</p>
      <p>文字</p>
      <p>文字</p>
      <p>文字</p>
      <p>文字</p>
      <img src="http://zxkj.whzxkj.net/house.png" alt="">
      <p>文字</p>
      <p>文字</p>
      <p>文字</p>
      <p>文字</p>
      <p>文字</p>
      <p>文字</p>
      <p>文字</p>
      <p>文字</p>
      <p>文字</p>
      <p>文字</p>
      <p>文字</p>
      <p>文字</p>
      <p>文字</p>
      <p>文字</p>
      <p>文字</p>
      <p>文字</p>
      <p>文字</p>
      <p>文字</p>
      <p>文字</p>
      <img src="http://zxkj.whzxkj.net/house.png" alt="">

                `
            }
        }
    };
</script>
<style>
  * {margin: 0; padding: 0; box-sizing: border-box;}
  body {background: white;}
</style>
<style scoped lang="scss">
</style>
