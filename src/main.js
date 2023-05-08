import Vue from "vue";

import App from "./App.vue";
import router from "./router";

Vue.config.errorHandler = function (err) {
  console.log("Oops, An exception occurred: ");
  console.error(err);
};

export default new Vue({
  el: "#app",
  router,
  render: (h) => h(App),
});
