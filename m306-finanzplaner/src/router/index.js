import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import ToggleButton from "vue-js-toggle-button";
import loading from "vuejs-loading-screen";

Vue.use(loading, {
  bg: "#1e231f8c",
  icon: "fas fa-spinner",
  size: 5,
  icon_color: "white",
  slot: `
  <div>
    <h1 style="color: white; font-size:8vw"><i class="fas fa-spinner fa-spin"></i> Loading...</h1>
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
