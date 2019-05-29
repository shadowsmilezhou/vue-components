import  Vue from 'vue'
import Button from './g-button'
import Icon from './g-icon'
import ButtonGroup from './g-button-group'
import Ginput from './g-input'

Vue.component('g-button',Button);
Vue.component('g-icon',Icon);
Vue.component('g-button-group',ButtonGroup);
Vue.component('g-input',Ginput);


new Vue({
    el:'#app',
    data:{
        'loading1':false,
        'loading2':true,
        'loading3':false,
        'message':''
    }
});
