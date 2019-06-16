<template>
  <div style="margin: 20px;">
    <div>只能上传 300kb 以内的 png、jpeg 文件</div>
    <g-uploader accept="image/*" method="POST" action="http://127.0.0.1:3000/upload" name="file"
                :parseResponse="parseResponse" :file-list.sync="fileList" v-on:update:fileList="yyy">
      <g-button icon="upload">上传</g-button>
    </g-uploader>

    <div style="margin: 20px 0;">
      <g-popover position="top" trigger="hover">
        <template slot="content">
          <div>查看代码</div>
        </template>
        <g-button style="border-color: black" @click="displayName" icon="desc" icon-position="right">图片上传</g-button>
      </g-popover>
      <pre v-if="nameVisible"><code>{{name}}</code></pre>
    </div>
  </div>
</template>

<script>
    import GUploader from '../../../src/g-uploader/g-uploader'
    import GButton from '../../../src/g-button/g-button'
    import GPopover from '../../../src/g-popover/g-popover'
    export default {
        name: "demo",
        components: {GUploader, GButton,GPopover},
        data () {
            return {
                fileList: [],
                nameVisible:false,
                name:`
     <g-uploader accept="image/*" method="POST" action="http://127.0.0.1:3000/upload" name="file"
                :parseResponse="parseResponse" :file-list.sync="fileList" v-on:update:fileList="yyy">
      <g-button icon="upload">上传</g-button>
    </g-uploader>

                `
            }
        },
        methods: {
            displayName(){
                this.nameVisible = !this.nameVisible
            },
            parseResponse (response) {
                let object = JSON.parse(response);
                let url = `http://127.0.0.1:3000/preview/${object.id}`;
                return url
            },
            yyy (fileList) {
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