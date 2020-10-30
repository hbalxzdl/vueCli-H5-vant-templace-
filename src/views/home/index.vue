<template>
    <div>
        <van-button type="primary" @click='onChange'>{{$t('_name')}}</van-button>
    </div>
</template>

<script>  
    import localeMixin from '@/locales/mixin.js'
    export default { 
        name: "index",
        mixins: [
            localeMixin
        ],
        data() {
            return {
                list: [],
                loading: false,
                finished: false,
            }
        },
       
        methods: {
            onLoad() {
                setTimeout(() => {
                    for (let i = 0; i < 10; i++) {
                        this.list.push(this.list.length + 1);
                    }

                    // 加载状态结束
                    this.loading = false;

                    // 数据全部加载完成
                    if (this.list.length >= 40) {
                        this.finished = true;
                    }
                }, 1000);
            },

            onChange() {
                this.finished=!this.finished  
                this.onChangeLocale(this.finished ?'en-US':'zh-chs')
                console.log(this.$languages)
            },
            onClickRight() {

            }
        }
    }
</script>

<style lang="scss" scoped>

    ::v-deep {
        .van-nav-bar__title {
            @include scw(17PX, #333333, bold);
        }
        .van-list{
            margin-top: 46px;
        }
    }

    .ceshi{
        width: 30px;
        height: 30px;
        background: red;
    }

</style>
