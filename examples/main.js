import Vue from "vue";
import App from "./App.vue";

import CityTable from "../packages/index";
Vue.use(CityTable);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
