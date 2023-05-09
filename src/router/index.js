import Vue from "vue";
import VueRouter from "vue-router";

import Layout from "@/layout";

import home from "./modules/home";
import table from "./modules/table";

Vue.use(VueRouter);

const dynamicRoutes = [...home, ...table];
const staticRoutes = [
  {
    path: "/",
    component: Layout,
    redirect: "/index",
  },
  {
    path: "/:w+",
    name: "404Page",
    redirect: "/",
  },
];

const routes = [...dynamicRoutes, ...staticRoutes];

const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        selector: to.hash,
        behavior: "smooth",
      };
    }
  },
});

export default router;
