import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  beforeCreate() {
    this.$store.commit("initialiseStore");
  },
  render: (h) => h(App)
}).$mount("#app");
