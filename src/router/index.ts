import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "../views/layout/Index.vue";
// import App from "@/App.vue";
Vue.use(VueRouter);
// 为了能够是路由被外部获取到，所以在创一个路由
export const asyncRouterMap = [
  // 首页路由
  {
    path: "/",
    name: "dashboard",
    component: Layout, // 记：这里的组件是跳转路由时，基于这个页面的进行跳转
    redirect: "/home",
    // 下面是显示的路由页面
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("@/views/Home.vue")
      }
    ]
  },
  // 数据路由
  {
    path: "/dataManage",
    name: "dataManage",
    component: Layout,
    redirect: "/tableData",
    children: [
      {
        path: "/tableData",
        name: "tableData",
        component: () => import("@/views/DataManage/TableData.vue")
      },
      {
        path: "/chartsData",
        name: "chartsData",
        component: () => import("@/views/DataManage/ChartsData.vue")
      },
      {
        path: "/formData",
        name: "formData",
        component: () => import("@/views/DataManage/FormData.vue")
      }
    ]
  },
  // 用户路由
  {
    path: "/userManage",
    name: "userManage",
    component: Layout,
    redirect: "/accountData",
    children: [
      {
        path: "/accountData",
        name: "accountData",
        component: () => import("@/views/UserManage/AccountData.vue")
      }
    ]
  },
  // 登录过后都可以访问到个人中心，所以不过什么路由，如果点击了个人中心就直接显示个人中心的路由，所以要单独写出来
  {
    path: "/user",
    component: Layout,
    redirect: "/userInfo",
    children: [
      {
        path: "/userInfo",
        name: "userInfo",
        component: () => import("@/views/UserManage/UserInfo.vue")
      }
    ]
  },
  // 404 路由
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/404.vue")
  },
  {
    path: "*", //匹配所有的路由，如果没有上面的路由的话，就跳转到404路由
    redirect: "/404"
  },
  // 登录路由
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login/Login.vue")
  },
  // 密码页面路由
  {
    path: "/password",
    name: "Password",
    component: () => import("@/views/Login/Password.vue")
  }
];

// 挂载路由
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: asyncRouterMap
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
