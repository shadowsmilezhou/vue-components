<template>
  <div id="app" style="padding-left: 100px;">

    <div style="overflow: hidden; padding-top: 150px; padding-bottom: 40px;">
      <g-popover position="bottom">
        <template slot="content" slot-scope="{close}">
          <div>文字</div>
          <div>popover <a href="http://qq.com">看新网</a> 内容</div>
          <g-button @click="close">关闭</g-button>
        </template>
        <g-button>点我</g-button>
      </g-popover>


      <g-popover position="top">
        <template slot="content" slot-scope="value">
          <div>
            <div>简介：  smilezhou</div>
            <div> github：<a href="https://github.com/shadowsmilezhou/vue-components">项目源码</a></div>
          </div>
          <g-button @click="value.close">关闭</g-button>
        </template>
        <g-button>点我</g-button>
      </g-popover>




      <g-popover position="left">
        <template slot="content">
          <div>popover内容</div>
        </template>
        <g-button>点我</g-button>
      </g-popover>
      <g-popover position="right">
        <template slot="content">
          <div>popover内容</div>
        </template>
        <g-button>点我</g-button>
      </g-popover>
    </div>
    <div style="overflow: hidden; padding-bottom: 150px;">
      <g-popover position="bottom" trigger="hover">
        <template slot="content">
          <div>hello，world</div>
        </template>
        <g-button>点我</g-button>
      </g-popover>
      <g-popover position="top" trigger="hover">
        <template slot="content">
          <div>popover内容</div>
        </template>
        <g-button>点我</g-button>
      </g-popover>
      <g-popover position="left" trigger="hover">
        <template slot="content">
          <div>popover内容</div>
        </template>
        <g-button>点我</g-button>
      </g-popover>
      <g-popover position="right" trigger="hover">
        <template slot="content">
          <div>popover <a href="http://qq.com">详情请看这个链接</a> 内容</div>
        </template>
        <g-button>点我</g-button>
      </g-popover>
    </div>

  </div>
</template>

<script>


    import Vue from 'vue'
    import GToast from '../../../src/g-toast/g-toast'
    import GButton from '../../../src/g-button/g-button'
    import GPopover from '../../../src/g-popover/g-popover'

    Vue.use(plugin);
    export default {
        name:'GToast',
        components:{
            'g-toast':GToast,
            'g-button':GButton,
            'g-popover':GPopover
        },
        data(){
            return {
                selectedTab:'sports',
                direction:'vertical'
            }
        },
        methods:{
            onClickTop(){
                this.direction = 'horizontal';

            },
            onClickLeft(){
                this.direction = 'vertical';

            },
        }

    }

</script>

<style lang="scss" scoped>



</style>