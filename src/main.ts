import Vue from 'vue'
import App from './App.vue'
import store from './store'
import vuetify from './plugins/vuetify';
import { makeServer } from './server';

if (process.env.NODE_ENV === 'development') {
  makeServer();
}
Vue.config.productionTip = false

new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
