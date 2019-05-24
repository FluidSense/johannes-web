import Vue from 'vue'
import App from './App.vue'
import VueScrollTo from 'vue-scrollto';
import VueWaypoint from 'vue-waypoint';

Vue.config.productionTip = false

Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
});

Vue.use(VueWaypoint);

new Vue({
  render: h => h(App),
}).$mount('#app')