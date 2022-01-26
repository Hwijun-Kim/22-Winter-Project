import Vue from "vue";
import App from "./App.vue";
import routers from "./router/router";

new Vue({
  el: "#app",
  routers,
  render: h => h(App)
});
