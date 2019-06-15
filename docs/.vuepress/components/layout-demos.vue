<template>
  <div>

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

  </div>

</template>

<script>
    import GLayout from '../../../src/g-layout/g-layout'
    import GHeader from '../../../src/g-layout/g-header'
    import GFooter from '../../../src/g-layout/g-footer'
    import GContent from '../../../src/g-layout/g-content'
    import GSlider from '../../../src/g-layout/g-slider'
    export default {
        name: "layout-demos",
        components:{
            GLayout,
            GHeader,
            GFooter,
            GContent,
            GSlider
        }

    }
</script>

<style scoped>
  .g-slider {
    height: 100px; background:#4CAF50; width:200px; color: black;
  }
  .g-slider-3 {
    background:#4CAF50; width:200px; color: black;
  }
</style>