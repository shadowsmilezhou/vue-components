<template>
    <div>
        <g-button style="margin: 10px" icon="setup" @click="showToastError">clickme</g-button>
        <g-button style="margin: 10px" icon="setup" @click="showToastCorrect">clickme</g-button>
        <g-button style="margin: 10px" icon="setup" @click="showToastWarning">clickme</g-button>
        <g-button style="margin: 10px" icon="setup" @click="showToastReminding">clickme</g-button>
    </div>

</template>

<script>


import Vue from 'vue'
import GToast from './g-toast/g-toast'
import plugin from './g-toast/plugin'
import gbutton from './g-button/g-button'

Vue.use(plugin);
export default {
    name:'GToast',
    components:{
        'g-toast':GToast,
        'g-button':gbutton
    },
    methods:{
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