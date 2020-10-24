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

    //暂时将cookie里是否存有token作为验证是否登录的条件
    const token = util.cookies.get('token')

    if (token && token !== 'undefined') {
        if (to.path === '/login'){
            //如果已登录，请重定向到主页
            next({ path: '/' })
            NProgress.done()
        }else {
            next()
        }


    } else {
        //没有登录的时候
        if (to.path === '/login'){
            next()
        }else {
            next({ name: 'login',  query: { redirect: to.fullPath } })
        }

        NProgress.done()

    }


})

router.afterEach(to => {
    // 进度条
    NProgress.done()
    // 更改标题
    util.title(to.meta.title)

})


export default router
