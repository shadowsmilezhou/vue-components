<template>
  <div class="g-tabs-item" @click="onClick" :class="classes" :data-name="name">
    <slot></slot>
  </div>
</template>

<script>
    export default {
        name: "g-tabs-item",
        inject:['eventBus'],
        data(){
            return {
                active:false,
            }
        },
        props:{
            name:{
                type: String | Number,
                required: true
            },
            disabled:{
                type: Boolean,
                default: false
            }

        },
        computed:{
            classes(){
                return {
                    active: this.active,
                    disabled: this.disabled,
                    vertical:this.direction === 'vertical',
                    horizontal:this.direction === 'horizontal'
                }
            },
            direction(){
                return this.$parent.direction
            }
        },
        created() {
          this.eventBus.$on('update:selected',(name)=>{
              this.active = name === this.name;
          });

        },
        methods:{
            onClick(){
                if (this.disabled) {return}
                this.eventBus && this.eventBus.$emit('update:selected', this.name, this,this.direction )

            }
        }
    }
</script>

<style scoped lang="scss">
  @import '../../styles/_var.scss';
  $disabled-text-color: grey;
  .g-tabs-item.vertical {
    flex-shrink: 0;
    padding: 1em 0;
    cursor: pointer;
    height: 100%;
    display: flex;
    align-items: center;
      &.active {
         color: $blue;
         font-weight: bold;
       }
      &.disabled {
         color: $disabled-text-color;
         cursor: not-allowed;
       }
  }
  .g-tabs-item.horizontal {
      flex-shrink: 0;
      padding: 0 1em;
      cursor: pointer;
      height: 100%;
      display: flex;
      align-items: center;
        &.active {
          color: $blue;
          font-weight: bold;
        }
        &.disabled {
          color: $disabled-text-color;
          cursor: not-allowed;
        }
  }

</style>