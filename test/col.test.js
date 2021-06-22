const expect = chai.expect;
import Vue from 'vue'
import Col from '../src/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Col', () => {

    it('存在.', () => {
        expect(Col).to.exist
    })

    it('接收 span 属性', () => {
        const Constructor = Vue.extend(Col)
        const div = document.createElement('div')
        document.body.appendChild(div)
        const vm = new Constructor({
            propsData: {
                span: 1
            }
        }).$mount(div)
        const element = vm.$el
        expect(vm.$el.classList.contains('span-1')).to.eq(true)
        div.remove()
        vm.$destroy()
    })
    it('接收 offset 属性', () => {
        const Constructor = Vue.extend(Col)
        const div = document.createElement('div')
        document.body.appendChild(div)
        const vm = new Constructor({
            propsData: {
                offset: 1
            }
        }).$mount(div)
        const element = vm.$el
        expect(vm.$el.classList.contains('offset-1')).to.eq(true)
        div.remove()
        vm.$destroy()
    })
    it('接收 phone 属性', () => {
        const Constructor = Vue.extend(Col)
        const div = document.createElement('div')
        document.body.appendChild(div)
        const vm = new Constructor({
            propsData: {
                phone: { span: 1, offset: 3 }
            }
        }).$mount(div)
        const element = vm.$el
        expect(vm.$el.classList.contains('phone-span-1')).to.eq(true)
        expect(vm.$el.classList.contains('phone-offset-3')).to.eq(true)
        div.remove()
        vm.$destroy()
    })
    it('接收 ipad 属性', () => {
        const Constructor = Vue.extend(Col)
        const div = document.createElement('div')
        document.body.appendChild(div)
        const vm = new Constructor({
            propsData: {
                ipad: { span: 1, offset: 3 }
            }
        }).$mount(div)
        const element = vm.$el
        expect(vm.$el.classList.contains('ipad-span-1')).to.eq(true)
        expect(vm.$el.classList.contains('ipad-offset-3')).to.eq(true)
        div.remove()
        vm.$destroy()
    })
    it('接收 narrowPc 属性', () => {
        const Constructor = Vue.extend(Col)
        const div = document.createElement('div')
        document.body.appendChild(div)
        const vm = new Constructor({
            propsData: {
                narrowPc: { span: 1, offset: 3 }
            }
        }).$mount(div)
        const element = vm.$el
        expect(vm.$el.classList.contains('narrowPc-span-1')).to.eq(true)
        expect(vm.$el.classList.contains('narrowPc-offset-3')).to.eq(true)
        div.remove()
        vm.$destroy()
    })
    it('接收 widePc 属性', () => {
        const Constructor = Vue.extend(Col)
        const div = document.createElement('div')
        document.body.appendChild(div)
        const vm = new Constructor({
            propsData: {
                widePc: { span: 1, offset: 3 }
            }
        }).$mount(div)
        const element = vm.$el
        expect(vm.$el.classList.contains('widePc-span-1')).to.eq(true)
        expect(vm.$el.classList.contains('widePc-offset-3')).to.eq(true)
        div.remove()
        vm.$destroy()
    })
})