import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'popper.js';
import 'jquery';

import VueRouter from 'vue-router'
import {router} from './router';

Vue.use(VueRouter);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
