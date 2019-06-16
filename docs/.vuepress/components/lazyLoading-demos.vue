<template>
  <div>
    <img-lazy :timeout="1000">
      <img :src="item.display_image" alt="">
      <template slot="skeleton" >
        <div style="width: 1024px;height: 508px;border: 1px solid gray"></div>
      </template>

    </img-lazy>

    <img-lazy :timeout="1000">
      <img :src="item.display_image" alt="">
      <template slot="skeleton" >
        <div style="width: 1024px;height: 508px;border: 1px solid gray"></div>

      </template>
    </img-lazy>
    <img-lazy :timeout="1000">
      <img :src="item.display_image" alt="">
      <template slot="skeleton" >
        <div style="width: 1024px;height: 508px;border: 1px solid gray"></div>      </template>
    </img-lazy>

    <img-lazy >
      <img :src="item.display_image" alt="">
      <template slot="skeleton" >
        <div style="width: 1024px;height: 508px;border: 1px solid gray"></div>      </template>
    </img-lazy>

    <img-lazy >
      <img :src="item.display_image" alt="">
      <template slot="skeleton" >
        <div style="width: 1024px;height: 508px;border: 1px solid gray"></div>      </template>
    </img-lazy>

    <img-lazy >
      <img :src="item.display_image" alt="">
      <template slot="skeleton" >
        <div style="width: 1024px;height: 508px;border: 1px solid gray"></div>      </template>
    </img-lazy>


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
    import imgLazy from '../../../src/g-lazyLoading/g-lazyLoding.vue'
    import GButton from '../../../src/g-button/g-button'
    import GPopover from '../../../src/g-popover/g-popover'
    export default {
        name:'g-image-lazy',
        components:{
            'img-lazy':imgLazy,
            'g-button':GButton,
            'g-popover':GPopover

        },
        data(){
            return {
                nameVisible:false,
                item:{
                    display_image:"http://zxkj.whzxkj.net/house.png"
                },
                className:'',
                name:`
    <img-lazy >
      <img :src="item.display_image" alt="">
      <template slot="skeleton" >
        <div style="width: 1024px;height: 508px;border: 1px solid gray"></div>
       </template>
    </img-lazy>

    <img-lazy >
      <img :src="item.display_image" alt="">
      <template slot="skeleton" >
        <div style="width: 1024px;height: 508px;border: 1px solid gray"></div>
       </template>
    </img-lazy>
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