<template>
  <div id="app" >

    <div style="overflow: hidden;">
      <g-popover position="bottom">
        <template slot="content" slot-scope="{close}">
          <div>文字</div>
          <div>popover <a href="http://qq.com">看新网</a> 内容</div>
          <g-button @click="close">close</g-button>
        </template>
        <g-button>click me</g-button>
      </g-popover>


      <g-popover position="top">
        <template slot="content" slot-scope="value">
          <div>
            <div>简介：smilezhou</div>
            <div> github：<a href="https://github.com/shadowsmilezhou/vue-components">项目源码</a></div>
          </div>
          <g-button @click="value.close">close</g-button>
        </template>
        <g-button>click me</g-button>
      </g-popover>

      <g-popover position="left">
        <template slot="content">
          <div>popover内容</div>
        </template>
        <g-button>click me</g-button>
      </g-popover>

      <g-popover position="right">
        <template slot="content">
          <div>popover内容</div>
        </template>
        <g-button>click me</g-button>
      </g-popover>
    </div>

    <div style="margin: 20px 0;">
      <g-popover position="top" trigger="hover">
        <template slot="content">
          <div>查看代码</div>
        </template>
        <g-button style="border-color: black" @click="displayName" icon="desc" icon-position="right">气泡卡片</g-button>
      </g-popover>
      <pre v-if="nameVisible"><code>{{name}}</code></pre>
    </div>





    <div style="overflow: hidden;">
      <g-popover position="bottom" trigger="hover">
        <template slot="content">
          <div>hello，world</div>
        </template>
        <g-button>hover me</g-button>
      </g-popover>

      <g-popover position="top" trigger="hover">
        <template slot="content">
          <div>popover内容</div>
        </template>
        <g-button>hover me</g-button>
      </g-popover>

      <g-popover position="left" trigger="hover">
        <template slot="content">
          <div>popover内容</div>
        </template>
        <g-button>hover me</g-button>
      </g-popover>

      <g-popover position="right" trigger="hover">
        <template slot="content">
          <div>popover <a href="http://qq.com">详情请看这个链接</a> 内容</div>
        </template>
        <g-button>hover me</g-button>
      </g-popover>
    </div>

    <div style="margin: 20px 0;">
      <g-popover position="top" trigger="hover">
        <template slot="content">
          <div>查看代码</div>
        </template>
        <g-button style="border-color: black" @click="displayName1" icon="desc" icon-position="right">气泡卡片</g-button>
      </g-popover>
      <pre v-if="nameVisible1"><code>{{name1}}</code></pre>
    </div>

  </div>
</template>

<script>


    import GButton from '../../../src/g-button/g-button'
    import GPopover from '../../../src/g-popover/g-popover'

    export default {
        name:'GToast',
        components:{
            'g-button':GButton,
            'g-popover':GPopover
        },
        data(){
            return {
                nameVisible1:false,
                nameVisible:false,
                selectedTab:'sports',
                direction:'vertical',
                name:`
    <g-popover position="bottom">
        <template slot="content" slot-scope="{close}">
          <div>文字</div>
          <div>popover <a href="http://qq.com">看新网</a> 内容</div>
          <g-button @click="close">close</g-button>
        </template>
        <g-button>click me</g-button>
      </g-popover>

      <g-popover position="top">
        <template slot="content" slot-scope="value">
          <div>
            <div>简介：smilezhou</div>
            <div> github：<a href="https://github.com/shadowsmilezhou/vue-components">项目源码</a></div>
          </div>
          <g-button @click="value.close">close</g-button>
        </template>
        <g-button>click me</g-button>
      </g-popover>

      <g-popover position="left">
        <template slot="content">
          <div>popover内容</div>
        </template>
        <g-button>click me</g-button>
      </g-popover>

      <g-popover position="right">
        <template slot="content">
          <div>popover内容</div>
        </template>
        <g-button>click me</g-button>
      </g-popover>
                `,
                name1:`
       <g-popover position="bottom" trigger="hover">
        <template slot="content">
          <div>hello，world</div>
        </template>
        <g-button>hover me</g-button>
      </g-popover>

      <g-popover position="top" trigger="hover">
        <template slot="content">
          <div>popover内容</div>
        </template>
        <g-button>hover me</g-button>
      </g-popover>

      <g-popover position="left" trigger="hover">
        <template slot="content">
          <div>popover内容</div>
        </template>
        <g-button>hover me</g-button>
      </g-popover>

      <g-popover position="right" trigger="hover">
        <template slot="content">
          <div>popover <a href="http://qq.com">详情请看这个链接</a> 内容</div>
        </template>
        <g-button>hover me</g-button>
      </g-popover>

                `
            }
        },
        methods:{
            onClickTop(){
                this.direction = 'horizontal';

            },
            onClickLeft(){
                this.direction = 'vertical';

            },
            displayName(){
                this.nameVisible = !this.nameVisible
            },
            displayName1(){
                this.nameVisible1 = !this.nameVisible1
            }
        }

    }

</script>

<style lang="scss" scoped>



</style>