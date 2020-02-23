import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "../views/layout/Index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "layout",
    component: Layout
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login/Login.vue")
  },
  {
    path: "/password",
    name: "Password",
    component: () => import("@/views/Login/Password.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
// 请求拦截
router.beforeEach((to: any, form: any, next: any) => {
  const isLogin = localStorage.tsToken ? true : false;
  if (to.path == "/login" || to.path == "/password") {
    next();
  } else {
    isLogin ? next() : next("/login");
  }
});

export default router;
