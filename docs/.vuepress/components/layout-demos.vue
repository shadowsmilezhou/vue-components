<template>
  <div>

    <g-layout style="color: white;">
      <g-header style="height: 50px; background:#CDDC39;">
        header
      </g-header>
      <g-content style="height: 100px; background:#AFB42B;">
        content
      </g-content>
      <g-footer style="height: 50px; background:#CDDC39;">
        footer
      </g-footer>
    </g-layout>

    <div style="margin:20px 0 ">
    <g-popover position="top" trigger="hover">
      <template slot="content">
        <div>查看代码</div>
      </template>
      <g-button style="border-color: black" @click="displayName" icon="desc" icon-position="right">典型的布局结构1</g-button>
    </g-popover>
    <pre v-if="nameVisible"><code>{{name}}</code></pre>

    </div>


    <g-layout style="color: white; overflow:hidden;">
      <g-header style="height: 50px; background:#CDDC39;">
        header
      </g-header>
      <g-layout>
        <g-slider class="g-slider">
          sider
        </g-slider>
        <g-content style="height: 100px; background:#AFB42B;">
          content
        </g-content>
      </g-layout>
      <g-footer style="height: 50px; background:#CDDC39;">
        footer
      </g-footer>
    </g-layout>


   <div style="margin:20px 0">
    <g-popover position="top" trigger="hover">
      <template slot="content">
        <div>查看代码</div>
      </template>
      <g-button style="border-color: black" @click="displayName2" icon="desc" icon-position="right">典型的布局结构2</g-button>
    </g-popover>
    <pre v-if="nameVisible2"><code>{{name2}}</code></pre>
   </div>

    <g-layout style="color: white; overflow:hidden;">
      <g-slider class=" g-slider-3">
        sider
      </g-slider>
      <g-layout>
        <g-header style="height: 50px; background:#CDDC39;">
          header
        </g-header>
        <g-content style="height: 100px; background:#AFB42B;">
          content
        </g-content>
        <g-footer style="height: 50px; background:#CDDC39;">
          footer
        </g-footer>
      </g-layout>
    </g-layout>

    <div style="margin: 20px 0">
    <g-popover position="top" trigger="hover">
      <template slot="content">
        <div>查看代码</div>
      </template>
      <g-button style="border-color: black" @click="displayName3" icon="desc" icon-position="right">典型的布局结构3</g-button>
    </g-popover>
    <pre v-if="nameVisible3"><code>{{name3}}</code></pre>
    </div>
  </div>

</template>

<script>
    import GLayout from '../../../src/g-layout/g-layout'
    import GHeader from '../../../src/g-layout/g-header'
    import GFooter from '../../../src/g-layout/g-footer'
    import GContent from '../../../src/g-layout/g-content'
    import GSlider from '../../../src/g-layout/g-slider'
    import GButton from '../../../src/g-button/g-button'
    import GPopover from '../../../src/g-popover/g-popover'
    export default {
        name: "layout-demos",
        components:{
            GLayout,
            GHeader,
            GFooter,
            GContent,
            GSlider,
            GButton,
            GPopover

        },
        methods:{
            displayName(){
                this.nameVisible = !this.nameVisible
            },
            displayName2(){
                this.nameVisible2 = !this.nameVisible2
            },
            displayName3(){
                this.nameVisible3 = !this.nameVisible3
            }
        },
        data(){
            return {
                nameVisible2:false,
                nameVisible:false,
                nameVisible3:false,
                name:`
      <g-layout style="color: white; margin-bottom:50px;">
      <g-header style="height: 50px; background:#CDDC39;">
        header
      </g-header>
      <g-content style="height: 100px; background:#AFB42B;">
        content
      </g-content>
      <g-footer style="height: 50px; background:#CDDC39;">
        footer
      </g-footer>
    </g-layout>
                `,
                name2:`
      <g-layout style="color: white; overflow:hidden; margin-bottom:50px;">
      <g-header style="height: 50px; background:#CDDC39;">
        header
      </g-header>
      <g-layout>
        <g-slider class="g-slider">
          sider
        </g-slider>
        <g-content style="height: 100px; background:#AFB42B;">
          content
        </g-content>
      </g-layout>
      <g-footer style="height: 50px; background:#CDDC39;">
        footer
      </g-footer>
    </g-layout>


                `,
                name3:`
      <g-layout style="color: white; overflow:hidden; margin-bottom:50px;">
      <g-slider class=" g-slider-3">
        sider
      </g-slider>
      <g-layout>
        <g-header style="height: 50px; background:#CDDC39;">
          header
        </g-header>
        <g-content style="height: 100px; background:#AFB42B;">
          content
        </g-content>
        <g-footer style="height: 50px; background:#CDDC39;">
          footer
        </g-footer>
      </g-layout>
    </g-layout>


                `
            }
        }

    }
</script>

<style scoped>
  .g-slider {
    height: 100px; background:#8BC34A; width:200px; color: black;
  }
  .g-slider-3 {
    background:#8BC34A; width:200px; color: black;
  }
</style>