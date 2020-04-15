import Vue from 'vue';
import VueScrollmagic from 'vue-scrollmagic';
import Portfolio from './Portfolio.vue';

Vue.config.productionTip = false;

Vue.use(VueScrollmagic);

// this.$scrollmagic.handleScrollTo = function (target) {
//   TweenMax.to(window, 1.5, {
//     scrollTo: {
//       y: target,
//       autoKill: false
//     }
//   })
// }

new Vue({
  render: (h) => h(Portfolio),
}).$mount('#Portfolio');
