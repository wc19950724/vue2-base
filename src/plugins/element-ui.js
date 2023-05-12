import {
  Aside,
  Button,
  Checkbox,
  Container,
  Header,
  Loading,
  Main,
  Message,
  Notification,
  Radio,
  Slider,
  Switch,
} from "element-ui";
import Vue from "vue";

// 全局按需导入的组件列表
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Button);
Vue.use(Radio);
Vue.use(Switch);
Vue.use(Slider);
Vue.use(Loading.directive);
Vue.prototype.$loading = Loading.service;
Vue.prototype.$message = Message;
Vue.prototype.$notify = Notification;
Vue.use(Checkbox);
