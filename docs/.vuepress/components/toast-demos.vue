<template>
  <div>
    <g-button style="margin: 10px" icon="setup" @click="showToastError">clickme</g-button>
    <g-button style="margin: 10px" icon="setup" @click="showToastCorrect">clickme</g-button>
    <g-button style="margin: 10px" icon="setup" @click="showToastWarning">clickme</g-button>
    <g-button style="margin: 10px" icon="setup" @click="showToastReminding">clickme</g-button>
  </div>
  <p><strong>使用方法</strong></p>
  <pre><code>{{name}}</code></pre>


</template>

<script>


    import Vue from 'vue'
    import GToast from '../../../src/g-toast/g-toast'
    import plugin from '../../../src/g-toast/plugin'
    import gbutton from '../../../src/g-button/g-button'

    Vue.use(plugin);
    export default {
        name:'GToast',
        components:{
            'g-toast':GToast,
            'g-button':gbutton
        },
        data(){
          return {
              name:`
    <div >
    <g-button icon="setup" @click="showToastError">错误提示</g-button>
    </div>

    showToastError(){
                this.$toast(\`错误提示\`,{
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



              `
          }
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