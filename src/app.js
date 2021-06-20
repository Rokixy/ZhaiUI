import Vue from 'vue'
import Button from './button'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'

Vue.component('zh-button', Button)
Vue.component('zh-button-group', ButtonGroup)
Vue.component('zh-input', Input)
Vue.component('zh-row', Row)
Vue.component('zh-col', Col)

new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: false,
        loading3: false,
    }
})