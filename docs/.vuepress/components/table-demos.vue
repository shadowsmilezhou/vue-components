<template>
  <div>
    <div style="margin: 20px;">
      <g-table :number-visible="true" :columns="columns" :data-source="dataSource" bordered :selected-items.sync="selected" :order-by.sync="orderBy"
               @update:orderBy="sorted" :loading="loading" :height="400" expend-field="description" checkable>
        <template slot-scope="slotValue">
          <button @click="edit(slotValue.item)">编辑</button>
          <button @click="view(slotValue.item)">查看</button>
          <button @click="deleteItem(slotValue.item)">删除</button>
        </template>
      </g-table>
    </div>

    <div style="margin: 20px 0;">
      <g-popover position="top" trigger="hover">
        <template slot="content">
          <div>查看代码</div>
        </template>
        <g-button style="border-color: black" @click="displayName" icon="desc" icon-position="right">表格组件</g-button>
      </g-popover>
      <pre v-if="nameVisible"><code>{{name}}</code></pre>
    </div>



  </div>
</template>
<script>
    import GPager from '../../../src/g-pagers/g-pagers'
    import GTable from '../../../src/g-table/g-table'
    import GButton from '../../../src/g-button/g-button'
    import GPopover from '../../../src/g-popover/g-popover'
    export default {
        name: "demo",
        components: {GPager, GTable,GButton,GPopover},
        data () {
            return {
                nameVisible: false,
                selected: [],
                columns: [
                    {text: '姓名', field: 'name', width: 100}, // 1
                    {text: '分数', field: 'score',width: 100},
                    {text: 'id', field: 'id',width: 100},
                ],
                orderBy: { // true - 开启排序，但是不确定asc desc
                    score: 'desc'
                },
                loading: false,
                dataSource: [
                    {"name":"魏  维","score":"84.29 ","id":"1",description:'hello world'},
                    {"name":"卢  路","score":"83.68 ","id":"2",description:'hello world'},
                    {"name":"王宇航","score":"82.50 ","id":"3",description:'hello world'},
                    {"name":"曹亚男","score":"81.56 ","id":"4",description:'hello world'},
                    {"name":"马  昊","score":"81.55 ","id":"5",description:'hello world'},
                    {"name":"裴亚双","score":"81.34 ","id":"6",description:'hello world'},
                    {"name":"孙  怡","score":"81.26 ","id":"7"},
                    {"name":"姚苗苗","score":"81.08 ","id":"8"},
                    {"name":"汤  幸","score":"81.03 ","id":"9"},
                    {"name":"胡甜甜","score":"80.30 ","id":"10"},
                    {"name":"兰凌寒","score":"80.29 ","id":"11"},
                    {"name":"于江楠","score":"80.12 ","id":"12"},
                    {"name":"李  文","score":"80.00 ","id":"13"},
                    {"name":"吴洋洋","score":"79.65 ","id":"14"},
                    {"name":"刘子鹏","score":"79.43 ","id":"15"},
                    {"name":"庄蕾蕾","score":"79.15 ","id":"16"},
                    {"name":"崔丽丽","score":"79.11 ","id":"17"},
                    {"name":"刘  煜","score":"79.04 ","id":"18"},
                    {"name":"刘彦君","score":"78.97 ","id":"19"},
                    {"name":"何庚唅","score":"78.72 ","id":"20"},
                    {"name":"彭  欣","score":"78.69 ","id":"21"},
                    {"name":"张  婷","score":"78.66 ","id":"22"},
                    {"name":"裴天天","score":"78.64 ","id":"23"},
                    {"name":"段  金","score":"78.59 ","id":"24"},
                    {"name":"田  文","score":"78.22 ","id":"25"},
                    {"name":"陈佩阳","score":"78.17 ","id":"26"},
                    {"name":"任  杉","score":"78.15 ","id":"27"},
                    {"name":"周  莹","score":"78.12 ","id":"28"},
                    {"name":"宋  柯","score":"77.80 ","id":"29"},
                    {"name":"韩小雨","score":"77.67 ","id":"30"}
                ],
                name:`
       <g-table :number-visible="true" :columns="columns" :data-source="dataSource" bordered :selected-items.sync="selected" :order-by.sync="orderBy"
               @update:orderBy="sorted" :loading="loading" :height="400" expend-field="description" checkable>
        <template slot-scope="slotValue">
          <button @click="edit(slotValue.item)">编辑</button>
          <button @click="view(slotValue.item)">查看</button>
          <button @click="deleteItem(slotValue.item)">删除</button>
        </template>
      </g-table>

                `
            }
        },
        methods: {
            displayName(){
                this.nameVisible = !this.nameVisible
            },
            edit (item) {
                alert(`开始编辑${item.id}`)
            },
            view (item) {
                alert(`开始查看${item.id}`)
            },
            deleteItem(item){
                console.log('delete');
                let index = this.dataSource.indexOf(item);
              this.dataSource.splice(index,1)
            },
            sorted (data) {
                this.loading = true;
                setTimeout(() => {
                    if (data.score === 'asc'){
                        this.dataSource = this.dataSource.sort((a, b) => a.score - b.score);
                    }else {
                        this.dataSource = this.dataSource.sort((a, b) => b.score - a.score);
                    }
                    this.loading = false
                }, 1000)
            }
        }
    };
</script>
<style>
  * {margin: 0; padding: 0; box-sizing: border-box;}
  body {background: white;}
</style>
<style scoped lang="scss">
</style>