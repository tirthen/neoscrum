import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/Dashboard.vue";

const AddFeedBack = () => import("@/views/AddFeedBack");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Home.vue"),
    children: [
      {
        name: "Dashboard",
        path: "/",
        component: Dashboard,
      },
      {
        name: "Feedback",
        path: "/feedback",
        component: AddFeedBack,
      },
    ],
    beforeEnter: async (to, from, next) => {
      let token = await localStorage.getItem("token");
      if (token) {
        next();
      } else {
        next("/login");
      }
    },
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/Register.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
