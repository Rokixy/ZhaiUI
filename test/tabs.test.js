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

describe('Tabs', () => {

    it('存在.', () => {
        expect(Tabs).to.exist
    })

    it('接收 selected 属性', (done) => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
            <zh-tabs selected="tab2">
                <zh-tabs-head>
                    <zh-tabs-item name="tab1" class="tab1"> tab1 </zh-tabs-item>
                    <zh-tabs-item name="tab2" class="tab2"> tab2 </zh-tabs-item>
                    <zh-tabs-item name="tab3" class="tab3"> tab3 </zh-tabs-item>
                </zh-tabs-head>
                <zh-tabs-body>
                    <zh-tabs-content name="tab1"> content1 </zh-tabs-content>
                    <zh-tabs-content name="tab2"> content2 </zh-tabs-content>
                    <zh-tabs-content name="tab3"> content3 </zh-tabs-content>
                </zh-tabs-body>
            </zh-tabs>
        `

        const vm = new Vue({ el: div })
        vm.$nextTick(() => {
            let selected = vm.$el.querySelector('.tabs-item[data-name="tab2"]')
            expect(selected.classList.contains('active')).to.be.true
            done()
        })
    })

    it('接收 direct 属性', () => { })

})