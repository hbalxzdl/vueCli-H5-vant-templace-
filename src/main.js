import Vue from 'vue'

import App from './App.vue'
import store from './store/inex'
import router from './router'

Vue.config.productionTip = false

// svg 图标
import '@/assets/svg-icons'

import '@/libs/rem.js'


new Vue({
  store,
  router,
  render: h => h(App),

}).$mount('#app')
