export default {
    namespaced: true,
    state: {
        // 用户信息
        userInfo: {user:1}
    },

    actions: {
        getInfo({state, commit}) {
            return new Promise(resolve => {
                resolve(true)
                commit('SET_USERINFO', {name: 'pengjin'})
            })
        }
    },


    mutations: {
        SET_USERINFO: (state, userInfo) => {
            state.userInfo = userInfo
        }
    }
}
