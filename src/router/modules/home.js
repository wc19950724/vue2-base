import Layout from "@/layout";

export default [
  {
    path: "/index",
    name: "Index",
    redirect: "/home",
    component: Layout,
    children: [
      {
        path: "/home",
        name: "Home",
        meta: {
          title: "首页",
        },
        component: () => import("@/pages/home"),
      },
    ],
  },
];
