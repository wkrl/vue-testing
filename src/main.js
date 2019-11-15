import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import TextHighlight from 'vue-text-highlight';
import '@/assets/css/tailwind.css'
 
Vue.config.productionTip = false
Vue.component('text-highlight', TextHighlight);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
