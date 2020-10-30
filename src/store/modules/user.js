export default {
    namespaced: true,
    state: {
        // 用户信息
        userInfo: {}
    },

    actions: {
       
    /**
     * @description 设置用户数据
     */
      async set ({ state }, userInfo) {
        // store 赋值
        state.userInfo = userInfo
       
      },


    /**
     * @description 读取用户数据
     */

      async load ({ state }) {
        // store 赋值
        state.userInfo = userInfo
      }

    },
}
