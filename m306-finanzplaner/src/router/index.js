import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import ToggleButton from "vue-js-toggle-button";
import loading from "vuejs-loading-screen";

Vue.use(loading, {
  bg: "#2f3255ad",
  icon: "fas fa-spinner",
  size: 5,
  icon_color: "#ffffff",
  slot: `
  <div>
    <h1><i class="fas fa-spinner fa-spin"></i> Loading...</h1>
  </div>
`
});

Vue.use(ToggleButton);
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    }
  ]
});
