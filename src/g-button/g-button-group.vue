<template>
    <div class="g-button-group">
        <slot></slot>
    </div>

</template>

<script>
    export default {
        name: "g-button-group",
        mounted() {
            for (let node of this.$el.children){
                if (node.nodeName.toLocaleLowerCase() !== 'button'){
                    console.warn(`子元素应该全是button，而你却设置了${node.nodeName}`)
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .g-button-group{
        display: inline-flex;
        vertical-align: middle;
        > .g-button {
            border-radius: 0;
            &:not(:first-child){
                margin-left: -1px;
            }

            &:first-child {
                border-top-left-radius: var(--border-radius);
                border-bottom-left-radius: var(--border-radius);
            }
            &:last-child {
                border-top-right-radius: var(--border-radius);
                border-bottom-right-radius: var(--border-radius);
            }
            &:hover {
                position: relative;
                z-index: 1;
            }
        }

    }


</style>