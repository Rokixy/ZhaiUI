const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/row'
import Col from '../src/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {

    it('存在.', () => {
        expect(Row).to.exist
    })

    it('接收 gutter 属性', (done) => {
        Vue.component('zh-row', Row)
        Vue.component('zh-col', Col)
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
            <zh-row gutter="20">
                <zh-col span="12"></zh-col>
                <zh-col span="12"></zh-col>
            </zh-row>
        `

        const vm = new Vue({ el: div })
        setTimeout(() => {
            const row = vm.$el.querySelector('.row')
            expect(getComputedStyle(row).marginLeft).to.eq('-10px')
            expect(getComputedStyle(row).marginRight).to.eq('-10px')
            const cols = vm.$el.querySelectorAll('.col')
            expect(getComputedStyle(cols[0]).paddingRight).to.eq('10px')
            expect(getComputedStyle(cols[1]).paddingLeft).to.eq('10px')
            vm.$el.remove()
            vm.$destroy()
            done()
        })
    })
    it('接收 align 属性', () => {
        const Constructor = Vue.extend(Row)
        const div = document.createElement('div')
        document.body.appendChild(div)
        const vm = new Constructor({
            propsData: {
                align: 'right'
            }
        }).$mount(div)
        const element = vm.$el
        expect(getComputedStyle(element).justifyContent).to.eq('flex-end')
        div.remove()
        vm.$destroy()
    })

})