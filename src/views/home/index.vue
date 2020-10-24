<template>
    <div>
        <van-nav-bar
                title="首页"
                fixed
                @click-left="onClickLeft"
                @click-right="onClickRight"
        />

        <van-list
                v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad"
        >
            <van-cell v-for="item in list" :key="item" :title="item"/>
        </van-list>

        <div class="ceshi">ceshi </div>
    </div>
</template>

<script>  

    export default { 
       
        name: "index",
        data() {
            return {
                list: [],
                loading: false,
                finished: false,
            }
        },
        mounted() {
            console.log(this.$route)
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

            onClickLeft() {

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
