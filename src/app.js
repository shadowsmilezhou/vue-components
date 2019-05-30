import Vue from 'vue'
import GButton from './g-button'
import GIcon from './g-icon'
import GButtonGroup from './g-button-group'
import Ginput from './g-input'
import Grow from './g-row'
import Gcol from './g-col'

Vue.component('g-button',GButton);
Vue.component('g-icon',GIcon);
Vue.component('g-button-group',GButtonGroup);
Vue.component('g-input',Ginput);
Vue.component('g-row',Grow);
Vue.component('g-col',Gcol);


new Vue({
    el:'#app',
    data:{
        'loading1':false,
        'loading2':true,
        'loading3':false,
        'message':''
    }
});
