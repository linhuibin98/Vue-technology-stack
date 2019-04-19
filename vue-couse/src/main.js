// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Bus from './bus'
import Mock from './mock'
// import countTo from '@/components/count-to'
import RenderPage from '@/views/render-page'

Vue.config.productionTip = false;

Vue.prototype.$bus = Bus;


let list = [{name: 'lll'}, {name: 'bbb'}]

const getEle = (h) => {
  return list.map(item => h('li', {
      on: {
        // 'click': handleClick
      }
    }, item.name)
  )
}


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  /*
  render (h) {
    return h(countTo, {
      'class': {  // 类名定义，class为保留字，需要用引号, 和组件内class使用方法一样
        //
      },
      props: {
        endVal: 150
      },
      // domProps: {  // dom 属性的使用
      //   innerHTML: '123'
      // },
      on: {
        'animation-end': (val) => {
          console.log('animation end!')
        }
      },
      nativeOn: {  //非组件内的自定义事件，须使用 nativeOn绑定
        'click': () => {
          console.log('click');
        }
      },
      directives: [  // 自定义指令
        //
      ],
      slot: '', // 插槽, 作为插槽使用, 插槽名
      scopedSlots: {},
      key: '',
      ref: ''
    })
  },
  */

  /*
  // 嵌套子标签的使用方法
  render: h => h('div', [
    h('span', 111),
    h('span', 222)
  ]),
  */

  render: h => h('div', [
    h('ul', getEle(h))
  ]),
  template: '<App/>'
})
