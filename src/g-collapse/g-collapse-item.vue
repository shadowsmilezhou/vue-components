<template>
  <div class="collapseItem">
    <div class="title" @click="toggle" :data-name="name">
      {{title}}
    </div>
    <transition name="slide">
    <div class="content" ref="content" v-if="open">
      <slot></slot>
    </div>
    </transition>
  </div>
</template>

<script>
  export default {
      name:'g-collapse-item',
      props: {
          title: {
              type: String,
              required: true
          },
          name: {
              type: String,
              required: true
          }
      },
      data () {
          return {
              open: false,
          }
      },
      inject: ['eventBus'],
      mounted () {
          this.eventBus && this.eventBus.$on('update:selected', (names) => {
              if (names.indexOf(this.name) >= 0) {
                  this.open = true
              } else {
                  this.open = false
              }
          })
      },
      methods: {
          toggle () {
              if (this.open) {
                  this.eventBus && this.eventBus.$emit('update:removeSelected', this.name)
              } else {
                  this.eventBus && this.eventBus.$emit('update:addSelected', this.name)
              }
          },
      },
  }
</script>

<style scoped lang="scss">
  @import "../../styles/_var.scss";
  $grey: #ddd;
  $border-radius: 4px;
  @keyframes slidein {
      0%{
        opacity: 0;
      }
      100%{
        opacity: 1;
      }
  }
  .slide-enter-active {
    animation: slidein 100ms ;
  }

  .collapseItem {
    > .title { border: 1px solid black; margin-top: -1px; margin-left: -1px; margin-right: -1px;
      min-height: 32px; display: flex; align-items: center; padding: 0 8px;
      background: lighten($border-color, 8%);
    }
    &:first-child {
      > .title { border-top-left-radius: $border-radius; border-top-right-radius: $border-radius; }
    }
    &:last-child {
      > .title:last-child { border-bottom-left-radius: $border-radius; border-bottom-right-radius: $border-radius; }
    }
    > .content { padding: 8px; border-right: 1px solid black;border-left: 1px solid black;
      &:last-child {
        border-bottom: 1px solid black;
      }
    }

  }
</style>