<template>
    <svg class="svg-icon" aria-hidden="true">
        <use :xlink:href="iconName"></use>
    </svg>
</template>

<script>
    export default {
        name: "Icon-svg",
        props: {
            iconClass: {
                type: String,
                required: true
            }
        },
        computed:{
            iconName() {
                return `#icon-${this.iconClass}`
            }
        },
        mounted() {
            console.log(this.iconClass)
        }
    }
</script>

<style scoped>
    .svg-icon {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
</style>
