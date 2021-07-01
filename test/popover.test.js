const expect = chai.expect;
import Vue from 'vue'
import Popover from '../src/popover'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Popover', () => {
    it('存在.', () => {
        expect(Popover).to.exist
    })
    it('可以设置 position.', (done) => {
        Vue.component('zh-popover', Popover)
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
            <zh-popover position="left" ref="popover">
                <template slot="content">
                    <div>pop</div>
                </template>
                <button>click here</button>
            </zh-popover>
        `
        const vm = new Vue({ el: div })
        vm.$el.querySelector('button').click()
        vm.$nextTick(() => {
            const { contentWrapper } = vm.$refs.popover.$refs
            expect(contentWrapper.classList.contains('position-left')).to.be.true
            done()
        })
    })
    xit('可以设置 trigger.', () => {
        Vue.component('zh-popover', Popover)
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
            <zh-popover trigger="hover" ref="popover">
                <template slot="content">
                    <div>pop</div>
                </template>
                <button>click here</button>
            </zh-popover>
        `
        let event = new Event('mouseenter')
        vm.$el.dispatchEvent(event)
        vm.$nextTick(() => {
            const { contentWrapper } = vm.$refs.popover.$refs
            expect(contentWrapper).to.exist
            done()
        })
    })
})
