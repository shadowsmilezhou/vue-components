import Vue from "vue";
import Demo from "./demo.vue";
import Demo2 from "./demo2.vue";


Vue.config.productionTip = false;

new Vue({
    render: h => h(Demo),
}).$mount("#app");
