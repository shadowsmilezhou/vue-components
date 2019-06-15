<template>
  <div>
    <img-lazy>
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

    <img-lazy>
      <img :src="item.display_image" alt="">
      <template slot="skeleton" >
        <div style="width: 1024px;height: 508px;border: 1px solid gray"></div>      </template>
    </img-lazy>
    <img-lazy>
      <img :src="item.display_image" alt="">
      <template slot="skeleton" >
        <div style="width: 1024px;height: 508px;border: 1px solid gray"></div>      </template>
    </img-lazy>

  </div>

</template>

<script>
  import imgLazy from './g-lazyLoading/g-lazyLoding.vue'
  export default {
    name:'g-image-lazy',
    components:{
        'img-lazy':imgLazy,

    },
    data(){
        return {
            item:{
                display_image:"http://pic37.nipic.com/20140113/8800276_184927469000_2.png"
            },
            className:''
        }
    }

  }
</script>

<style lang="scss" scoped>


</style>