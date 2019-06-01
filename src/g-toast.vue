<template>
    <div class="g-toast">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "g-toast",
        props:{
            autoClose:{

            },
            closeButton:{

            },
            position:{

            }
        }
    }
</script>

<style scoped lang="scss">

</style>