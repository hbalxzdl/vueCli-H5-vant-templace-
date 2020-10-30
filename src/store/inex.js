import Vue from 'vue'
import Vuex from 'vuex'



// import user from './modules/user'
// import account from './modules/account'

import  mobile from './stores'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        mobile
      }
})



