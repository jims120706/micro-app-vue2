import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";

Vue.use(VueRouter);

const router = new VueRouter({
  base: window.__POWERED_BY_QIANKUN__ ? "#/micro-app-1" : "#/",
  routes
});

export default router;
