<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import util from '@/libs/util'
export default {
  name: 'App',
  watch: {
    '$i18n.locale': 'i18nHandle'
  },
  created () {
    this.i18nHandle(this.$i18n.locale)
  },
  methods: {
    i18nHandle (val, oldVal) {
      util.cookies.set('lang', val)
      document.querySelector('html').setAttribute('lang', val)
      let message = `当前语言：${this.$t('_name')} [ ${this.$i18n.locale} ]`
      console.log(message)
    }
  }
}
</script>
<style lang="scss">

    @import "@/assets/style/public-class.scss";

</style>


