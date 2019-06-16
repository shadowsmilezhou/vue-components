<template>
  <div class="home">
    <div style="position: relative; height: 500px;overflow: auto">
    <WaterFall :list="list" ></WaterFall>
    </div>

    <g-popover position="top" trigger="hover" style="margin: 20px 0">
      <template slot="content">
        <div>查看代码</div>
      </template>
      <g-button style="border-color: black" @click="displayName" icon="desc" icon-position="right">瀑布流布局</g-button>
    </g-popover>
    <pre v-if="nameVisible"><code>{{name}}</code></pre>
  </div>
</template>
<script>
    import WaterFall from '../../../src/g-waterfall/g-waterfall.vue'
    import GButton from '../../../src/g-button/g-button'
    import GPopover from '../../../src/g-popover/g-popover'
    let img1 = require('../../../static/images/1.jpg');
    let img2 = require('../../../static/images/2.jpg');
    let img3 = require('../../../static/images/3.jpg');
    let img4 = require('../../../static/images/4.jpg');
    let img5 = require('../../../static/images/5.jpg');
    let img6 = require('../../../static/images/6.jpg');
    let img7 = require('../../../static/images/7.jpg');
    let img8 = require('../../../static/images/8.jpg');
    let img9 = require('../../../static/images/9.jpg');
    export default {
        data() {
            return {
                list: [
                    {url: img1, height: 800, width: 1280},
                    {url: img3, height: 800, width: 1280},
                    {url: img2, height: 1134, width: 808},
                    {url: img5, height: 509, width: 800},
                    {url: img4, height: 1000, width: 660},
                    {url: img6, height: 750, width: 500},
                    {url: img7, height: 1050, width: 1680},
                    {url: img8, height: 3548, width: 440},
                    {url: img9, height: 519, width: 800},
                    {url: img1, height: 800, width: 1280},
                    {url: img2, height: 1134, width: 808},
                    {url: img3, height: 800, width: 1280},
                    {url: img4, height: 1000, width: 660},
                    {url: img5, height: 509, width: 800},
                    {url: img6, height: 750, width: 500},
                    {url: img7, height: 1050, width: 1680},
                    {url: img3, height: 800, width: 1280},
                    {url: img4, height: 1000, width: 660},
                    {url: img5, height: 509, width: 800},
                    {url: img6, height: 750, width: 500},
                    {url: img9, height: 519, width: 800},
                    {url: img1, height: 800, width: 1280},
                    {url: img2, height: 1134, width: 808},
                    {url: img3, height: 800, width: 1280},
                    {url: img4, height: 1000, width: 660},
                    {url: img5, height: 509, width: 800},
                    {url: img6, height: 750, width: 500},
                    {url: img7, height: 1050, width: 1680},
                    {url: img9, height: 519, width: 800},
                    {url: img1, height: 800, width: 1280},
                    {url: img2, height: 1134, width: 808},
                    {url: img3, height: 800, width: 1280},
                    {url: img4, height: 1000, width: 660},
                    {url: img5, height: 509, width: 800},
                    {url: img6, height: 750, width: 500},
                    {url: img7, height: 1050, width: 1680},
                ],
                nameVisible:false,
                direction: 'column',
                flag: false,
                name:`
    <WaterFall :list="list"></WaterFall>
                `
            }
        },

        // created() {
        //     window.onscroll = () => {
        //         if (this.flag) {
        //             return
        //         }
        //         if (document.documentElement.scrollTop + document.body.clientHeight + 150 > document.documentElement.scrollHeight) {
        //             this.flag = true;
        //             this.list = this.list.concat([
        //                 {url: img1, height: 1050, width: 1680},
        //                 {url: img2, height: 1134, width: 808},
        //                 {url: img4, height: 1000, width: 660},
        //                 {url: img6, height: 750, width: 500},
        //                 {url: img5, height: 509, width: 800},
        //                 {url: img3, height: 800, width: 1280}
        //             ]);
        //             setTimeout(() => {
        //                 this.flag = false
        //             }, 500)
        //         }
        //     }
        // },
        // mounted() {
        //     this.list = [
        //         {url: img1, height: 800, width: 1280},
        //         {url: img3, height: 800, width: 1280},
        //         {url: img2, height: 1134, width: 808},
        //         {url: img5, height: 509, width: 800},
        //         {url: img4, height: 1000, width: 660},
        //         {url: img6, height: 750, width: 500},
        //         {url: img7, height: 1050, width: 1680},
        //         {url: img8, height: 3548, width: 440},
        //         {url: img9, height: 519, width: 800},
        //         {url: img1, height: 800, width: 1280},
        //         {url: img2, height: 1134, width: 808},
        //         {url: img3, height: 800, width: 1280},
        //         {url: img4, height: 1000, width: 660},
        //         {url: img5, height: 509, width: 800},
        //         {url: img6, height: 750, width: 500},
        //         {url: img7, height: 1050, width: 1680},
        //         {url: img3, height: 800, width: 1280},
        //         {url: img4, height: 1000, width: 660},
        //         {url: img5, height: 509, width: 800},
        //         {url: img6, height: 750, width: 500},
        //         {url: img9, height: 519, width: 800},
        //         {url: img1, height: 800, width: 1280},
        //         {url: img2, height: 1134, width: 808},
        //         {url: img3, height: 800, width: 1280},
        //         {url: img4, height: 1000, width: 660},
        //         {url: img5, height: 509, width: 800},
        //         {url: img6, height: 750, width: 500},
        //         {url: img7, height: 1050, width: 1680},
        //         {url: img9, height: 519, width: 800},
        //         {url: img1, height: 800, width: 1280},
        //         {url: img2, height: 1134, width: 808},
        //         {url: img3, height: 800, width: 1280},
        //         {url: img4, height: 1000, width: 660},
        //         {url: img5, height: 509, width: 800},
        //         {url: img6, height: 750, width: 500},
        //         {url: img7, height: 1050, width: 1680},
        //     ]
        // },
        components: {
            WaterFall,
            GButton,
            GPopover

        },
        methods:{
            displayName(){
                this.nameVisible = !this.nameVisible
            }
        }
    }
</script>
<style lang="scss">
  .options {
    padding: 10px;
    text-align: center;
  }
</style>