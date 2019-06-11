<template>
  <div style="margin: 20px;">
    <div>只能上传 300kb 以内的 png、jpeg 文件</div>
    <g-uploader accept="image/*" method="POST" action="http://127.0.0.1:3000/upload" name="file"
                :parseResponse="parseResponse" :file-list.sync="fileList" v-on:update:fileList="yyy">
      <g-button icon="upload">上传</g-button>
    </g-uploader>
  </div>
</template>

<script>
    import GUploader from '../../../src/g-uploader/g-uploader'
    import GButton from '../../../src/g-button/g-button'
    export default {
        name: "demo",
        components: {GUploader, GButton},
        data () {
            return {
                fileList: []
            }
        },
        methods: {
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