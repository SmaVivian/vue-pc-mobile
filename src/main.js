import Vue from 'vue'
import 'babel-polyfill'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import request from '@/utils/request'
// import { getCookieDecrypt } from '@/utils/util'


let isMobile = false
if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
  isMobile = true
} else {
  isMobile = false
}
// store.dispatch('TogglePlat', isMobile)
Vue.prototype._isMobile = isMobile
console.log(111, Vue.prototype._isMobile)

Vue.use(ElementUI)
Vue.prototype.$http = request

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
