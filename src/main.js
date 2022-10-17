import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import '@babel/polyfill'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@fortawesome/fontawesome-free/css/all.css'
import VideoBackground from 'vue-responsive-video-background-player'

Vue.config.productionTip = false

Vue.prototype.$circleType = require('circletype')

Vue.component('video-background', VideoBackground)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
