<template>
  <div style="margin: 20px;">
    <g-pager :total-page="10" :current-page.sync="currentPage"></g-pager>
    <div style="margin: 100px 0;">
    <g-popover position="top" trigger="hover">
      <template slot="content">
        <div>查看代码</div>
      </template>
      <g-button style="border-color: black" @click="displayName" icon="desc" icon-position="right">分页器</g-button>
    </g-popover>
    <pre v-if="nameVisible"><code>{{name}}</code></pre>
    </div>
  </div>
</template>
<script>
    import GPager from '../../../src/g-pagers/g-pagers'
    import GButton from '../../../src/g-button/g-button'
    import GPopover from '../../../src/g-popover/g-popover'
    export default {
        name: "demo",
        components: {GPager,GButton,GPopover},
        methods:{
            displayName(){
                this.nameVisible = !this.nameVisible
            }
        },
        data () {
            return {
                nameVisible:false,
                currentPage: 1,
                name:`
<g-pager :total-page="10" :current-page.sync="currentPage"></g-pager>
                `
            }
        }
    };
</script>
