import util from '@/libs/util.js'

export default{
    namespaced: true,

    actions:{

        /**
         * @description 登录
         * @param {Object} payload username {String} 用户账号
         * @param {Object} payload password {String} 密码
         * @param {Object} payload route {Object} 登录成功后定向的路由对象 任何 vue-router 支持的格式
         */
        login({ dispatch },{
            username = '',
            password = ''
        }={}){
            return new Promise(async (resolve, reject) =>{
                // 开始请求登录接口
                

                //设置token
               

                //设置 vuex 用户信息    
                // await dispatch('modules/user/set', { name: res.name })


                // 用户登录后从持久化数据加载一系列的设置
                await dispatch('load')
            })
        },

        /**
        * @description 注销用户
        */
        logout ({ commit, dispatch }, { confirm = false } = {}) {
            /**
             * @description 注销
             */
            async function logout () {
            // 删除cookie
            util.cookies.remove('token')
            // 清空 vuex 用户信息
            await dispatch('mobile/user/set', {}, { root: true })
            // 跳转路由
            router.push({ name: '' })
            }
            
        },

        
        /**
         * @description 用户登录后从持久化数据加载一系列的设置
         */
        async load ({ dispatch }) {
            // 加载用户名
            await dispatch('mobile/user/load', null, { root: true })
           
          }

    }
}
