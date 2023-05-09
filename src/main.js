import "element-ui/lib/theme-chalk/index.css";

import { Button } from "element-ui";
import Vue from "vue";

import App from "./App.vue";
import router from "./router";

Vue.use(Button);

Vue.config.errorHandler = function (err) {
  console.log("Oops, An exception occurred: ");
  console.error(err);
};

export default new Vue({
  el: "#app",
  router,
  render: (h) => h(App),
});
