import "element-ui/lib/theme-chalk";
import "@/styles";
import "@/plugins/element-ui";

import Vue from "vue";

import Tag from "@/components/tag";

import App from "./App";
import router from "./router";

Vue.component(Tag.name, Tag);

Vue.config.errorHandler = function (err) {
  console.log("Oops, An exception occurred: ");
  console.error(err);
};

export default new Vue({
  el: "#app",
  router,
  render: (h) => h(App),
});
