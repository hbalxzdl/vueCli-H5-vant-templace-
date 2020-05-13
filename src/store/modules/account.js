import util from '@/libs/util.js'

export default{
    namespaced: true,

    actions:{
        login({ dispatch },{
            username = '',
            password = ''
        }={}){
            return new Promise(async (resolve, reject) =>{
                // 开始请求登录接口
                // 设置 cookie
                console.log(password)
                util.cookies.set('token', new Date().getTime()+'')
                // 设置 vuex 用户信息
                resolve (true)
            })
        }
    }
}
