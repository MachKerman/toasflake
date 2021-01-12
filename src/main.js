import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import md5 from "md5";
import moment from "moment";
Vue.prototype.$md5 = md5;
Vue.prototype.$moment = moment;

import "@/theme/index.css";
import ElementUI from "element-ui";
Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
