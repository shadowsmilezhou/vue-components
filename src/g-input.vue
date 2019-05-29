<template>
    <div class="g-input" :class="{error}">
        <input :value="value"
        @input="$emit('input',$event.target.value)"
        @change="$emit('change',$event.target.value)"
        @focus="$emit('focus',$event.target.value)"
        @blur="$emit('blur',$event.target.value)"
        :disabled="disabled" :readonly="readonly"

        >
        <template v-if="error">
            <g-icon name="error" class="icon-error"></g-icon>
            <span class="errorMessage">{{error}}</span>
        </template>
    </div>

</template>

<script>
    import Icon from './g-icon'
    export default {
        name: "g-input",
        components:{
            'g-icon':Icon
        },
        props: {
            value: {
                type: String,
                default: ''
            },
            disabled: {
                type: Boolean,
                default: false
            },
            readonly: {
                type: Boolean,
                default: false
            },
            error:{
                type:String,
            }
        }
    }
</script>

<style scoped lang="scss">
    $height: 32px;
    $border-color: #999;
    $border-color-hover: #666;
    $border-radius: 4px;
    $font-size: 12px;
    $box-shadow-color: rgba(0, 0, 0, 0.5);
    $red: #F1453D;
    .g-input {
        font-size: $font-size;
        display: inline-flex;
        align-items: center;
        > :not(:last-child) {
            margin-right: .5em;
        }

        > input {
            height: $height;
            border: 1px solid $border-color;
            border-radius: $border-radius;
            padding: 0 0.8em;
            font-size: inherit;

            &:hover {
                border-color: $border-color-hover;
            }

            &:focus {
                outline: none;
                box-shadow: inset 0 1px 3px;
            }
            &[disabled], &[readonly] {border-color: #bbb;color: #bbb;cursor: not-allowed; }
        }
        &.error {
            > input {
                border-color: $red;
            }
        }
        .icon-error { fill: $red; }
        .errorMessage { color: $red; }



    }

</style>