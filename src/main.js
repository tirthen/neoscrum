import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Vuelidate from "vuelidate";

Vue.config.productionTip = false;

// Vue.use(BootstrapVue);
Vue.use(Vuelidate);
new Vue({
  router,
  render: (h) => h(App),
  validations: {},
}).$mount("#app");
