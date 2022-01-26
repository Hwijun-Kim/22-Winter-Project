import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../component/Home";
import SignIn from "../component/SignIn";

Vue.use(VueRouter);
const signIn = SignIn.template;
const home = Home.template;

const routes = [
  { path: "/", redirect: "/home" },
  { path: "/singIn", component: signIn },
  { path: "/home", component: home }
];

export default new VueRouter({
  routes // `routes: routes`의 줄임
});
