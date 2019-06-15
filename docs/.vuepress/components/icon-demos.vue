<template>
  <div>
    <g-icon name="waiting" class="icon"></g-icon>
    <g-icon name="download" class="icon"></g-icon>
    <g-icon name="thumbsup" class="icon"></g-icon>
    <g-icon name="delete" class="icon"></g-icon>
    <g-icon name="upload" class="icon"></g-icon>
  </div>
</template>

<script>
  import GIcon from '../../../src/g-icon/g-icon'
    export default {
        name: "icon-demos",
        components:{
            GIcon
        }
    }
</script>

<style scoped lang="scss">
  .icon {
    margin: 10px 10px;
  }
</style>