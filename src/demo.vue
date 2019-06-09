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
import GToast from './g-toast/g-toast'
import plugin from './g-toast/plugin'
import gbutton from './g-button/g-button'
import Gtabs from './g-tabs/g-tabs'
import GtabsItem from './g-tabs/g-tabs-item'
import GTabsBody from './g-tabs/g-tabs-body'
import GtabsHead from './g-tabs/g-tabs-head'
import GtabsPanel from './g-tabs/g-tabs-panel'
import GIcon from './g-icon/g-icon'
import GPopover from './g-popover/g-popover'

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
        },
        showToastCorrect(){
            this.$toast(`正确提示`,{
                enableHtml: "true",
                remindMessage: "correct",
                position:'top',
                closeButton: {
                    text:'关闭',
                    callback:()=>{
                        alert('success')
                    }
                },


            })
        },
        showToastWarning(){
            this.$toast(`警告，您不能这样做`,{
                enableHtml: "true",
                position:'middle',
                remindMessage: "warning",
                closeButton: {
                    text:'关闭',
                    callback:()=>{
                        alert('success')
                    }
                },


            })
        },
        showToastReminding(){
            this.$toast(`这是一条友善的提醒`,{
                enableHtml: "true",
                position:'bottom',
                remindMessage: "reminding",
                closeButton: {
                    text:'关闭',
                    callback:()=>{
                        alert('success')
                    }
                },


            })
        },
    }

}

</script>

<style lang="scss" scoped>



</style>