<template>
  <div>
    <g-icon name="waiting" class="icon"></g-icon>
    <g-icon name="download" class="icon"></g-icon>
    <g-icon name="thumbsup" class="icon"></g-icon>
    <g-icon name="delete" class="icon"></g-icon>
    <g-icon name="upload" class="icon"></g-icon>
    <div style="margin-top: 20px">
      <g-popover position="top" trigger="hover">
        <template slot="content">
          <div>查看代码</div>
        </template>
        <g-button @click="displayName" icon="desc" icon-position="right" style="border-color: black">图标代码</g-button>
      </g-popover>
      <pre v-if="nameVisible"><code>{{name}}</code></pre>
    </div>
  </div>
</template>

<script>
  import GIcon from '../../../src/g-icon/g-icon'
  import GPopover from '../../../src/g-popover/g-popover'
  import GButton from '../../../src/g-button/g-button'
    export default {
        name: "icon-demos",
        components:{
            GIcon,
            GPopover,
            GButton
        },
        methods:{
            displayName(){
                this.nameVisible = !this.nameVisible
            }
        },
        data(){
            return {
                nameVisible:false,
                name:`
    <g-icon name="waiting" class="icon"></g-icon>
    <g-icon name="download" class="icon"></g-icon>
    <g-icon name="thumbsup" class="icon"></g-icon>
    <g-icon name="delete" class="icon"></g-icon>
    <g-icon name="upload" class="icon"></g-icon>
                `
            }
        }
    }
</script>

<style scoped lang="scss">
  .icon {
    margin: 10px 10px;
  }
</style>