<template>
  <div>
    <g-date-picker :value="d" @input="d = $event" :scope="scope"></g-date-picker>
    <p>其他内容</p>
    <div style="margin: 20px 0;">
      <g-popover position="top" trigger="hover">
        <template slot="content">
          <div>查看代码</div>
        </template>
        <g-button style="border-color: black" @click="displayName" icon="desc" icon-position="right">日期选择器</g-button>
      </g-popover>
      <pre v-if="nameVisible"><code>{{name1}}</code></pre>
    </div>


  </div>
</template>
<style>
</style>
<script>
    import GDatePicker from "../../../src/g-datepicker/g-datepicker";
    import GButton from '../../../src/g-button/g-button'
    import GPopover from '../../../src/g-popover/g-popover'
    // import GDateRangePicker from "./date-picker/date-range-picker";
    export default {
        name: "demo",
        components: { GDatePicker,GButton,GPopover},
        data() {
            return {
                nameVisible:false,
                d: new Date(),
                scope: [new Date(1958, 1), new Date(2118, 5)],
                name1:`
     <g-date-picker :value="d" @input="d = $event" :scope="scope"></g-date-picker>
           `
            };
        },
        methods:{
            displayName(){
                this.nameVisible = !this.nameVisible
            }
        }
    };
</script>
<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: white;
  }
</style>
<style scoped lang="scss">
</style>