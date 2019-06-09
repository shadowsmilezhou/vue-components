import Vue from 'vue'
import GButton from './g-button/g-button'
import GIcon from './g-icon/g-icon'
import GButtonGroup from './g-button/g-button-group'
import Ginput from './g-input/g-input'
import Grow from './g-grid/g-row'
import Gcol from './g-grid/g-col'
import Glayout from './g-layout/g-layout'
import Gcontent from './g-layout/g-content'
import Gheader from './g-layout/g-header'
import Gfooter from './g-layout/g-footer'
import Gslider from './g-layout/g-slider'

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
