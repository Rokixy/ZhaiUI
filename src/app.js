import Vue from 'vue'
import Button from './button'
import ButtonGroup from './button-group'

Vue.component('zh-button', Button)
Vue.component('zh-button-group', ButtonGroup)

new Vue({
    el: '#app',
    data: {
        loading1: true,
        loading2: false,
        loading3: false,
    }
})

// 单元测试
import chai from 'chai'
import spies from 'chai-spies'

chai.use(spies)

const expect = chai.expect

try {
    {
        const Constructor = Vue.extend(Button)
        const button = new Constructor({
            propsData: {
                icon: 'setting'
            }
        })
        button.$mount()
        let useElement = button.$el.querySelector('use')
        let href = useElement.getAttribute('xlink:href')
        expect(href).to.eq('#i-setting')
        button.$el.remove()
        button.$destroy()
    }
    {
        const Constructor = Vue.extend(Button)
        const button = new Constructor({
            propsData: {
                icon: 'setting',
                loading: true
            }
        })
        button.$mount()
        let useElement = button.$el.querySelector('use')
        let href = useElement.getAttribute('xlink:href')
        expect(href).to.eq('#i-loading')
        button.$el.remove()
        button.$destroy()
    }
    {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Button)
        const button = new Constructor({
            propsData: {
                icon: 'setting',
            }
        })
        button.$mount(div)
        let svg = button.$el.querySelector('svg')
        let { order } = window.getComputedStyle(svg)
        expect(order).to.eq('1')
        button.$el.remove()
        button.$destroy()
    }
    {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Button)
        const button = new Constructor({
            propsData: {
                icon: 'setting',
                iconPosition: 'right'
            }
        })
        button.$mount(div)
        let svg = button.$el.querySelector('svg')
        let { order } = window.getComputedStyle(svg)
        expect(order).to.eq('2')
        button.$el.remove()
        button.$destroy()
    }
    {
        const Constructor = Vue.extend(Button)
        const button = new Constructor({
            propsData: {
                icon: 'setting',
            }
        })
        button.$mount()
        let spy = chai.spy(function () { })
        button.$on('click', spy)
        button.$el.click()
        expect(spy).to.have.been.called()
        button.$el.remove()
        button.$destroy()
    }
} catch (error) {
    window.errors = [error]
} finally {
    window.errors && window.errors.array.forEach(error => {
        console.error(error.message)
    });
}