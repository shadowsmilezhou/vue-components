<template>
  <div>
    <g-slides class="wrapper" width="300px" height="200px" :selected.sync="selected" :autoPlay="true">
      <g-slides-item name="1">
        <div class="box">1</div>
      </g-slides-item>
      <g-slides-item name="2">
        <div class="box">2</div>
      </g-slides-item>
      <g-slides-item name="3">
        <div class="box">3</div>
      </g-slides-item>
    </g-slides>


    <g-popover position="top" trigger="hover">
      <template slot="content">
        <div>查看代码</div>
      </template>
      <g-button style="border-color: black" @click="displayName" icon="desc" icon-position="right">跑马灯</g-button>
    </g-popover>
    <pre v-if="nameVisible"><code>{{name}}</code></pre>


  </div>


</template>
<script>
    import GSlides from '../../../src/g-slides/g-slides'
    import GSlidesItem from '../../../src/g-slides/g-sliders-item'
    import GButton from '../../../src/g-button/g-button'
    import GPopover from '../../../src/g-popover/g-popover'

    export default {
        name: "demo",
        components: {GSlides, GSlidesItem,GButton,GPopover},
        data () {
            return {
                selected: undefined,
                nameVisible:false,
                name:`
    <g-slides class="wrapper" width="300px" height="200px" :selected.sync="selected" :autoPlay="true">
      <g-slides-item name="1">
        <div class="box">1</div>
      </g-slides-item>
      <g-slides-item name="2">
        <div class="box">2</div>
      </g-slides-item>
      <g-slides-item name="3">
        <div class="box">3</div>
      </g-slides-item>
    </g-slides>
                `
            };
        },
        created () {
        },
        methods:{
            displayName(){
                this.nameVisible = !this.nameVisible
            }
        }

    };
</script>
<style>
  * {margin: 0; padding: 0; box-sizing: border-box;}
  .wrapper {
    margin: 40px;
  }
  .box {
    width: 100%;
    height: 350px;
    background: #CDDC39;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
  }
</style>
