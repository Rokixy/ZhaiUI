import Vue from 'vue'
import Button from './button'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './Header'
import Content from './content'
import Sider from './sider'
import Footer from './footer'
import Toast from './toast'
import plugin from './plugin'
import Icon from './icon'
import Tabs from './tabs'
import TabsHead from './tabs-head'
import TabsBody from './tabs-body'
import TabsItem from './tabs-item'
import TabsContent from './tabs-content'
import Popover from './popover'
import Collapse from './collapse'
import CollapseItem from './collapse-item'

Vue.component('zh-button', Button)
Vue.component('zh-button-group', ButtonGroup)
Vue.component('zh-input', Input)
Vue.component('zh-row', Row)
Vue.component('zh-col', Col)
Vue.component('zh-layout', Layout)
Vue.component('zh-header', Header)
Vue.component('zh-content', Content)
Vue.component('zh-sider', Sider)
Vue.component('zh-footer', Footer)
Vue.component('zh-toast', Toast)
Vue.component('zh-icon', Icon)
Vue.component('zh-tabs', Tabs)
Vue.component('zh-tabs-head', TabsHead)
Vue.component('zh-tabs-body', TabsBody)
Vue.component('zh-tabs-item', TabsItem)
Vue.component('zh-tabs-content', TabsContent)
Vue.component('zh-popover', Popover)
Vue.component('zh-collapse', Collapse)
Vue.component('zh-collapse-item', CollapseItem)
Vue.use(plugin)

new Vue({
    el: '#app',
    data: {
        selected: ['2', '1'],
    },
    methods: {
        showToast1() {
            this.showToast('top')
        },
        showToast2() {
            this.showToast('middle')
        },
        showToast3() {
            this.showToast('bottom')
        },
        showToast(position) {
            let callback = () => { console.log('hi') }
            this.$toast('内容', {
                position,
                closeButton: {
                    text: '关闭',
                    callback
                },
                autoClose: false,
            })
        }
    }

})

// let closeButton = vm.$el.querySelector('.close')