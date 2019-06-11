<template>
  <div class="g-sticky-wrapper" ref="wrapper" :style="{height}">
    <div class="g-sticky" :class="classes" :style="{left, width, top}">
      <slot></slot>
    </div>
  </div>
</template>

<script>
    export default {
        name: "gSticky",
        props: {
            distance: {
                type: Number,
                default: 0
            }
        },
        data () {
            return {
                sticky: false,
                left: undefined,
                width: undefined,
                height: undefined,
                top: undefined,
            }
        },
        mounted () {
            this.windowScrollHandler = this._windowScrollHandler.bind(this);
            window.addEventListener('scroll', this.windowScrollHandler)
        },
        beforeDestroy () {
            //mounted 里面产生的副作用全部需要移除
            window.removeEventListener('scroll', this.windowScrollHandler)
        },
        created () {
            this.timerId = null
        },
        computed: {
            classes () {
                return {
                    sticky: this.sticky
                }
            }
        },
        methods: {
            offsetTop () {
                let {top} = this.$refs.wrapper.getBoundingClientRect();
                return {top: top + window.scrollY}
            },
            _windowScrollHandler () {
                let {top} = this.offsetTop();
                console.log(top);
                if (window.scrollY > top - this.distance) {
                    //在改变后获取，以防取不到远程内容的值
                    let {height, left, width} = this.$refs.wrapper.getBoundingClientRect();
                    this.height = height + 'px';
                    this.left = left + 'px';
                    this.width = width + 'px';
                    this.top = this.distance + 'px';
                    this.sticky = true
                } else {
                    this.height = undefined;
                    this.left = undefined;
                    this.width = undefined;
                    this.top = undefined;
                    this.sticky = false
                }
            }
        }
    }
</script>

<style scoped lang="scss">
  .g-sticky {
    &.sticky {
      position: fixed;
    }
  }
</style>