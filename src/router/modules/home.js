export default [
  {
    path: "/index",
    name: "Home",
    meta: {
      title: "首页",
    },
    component: () => import("@/pages/home/index.vue"),
  },
];
