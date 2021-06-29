const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsHead from '../src/tabs-head'
import TabsBody from '../src/tabs-body'
import TabsItem from '../src/tabs-item'
import TabsContent from '../src/tabs-content'

Vue.component('zh-tabs', Tabs)
Vue.component('zh-tabs-head', TabsHead)
Vue.component('zh-tabs-body', TabsBody)
Vue.component('zh-tabs-item', TabsItem)
Vue.component('zh-tabs-content', TabsContent)
Vue.config.productionTip = false
Vue.config.devtools = false

describe('TabsItem', () => {

    it('存在.', () => {
        expect(TabsItem).to.exist
    })

    it('接收 name 属性', () => {
        const Constructor = Vue.extend(TabsItem)
        const vm = new Constructor({
            propsData: {
                name: 'abc'
            }
        }).$mount()
        expect(vm.$el.getAttribute('data-name')).to.eq('abc')
        vm.$destroy()
    })

    it('接收 disabled 属性', () => {
        const Constructor = Vue.extend(TabsItem)
        const vm = new Constructor({
            propsData: {
                disabled: true
            }
        }).$mount()
        expect(vm.$el.classList.contains('disabled')).to.be.true
        const callback = sinon.fake()
        vm.$on('click', callback)
        vm.$el.click()
        expect(callback).to.have.not.been.called
        vm.$destroy()
    })
})
