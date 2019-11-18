// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import "@babel/polyfill";
import Vue from "vue";
import { sync } from "vuex-router-sync";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

import App from "./App.vue";
import router from "./router";
import store from "./vuex/store";
import "./registerServiceWorker";

/* custum color setting for 2021 */
Vue.use(Vuetify, {
  theme: {
    primary: {
      base: "#1f3c73",
      darken1: "#001646",
      lighten1: "#5165a1"
    },
    accent: "#8d6fac"
  }
});

sync(store, router);
Vue.config.productionTip = false;
console.log("hello");
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
}).$mount("#app");
