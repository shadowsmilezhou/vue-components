<template>
  <div class="g-nav" :class="{vertical}">
    <slot></slot>
  </div>
</template>

<script>
    export default {
        name: "g-nav",

        props:{
            selected: {
                type: String
            },
            vertical: {
                type: Boolean,
                default: false
            },
        },

        provide(){
            return {
                root: this,
                vertical: this.vertical
            }
        },
        data () {
            return {
                items: [],
                namePath: []
            }
        },
        mounted () {
            // console.log('mounted');
            this.$nextTick(()=>{
                console.log(this.items);
            });
            this.updateChildren();
            this.listenToChildren()
        },
        updated(){
            this.updateChildren()

        },
        methods:{
            updateChildren(){
                this.items.forEach(vm=>{
                    if(this.selected === vm.name){
                        vm.selected = true
                    }else {
                        vm.selected = false
                    }
                })
            },
            listenToChildren(){
                this.items.forEach(vm => {
                    vm.$on('update:selected', (name) => {
                        this.$emit('update:selected', name)
                    })
                })
            },
            addItem(vm){
                this.items.push(vm)
            }
        }

    }
</script>

<style scoped lang="scss">
  @import "../../styles/_var.scss";
  .g-nav {
    display: flex;
    border-bottom: 1px solid $grey;
    color: $color;
    cursor: default;
    user-select: none;
    &.vertical {
      flex-direction: column;
      border: 1px solid $bgc-color;
      width: 200px;
      height: 300px;
    }
  }

</style>