import Vue from 'vue'
import App from '@/components/App.vue'
import router from '@/router'
import '../dist/allComponents'
import '../dist/allPages'

Vue.config.productionTip = false
Vue.prototype.$feComponents = process.env.COMPONENTS_BASEPATH
Vue.prototype.$fePages = process.env.PAGES_BASEPATH

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
  .$on('titleChanged', value => {
    document.title = value + ' - ic-blueprint'
  })
