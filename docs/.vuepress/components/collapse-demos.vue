<template>
  <div >
    <g-collapse :selected.sync="selectedTab" :single="false">
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


    <div style="margin: 20px 0;">
      <g-popover position="top" trigger="hover">
        <template slot="content">
          <div>查看代码</div>
        </template>
        <g-button style="border-color: black" @click="displayName" icon="desc" icon-position="right">手风琴组件</g-button>
      </g-popover>
      <pre v-if="nameVisible"><code>{{name1}}</code></pre>
    </div>



  </div>
</template>

<script>

    import GCollapse from '../../../src/g-collapse/g-collapse'
    import GCollapseItem from '../../../src/g-collapse/g-collapse-item'
    import GButton from '../../../src/g-button/g-button'
    import GPopover from '../../../src/g-popover/g-popover'

    export default {
        name:'GToast',
        components:{
            'g-collapse':GCollapse,
            'g-collapse-item':GCollapseItem,
            GButton,
            GPopover
        },
        data(){
            return {
                selectedTab:['1'],
                direction:'vertical',
                title:'',
                name:'',
                nameVisible:false,
                name1:`
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
                `
            }
        },
       methods:{
           displayName(){
               this.nameVisible = !this.nameVisible
           }
       }

    }

</script>

<style lang="scss" scoped>



</style>