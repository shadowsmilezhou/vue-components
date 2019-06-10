<template>
  <div>
    <div style="padding: 20px;">
      <g-cascader :source.sync="source" popover-height="300px"
                  :selected.sync="selected" :load-data="loadData">

      </g-cascader>
    </div>
  </div>
</template>

<script>


    import Vue from 'vue'
    import GToast from './g-toast/g-toast'
    import plugin from './g-toast/plugin'
    import GIcon from './g-icon/g-icon'
    import GPopover from './g-popover/g-popover'
    import GCollapse from './g-collapse/g-collapse'
    import GCollapseItem from './g-collapse/g-collapse-item'
    import GCascader from './g-cascader/g-cascader'
    import db from '../test/fixtures/db'

    function ajax(parentId = 0) {
        return new Promise((success, fail) => {
            setTimeout(() => {
                let result = db.filter((item) => item.parent_id == parentId);
                result.forEach(node => {
                    if (db.filter(item => item.parent_id === node.id).length > 0) {
                        node.isLeaf = false
                    }else{
                        node.isLeaf = true
                    }
                });

                success(result)
            }, 1000)
        })
    }


    Vue.use(plugin);
    export default {
        name:'GToast',
        components:{
            'g-toast':GToast,
            'g-icon':GIcon,
            'g-popover':GPopover,
            'g-collapse':GCollapse,
            'g-collapse-item':GCollapseItem,
            'g-cascader':GCascader,
        },
        data(){
            return {
                selectedTab:['1'],
                direction:'vertical',
                title:'',
                name:'',
                selected:[],
                source:[]
            }
        },
        created(){
            ajax(0).then(result => {
                this.source = result

            })
        },
        methods:{
            loadData ({id}, updateSource) {
                ajax(id).then(result => {
                    updateSource(result) // 回调:把别人传给我的函数调用一下
                })
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