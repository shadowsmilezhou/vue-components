<template>
  <div class="g-uploader">
    <div @click="onClickUpload">
      <slot></slot>
    </div>

    <ol class="g-uploader-fileList">
      <transition-group name="fade">
        <li v-for="file in fileList" :key="file.name">

          <template v-if="file.status === 'uploading'">
            <g-icon name="waiting" class="g-uploader-spin"></g-icon>
          </template>


          <template v-else-if="file.type.indexOf('image') === 0">
            <img class="g-uploader-image" :src="file.url" width="32" height="32" alt="">
          </template>

          <temaplte v-else>
            <div class="g-uploader-defaultImage">
              <g-icon name="Over" class="g-uploader-spin"></g-icon>
            </div>
          </temaplte>


          <span class="g-uploader-name" :class="{[file.status]: file.status}">{{file.name}}</span>
          <div class="g-uploader-remove" @click="onRemoveFile(file)" style="display: inline-block;text-align: center;">
            <g-icon name="delete" class="g-uploader-delete" style="width: 1em;height: 1em;"></g-icon>
          </div>
        </li>
      </transition-group>
    </ol>

    <div ref="temp" style="width: 0; height: 0; overflow: hidden;"></div>
  </div>
</template>

<script>
    import GIcon from '../g-icon/g-icon'
    import GButton from '../g-button/g-button'
    import http from './http'

    export default {
        name: "gUploader",
        components: {GIcon, GButton},
        props: {
            name: {type: String, required: true},
            action: {type: String, required: true},
            method: {type: String, default: 'POST'},
            parseResponse: {type: Function, required: true},
            fileList: {type: Array, default: () => []},
            sizeLimit: {type: Number}
        },
        data() {
            return {
                url: 'about:blank'
            }
        },
        methods: {
            onClickUpload() {
                let input = this.createInput();
                input.addEventListener('change', (e) => {
                    console.log('start');
                    this.uploadFiles(input.files); // 单文件
                    input.remove()
                });
                input.click();
            },


            onRemoveFile(file) {
                let copy = [...this.fileList];
                let index = copy.indexOf(file);
                copy.splice(index, 1);
                this.$emit('update:fileList', copy)

            },


            beforeUploadFiles(rawFiles, newNames) {
                rawFiles = Array.from(rawFiles);
                for (let i = 0; i < rawFiles.length; i++) {
                    let {size, type} = rawFiles[i];
                    if (size > this.sizeLimit) {
                        this.$emit('error', '文件大于2MB');
                        return false
                    }
                }
                let formatFiles = rawFiles.map((rawFile, i) => {
                    let {type, size} = rawFile;
                    return {name: newNames[i], type, size, status: 'uploading'}
                });
                this.$emit('update:fileList', [...this.fileList, ...formatFiles]);
                return true
            },
            uploadFiles(rawFiles) {
                let newNames = [];
                for (let i = 0; i < rawFiles.length; i++) {
                    let rawFile = rawFiles[i];
                    let {name, size, type} = rawFile;
                    let newName = this.generateName(name);
                    newNames[i] = newName
                }
                if (!this.beforeUploadFiles(rawFiles, newNames)) {
                    return
                }
                for (let i = 0; i < rawFiles.length; i++) {
                    let rawFile = rawFiles[i];
                    let newName = newNames[i];
                    let formData = new FormData();
                    formData.append(this.name, rawFile);
                    this.doUploadFiles(formData, (response) => {
                        console.log("response");
                        console.log(response);
                        let url = this.parseResponse(response);
                        this.url = url;
                        this.afterUploadFiles(newName, url)
                    }, (xhr) => {
                        console.log('error');
                        this.uploadError(xhr, newName)
                    })
                }
            },


            afterUploadFiles(newName, url) {
                let file = this.fileList.filter(f => f.name === newName)[0];
                let index = this.fileList.indexOf(file);
                let fileCopy = JSON.parse(JSON.stringify(file));
                fileCopy.url = url;
                fileCopy.status = 'success';
                let fileListCopy = [...this.fileList];
                fileListCopy.splice(index, 1, fileCopy);
                this.$emit('update:fileList', fileListCopy);
                this.$emit('uploaded')

            },




            uploadError(xhr, newName) {
                let file = this.fileList.filter(f => f.name === newName)[0];
                let index = this.fileList.indexOf(file);
                let fileCopy = JSON.parse(JSON.stringify(file));
                fileCopy.status = 'fail';
                // fileCopy.failMessage = '尺寸过大'
                let fileListCopy = [...this.fileList];
                fileListCopy.splice(index, 1, fileCopy);
                this.$emit('update:fileList', fileListCopy);
                let error = '';
                if (xhr.status === 0) {
                    error = '网络无法连接'
                }
                this.$emit('error', error)
            },


            generateName(name) {
                while (this.fileList.filter(f => f.name === name).length > 0) {
                    let dotIndex = name.lastIndexOf('.');
                    let nameWithoutExtension = name.substring(0, dotIndex);
                    let extension = name.substring(dotIndex);
                    name = nameWithoutExtension + '(1)' + extension
                }
                return name
            },


            doUploadFiles(formData, success, fail) {

                http[this.method.toLowerCase()](this.action, {success, fail, data: formData})
            },


            createInput() {
                this.$refs.temp.innerHTML = '';
                let input = document.createElement('input');
                input.accept = "image/*";
                input.type = 'file';
                input.multiple = true;
                this.$refs.temp.appendChild(input);
                return input
            }

        }
    }
</script>

<style scoped lang="scss">
  @import "../../styles/_var.scss";

  .g-uploader {
    &-fileList {
      list-style: none;

      > li {
        display: inline-flex;
        align-items: center;
        margin: 8px 0;
        border: 1px solid darken($bgc-color, 10%);

      }
    }

    &-defaultImage {
      width: 32px;
      height: 32px;
      margin-right: 8px;
    }

    &-image {
      margin-right: 8px;
      border: none;
    }

    &-name {
      margin-right: auto;

      &.success {
        color: green;
      }

      &.fail {
        color: red;
      }
    }

    &-remove {
      width: 32px;
      height: 32px;
      margin: 0 5px;
      cursor: pointer;
    }

    &-spin {
      width: 32px;
      height: 32px;
      @include spin;
    }

    &-delete {
      width: 32px;
      height: 32px;

    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: all .5s;
    transform: translateX(0);
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
    transform: translateX(-9999px);
  }
</style>