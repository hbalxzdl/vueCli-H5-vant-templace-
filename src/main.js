import Vue from 'vue'

import App from './App.vue'
import store from './store/inex'
import router from './router'
import i18n from './i18n'

Vue.config.productionTip = false

// svg 图标
import '@/assets/svg-icons'

// import '@/libs/rem.js'
import '@/plugin/vant.js'




new Vue({
  store,
  router,
  i18n,
  render: h => h(App),

}).$mount('#app')
