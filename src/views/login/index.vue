<template>
    <div class="login-container">

        <van-form @submit="onSubmit"  class="login-form">
            <h3 class="title">欢迎登录</h3>
            <van-field
                    v-model="username"
                    name="username"
                    label="用户名"
                    placeholder="用户名"
                    :rules="[{ required: true, message: '请填写用户名' }]"
            />
            <van-field
                    v-model="password"
                    type="password"
                    name="password"
                    label="密码"
                    placeholder="密码"
                    :rules="[{ required: true, message: '请填写密码' }]"
            />
            <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit">
                    提交
                </van-button>
            </div>
        </van-form>

    </div>
</template>

<script>
    import Vue from 'vue'
    import { mapActions } from 'vuex'
    import {Form,Field,Button} from 'vant';
    Vue.use(Form, Field,Button)

    export default {
        components: {
            [Form.name]: Form,
            [Field.name]: Field,
            [Button.name]: Button,
        },
        data() {
            return {
                username: '',
                password: '',
            }
        },
        

        methods: {
            ...mapActions('mobile/account',['login']),
            // ...mapActions('mobile/user',['load']),
           

            onSubmit(values) {
                console.log('submit', values);
                // this.login(values).then(res=>{
                //     // 重定向对象不存在则返回顶层路径
                //     this.$router.replace(this.$route.query.redirect || '/')
                // })
              this.login()

            },
        }
    }
</script>

<style scoped lang="scss">
    .login-container{
        min-height:100%;
        width: 100%;

        .login-form{
            position: relative;
            max-width: 100%;
            padding: 160px 35px 0;
            margin: 0 auto;
            overflow: hidden;
            .title{
                font-size: 26px;
                margin: 0 auto 40px auto;
                text-align: center;
                font-weight: 700;
            }
        }
    }
</style>
