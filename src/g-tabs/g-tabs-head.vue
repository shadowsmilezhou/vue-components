<template>
  <div class="g-tabs-head" ref="head" :class="direction">
    <slot></slot>
    <div class="line" ref="line" :class="direction"></div>
    <div class="actions-wrapper" :class="direction">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
    export default {
        name: "g-tabs-head",
        inject: ['eventBus'],
        computed:{
            direction(){
                return this.$parent.direction
            }
        },
        mounted() {
            this.eventBus.$on('update:selected', (item, vm) => {
                if (this.direction === 'vertical') {
                    this.updateLineRightPosition(vm);

                } else {
                    this.updateLineTopPosition(vm)
                }


            })
        },
        methods: {
            updateLineTopPosition(vm) {
                this.$refs.line.style.top = null;
                this.$refs.line.style.height = null;
                let {width, left} = vm.$el.getBoundingClientRect();
                let {left: left2} = this.$refs.head.getBoundingClientRect();
                this.$refs.line.style.width = `${width}px`;
                this.$refs.line.style.left = `${left - left2}px`;
            },
            updateLineRightPosition(vm) {
                this.$refs.line.style.left = null;
                this.$refs.line.style.width = null;
                let {height, top} = vm.$el.getBoundingClientRect();
                let {top: top2} = this.$refs.head.getBoundingClientRect();
                this.$refs.line.style.height = `${height}px`;
                this.$refs.line.style.top = `${top - top2}px`
            }
        }

    }
</script>

<style scoped lang="scss">
  $tab-height: 40px;
  $blue: blue;
  $border-color: #ddd;
  .g-tabs-head.horizontal{
    display: flex;
    height: $tab-height;
    justify-content: flex-start;
    position: relative;
    border-bottom: 1px solid $border-color;
    > .line.horizontal {
      position: absolute;
      bottom: 0;
      border-bottom: 1px solid $blue;
      transition: all 350ms;
    }

    > .actions-wrapper.horizontal {
      margin-left: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 1em;
    }

  }

  .g-tabs-head.vertical {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: relative;
    border-right: 1px solid $border-color;
    border-bottom: none;
    height: 100%;

    > .line.vertical {
      position: absolute;
      right: 0;
      border-right: 1px solid $blue;
      transition: all 350ms;
    }

    > .actions-wrapper.vertical {
      margin-left: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1em 0;
    }
  }

</style>