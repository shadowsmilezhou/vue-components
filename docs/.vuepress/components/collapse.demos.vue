<template>
  <div id="app" style="padding: 100px;">
    <g-collapse :selected.sync="selectedTab" :single="true">
      <g-collapse-item title="标题1" name="1">
        这是标题一展示的内容
      </g-collapse-item>
      <g-collapse-item title="标题2" name="2">
        这是标题二展示的内容
      </g-collapse-item>
      <g-collapse-item title="标题3" name="3">
        这是标题三展示的内容
      </g-collapse-item>
    </g-collapse>

  </div>
</template>

<script>


    import Vue from 'vue'

    import GCollapse from '../../../src/g-collapse/g-collapse'
    import GCollapseItem from '../../../src/g-collapse/g-collapse-item'

    Vue.use(plugin);
    export default {
        name:'GToast',
        components:{
            'g-collapse':GCollapse,
            'g-collapse-item':GCollapseItem,
        },
        data(){
            return {
                selectedTab:['1'],
                direction:'vertical',
                title:'',
                name:''
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