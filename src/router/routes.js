

const routes =[
    {
        path: '/',
        name:'home',
        // redirect: '/index',
        meta:{ title:'首页'},
        component: () => import('@/views/home/index'),
    },


    {
        path: '/login',
        name:'login',
        meta:{ title:'登录'},
        component: () => import('@/views/login/index'),
    },


]

export default routes
