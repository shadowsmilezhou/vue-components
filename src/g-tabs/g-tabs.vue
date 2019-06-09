<template>
  <div class="g-tabs" :class="{[`vertical`]:vertical,[`horizontal`]:horizontal}">
    <slot></slot>
  </div>
</template>

<script>
  import Vue from 'vue'
    export default {
        name: "g-tabs",
        props:{
            selected:{
                type:String,
                required:true
            },
            direction:{
                type: String,
                default: 'horizontal',
                validator (value) {
                    return ['horizontal', 'vertical'].indexOf(value) >= 0
                }
            }
        },

        data(){
            return {
                eventBus:new Vue
            }
        },
        provide(){
            return {

                eventBus:this.eventBus
            }
        },
        mounted(){
            this.checkChildren();
            this.selectTab()
        },
        computed:{
            vertical(){
                return this.direction === 'vertical'
            },
            horizontal(){
                return this.direction === 'horizontal'
            }
        },
        methods:{
            checkChildren(){
                if (this.$children.length === 0) {
                    console && console.warn &&
                    console.warn('tabs的子组件应该是tabs-head和tabs-nav，但你没有写子组件')
                }
            },
            selectTab(){
                this.$children.forEach((vm)=>{
                  if (vm.$options.name === 'g-tabs-head'){
                      vm.$children.forEach(childVm=>{
                          if (childVm.$options.name === 'g-tabs-item'
                              && childVm.name === this.selected
                          ){
                            this.eventBus.$emit('update:selected',this.selected,childVm,this.direction)
                          }
                      })
                  }
                })
            }

        }

    }
</script>

<style scoped lang="scss">
    .g-tabs.vertical {
      display: flex;
      flex-direction: row;
      user-select: none;
    }
</style>