import Vue from 'vue'
import Button from './button'
import ButtonGroup from './button-group'
import Icon from './icon'

Vue.component('zh-button', Button)
Vue.component('zh-button-group', ButtonGroup)
Vue.component('zh-icon', Icon)

new Vue({
    el: '#app',
    data: {
        loading1: true,
        loading2: false,
        loading3: false,
    }
})