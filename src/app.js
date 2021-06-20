import Vue from 'vue'
import Button from './button'
import ButtonGroup from './button-group'
import Input from './input'

Vue.component('zh-button', Button)
Vue.component('zh-button-group', ButtonGroup)
Vue.component('zh-input', Input)

new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: false,
        loading3: false,
    }
})