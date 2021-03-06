import Vue from 'vue'
import VueRouter from 'vue-router'
import util from '@/libs/util.js'

// 进度条
import NProgress from "nprogress";
import 'nprogress/nprogress.css'

NProgress.configure({showSpinner: false})


// 路由数据
import routes from './routes'

Vue.use(VueRouter)

// 导出路由 在 main.js 里使用
const router = new VueRouter({
    routes,
    scrollBehavior: () => ({y: 0}),
})


/**
 * 路由拦截
 * 权限验证
 */
router.beforeEach(async (to, from, next) => {
    // 进度条
    NProgress.start()
    
    // 验证当前路由所有的匹配中是否需要有登录验证的
    if (to.matched.some(r => r.meta.auth)) {
        // 这里暂时将cookie里是否存有token作为验证是否登录的条件
        const token = util.cookies.get('token')
        if (token && token !== 'undefined') {
          next()
        } else {
          // 没有登录的时候跳转到登录界面
          // 携带上登陆成功之后需要跳转的页面完整路径
          next({
            name: 'login',
            query: {
              redirect: to.fullPath
            }
          })

          NProgress.done()
        }
      } else {
        // 不需要身份校验 直接通过
        next()
      }

})

router.afterEach(to => {
    // 进度条
    NProgress.done()
    // 更改标题
    util.title(to.meta.title)

})


export default router
