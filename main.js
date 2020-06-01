import Vue from 'vue'
import App from './App'

import page1 from './pages/index/index.vue'
Vue.component('page1',page1)

import page2 from './pages/find/find.vue'
Vue.component('page2',page2)

import page3 from './pages/cart/cart.vue'
Vue.component('page3',page3)

import page4 from './pages/profile/profile.vue'
Vue.component('page4',page4)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
