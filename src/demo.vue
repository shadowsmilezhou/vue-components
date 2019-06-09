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
        'g-icon':GIcon
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