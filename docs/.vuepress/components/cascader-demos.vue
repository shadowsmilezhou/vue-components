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


    import GCascader from '../../../src/g-cascader/g-cascader'
    import db from '../../../test/fixtures/db'

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


    export default {
        name:'GToast',
        components:{
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
        }

    }

</script>

<style lang="scss" scoped>



</style>