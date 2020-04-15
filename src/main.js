import Vue from 'vue';
import Portfolio from './Portfolio.vue';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(Portfolio),
}).$mount('#Portfolio');
