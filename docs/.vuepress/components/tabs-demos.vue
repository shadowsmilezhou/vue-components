<template>

  <div>
    <g-button @click="onClickTop">top</g-button>
    <g-button @click="onClickLeft">left</g-button>
    <g-tabs :selected.sync="selectedTab" :direction="direction">
      <g-tabs-head>
        <template slot="actions">
          <g-button icon="setup">设置</g-button>
        </template>
        <g-tabs-item name="woman">
          <g-icon name="women"></g-icon>美女
        </g-tabs-item>
        <g-tabs-item name="finance">
          <g-icon name="finance"></g-icon>财经
        </g-tabs-item>
        <g-tabs-item name="sports">
          <g-icon name="sports"></g-icon>体育
        </g-tabs-item>
      </g-tabs-head>
      <g-tabs-body>
        <g-tabs-panel name="woman">
          美女相关资讯
        </g-tabs-panel>
        <g-tabs-panel name="finance">
          财经相关资讯
        </g-tabs-panel>
        <g-tabs-panel name="sports">
          体育相关资讯
        </g-tabs-panel>
      </g-tabs-body>
    </g-tabs>

    <div style="margin: 50px 0">
    <g-popover position="top" trigger="hover">
      <template slot="content">
        <div>查看代码</div>
      </template>
      <g-button style="border-color: black" @click="displayName" icon="desc" icon-position="right">标签</g-button>
    </g-popover>
    <pre v-if="nameVisible"><code>{{name}}</code></pre>
    </div>



  </div>
</template>

<script>


    import Vue from 'vue'
    import GToast from '../../../src/g-toast/g-toast'
    import plugin from '../../../src/g-toast/plugin'
    import gbutton from '../../../src/g-button/g-button'
    import Gtabs from '../../../src/g-tabs/g-tabs'
    import GtabsItem from '../../../src/g-tabs/g-tabs-item'
    import GTabsBody from '../../../src/g-tabs/g-tabs-body'
    import GtabsHead from '../../../src/g-tabs/g-tabs-head'
    import GtabsPanel from '../../../src/g-tabs/g-tabs-panel'
    import GIcon from '../../../src/g-icon/g-icon'
    import GPopover from '../../../src/g-popover/g-popover'

    Vue.use(plugin);
    export default {
        name:'GToast',
        components:{
            'g-toast':GToast,
            'g-button':gbutton,
            'g-tabs':Gtabs,
            'g-tabs-body':GTabsBody,
            'g-tabs-item':GtabsItem,
            'g-tabs-head':GtabsHead,
            'g-tabs-panel':GtabsPanel,
            'g-icon':GIcon,
            'g-popover':GPopover
        },
        data(){
            return {
                nameVisible:false,
                selectedTab:'sports',
                direction:'vertical',
                name:`
    <g-button @click="onClickTop">top</g-button>
    <g-button @click="onClickLeft">left</g-button>
    <g-tabs :selected.sync="selectedTab" :direction="direction">
      <g-tabs-head>
        <template slot="actions">
          <g-button icon="setup">设置</g-button>
        </template>
        <g-tabs-item name="woman">
          <g-icon name="women"></g-icon>美女
        </g-tabs-item>
        <g-tabs-item name="finance">
          <g-icon name="finance"></g-icon>财经
        </g-tabs-item>
        <g-tabs-item name="sports">
          <g-icon name="sports"></g-icon>体育
        </g-tabs-item>
      </g-tabs-head>
      <g-tabs-body>
        <g-tabs-panel name="woman">
          美女相关资讯
        </g-tabs-panel>
        <g-tabs-panel name="finance">
          财经相关资讯
        </g-tabs-panel>
        <g-tabs-panel name="sports">
          体育相关资讯
        </g-tabs-panel>
      </g-tabs-body>
    </g-tabs>


                `
            }
        },
        methods:{
            displayName(){
                this.nameVisible = !this.nameVisible
            },
            onClickTop(){
                this.direction = 'horizontal';

            },
            onClickLeft(){
                this.direction = 'vertical';

            },

            showToastError(){
                this.$toast(`错误提示`,{
                    enableHtml: "true",
                    remindMessage: "error",
                    closeButton: {
                        text:'关闭',
                        callback:()=>{
                            alert('success')
                        }
                    },


                })
            }
        }

    }

</script>

<style lang="scss" scoped>



</style>