<template>
    <div class="hello">
        <h1>{{ msg }}</h1>

        <div class="container">
            <div class="child"></div>
        </div>

        <svg-icon icon-class="add"/>


    </div>
</template>

<script>


    import {mock} from "@/api/mock";
    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        },

        async mounted() {
            console.log('-------------------------------')
            console.log(process.env)

            let {data}=await mock()
          var object1 = {}
          var foo = object1.foo ?? "default"; // "default"
          console.log(foo)
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

    .container {
        @extend %flex-center-row;

        height: 100px;

        .child {
            width: 100px;
            height: 100px;
            /*background: red;*/
        }

    }

</style>
