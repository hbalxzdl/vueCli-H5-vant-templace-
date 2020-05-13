// 拼接路径
const resolve = dir => require('path').join(__dirname, dir)
// 判断当前环境是否处于开发环境
const isDev=process.env.NODE_DEV === "development"

// const port = process.env.port || process.env.npm_config_port || 9528 // dev port

module.exports = {

    publicPath: './',
    outputDir: 'dist',
    lintOnSave: true,  //关闭每次保存都进行eslint检测

    // performance:{
    //     hints: process.env.NODE_ENV === 'development' ? false : 'warning'
    // },



    devServer:{
        overlay: {
            warnings: false,
            errors: false
        },
        proxy:{
            [process.env.VUE_APP_BASE_API]:{
                target:'http://731cs.com:7300/mock/5ea915a32dd1910c380f4a9b/example_copy',
                changeOrigin: true, //跨域
                pathRewrite: {
                    ['^' + process.env.VUE_APP_BASE_API]: ''
                }
            }
        },
        disableHostCheck: true
    },

    css: {
        loaderOptions: {
            // 设置 scss 公共变量文件
            sass: {
                prependData: `@import '~@/assets/style/public.scss';`
            },
            // css预设器配置项
            postcss: {
                plugins: [
                    require('postcss-px2rem')({
                        remUnit: 100
                    })
                ]
            },
            //开发环境模式下默认不开启提取 CSS
            // extract:process.env.NODE_ENV === 'production'
        },


    },


    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            //为生产环境修改配置...
            //1.去掉console
            config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
        } else {
            // 为开发环境修改配置...
        }
    },

    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src'))



        // svg
        const svgRule = config.module.rule('svg')
        svgRule.uses.clear()
        svgRule
            .include
            //include 表示哪些文件需要进行转换
            .add(resolve('src/assets/svg-icons/icons'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
            .end()

    }
}
