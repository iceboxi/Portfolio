import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import Cookies from "js-cookie"

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import "@/css/main.scss"

Vue.use(BootstrapVue);
Vue.config.productionTip = false


if (Cookies.get('auth') === "true") {
  new Vue({
    render: h => h(App),
  }).$mount('#app')
} else {
  location.href = "login.html";
}