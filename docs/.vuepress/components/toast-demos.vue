<template>
  <div>
    <g-button style="color: #E91E63; margin: 10px" icon="click" @click="showToastError">clickme</g-button>
    <g-button style="color: #4CAF50;margin: 10px" icon="click" @click="showToastCorrect">clickme</g-button>
    <g-button style="color:  #FFEB3B;margin: 10px" icon="click" @click="showToastWarning">clickme</g-button>
    <g-button style="color: #3F51B5;margin: 10px" icon="click" @click="showToastReminding">clickme</g-button>
    <div style="margin: 20px 0;">
      <g-popover position="top" trigger="hover">
        <template slot="content">
          <div>查看代码</div>
        </template>
        <g-button style="border-color: black" @click="displayName" icon="desc" icon-position="right">提示信息</g-button>
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
    import Gpopover from '../../../src/g-popover/g-popover'

    Vue.use(plugin);
    export default {
        name:'GToast',
        components:{
            'g-toast':GToast,
            'g-button':gbutton,
            'g-popover':Gpopover
        },
        data(){
          return {
              nameVisible:false,
              name:`
          showToastError(){
                this.$toast(\`错误提示\`,{
                    enableHtml: true,
                    remindMessage: "error",
                    closeButton: {
                        text:'关闭',
                        callback:()=>{

                        }
                    },


                })
            },
           showToastCorrect(){
                this.$toast(\`正确提示\`,{
                    enableHtml: true,
                    remindMessage: "correct",
                    position:'top',
                    closeButton: {
                        text:'关闭',
                        callback:()=>{

                        }
                    },


                })
            },
           showToastWarning(){
                this.$toast(\`警告，您不能这样做\`,{
                    enableHtml: true,
                    position:'middle',
                    remindMessage: "warning",
                    closeButton: {
                        text:'关闭',
                        callback:()=>{

                        }
                    },


                })
            },
           showToastReminding(){
                this.$toast(\`这是一条友善的提醒\`,{
                    enableHtml: true,
                    position:'bottom',
                    remindMessage: "reminding",
                    closeButton: {
                        text:'关闭',
                        callback:()=>{

                        }
                    },


                })
            },
        }
        `
          }
        },
        methods:{
            displayName(){
                this.nameVisible = !this.nameVisible
            },
            showToastError(){
                this.$toast(`错误提示`,{
                    enableHtml: true,
                    remindMessage: "error",
                    closeButton: {
                        text:'关闭',
                        callback:()=>{

                        }
                    },


                })
            },
            showToastCorrect(){
                this.$toast(`正确提示`,{
                    enableHtml: true,
                    remindMessage: "correct",
                    position:'top',
                    closeButton: {
                        text:'关闭',
                        callback:()=>{

                        }
                    },


                })
            },
            showToastWarning(){
                this.$toast(`警告，您不能这样做`,{
                    enableHtml: true,
                    position:'middle',
                    remindMessage: "warning",
                    closeButton: {
                        text:'关闭',
                        callback:()=>{

                        }
                    },


                })
            },
            showToastReminding(){
                this.$toast(`这是一条友善的提醒`,{
                    enableHtml: true,
                    position:'bottom',
                    remindMessage: "reminding",
                    closeButton: {
                        text:'关闭',
                        callback:()=>{

                        }
                    },


                })
            },
        }

    }

</script>

<style lang="scss" scoped>


</style>