import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'sass-loader'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'jquery/src/jquery.js';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '../src/assets/css/app.css'
import 'admin-lte/dist/css/adminlte.css'
import 'admin-lte/dist/js/adminlte.js'
import '@fortawesome/fontawesome-free/css/fontawesome.css'
import '@fortawesome/fontawesome-free/css/brands.css'
import '@fortawesome/fontawesome-free/css/regular.css'
import '@fortawesome/fontawesome-free/css/solid.css'
import {Form, HasError, AlertError} from 'vform'

window.Form = Form
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

import swal from 'sweetalert2'
import Swal from 'sweetalert2'
window.swal = swal

const toast = swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

const swalWithBootstrapButtons = swal.mixin({
  customClass: {
    confirmButton: 'btn btn-success',
    cancelButton: 'btn btn-danger'
  },
  buttonsStyling: false
})

window.swalWithBootstrapButtons = swalWithBootstrapButtons;
window.toast = toast

import VueProgressBar from 'vue-progressbar'

const options = {
  color: '#bffaf3',
  failedColor: '#874b4b',
  thickness: '5px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 200
  },
  autoRevert: true,
  location: 'top',
  inverse: false

}

Vue.use(VueProgressBar, options)



Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false

window.Fire = new Vue();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
