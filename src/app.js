import Vue from 'vue'
import GButton from './g-button'
import GIcon from './g-icon'
import GButtonGroup from './g-button-group'
import Ginput from './g-input'
import Grow from './g-row'
import Gcol from './g-col'
import Glayout from './g-layout'
import Gcontent from './g-content'
import Gheader from './g-header'
import Gfooter from './g-footer'
import Gslider from './g-slider'

Vue.component('g-button',GButton);
Vue.component('g-icon',GIcon);
Vue.component('g-button-group',GButtonGroup);
Vue.component('g-input',Ginput);
Vue.component('g-row',Grow);
Vue.component('g-col',Gcol);
Vue.component('g-layout',Glayout);
Vue.component('g-content',Gcontent);
Vue.component('g-slider',Gslider);
Vue.component('g-header',Gheader);
Vue.component('g-footer',Gfooter);


new Vue({
    el:'#app',
    data:{
        'loading1':false,
        'loading2':true,
        'loading3':false,
        'message':''
    }
});
