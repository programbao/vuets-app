import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "../views/layout/Index.vue";
// import App from "@/App.vue";
Vue.use(VueRouter);

/**
 * hidden: true  如果hidden为true则在左侧菜单栏展示，否者不显示
 * name: 'router-name'  路由名称，必须填写
 * meta: {
 *  title: 'title'            对应路由在左侧菜单栏的标题名称
 *  icon: 'icon-class'        对应路由在左侧菜单栏的图标样式，样式使用fontawesome 图标库
 *  用fontawesome图标库
 * }
 *
 * */

// 为了能够是路由被外部获取到，所以在创一个路由
export const asyncRouterMap = [
  // 首页路由
  {
    path: "/",
    name: "dashboard",
    component: Layout, // 记：这里的组件是跳转路由时，基于这个页面的进行跳转
    hidden: true,
    redirect: "/home",
    // 下面是显示的路由页面
    children: [
      {
        path: "/home",
        name: "home",
        meta: { title: "首页", icon: "fa fa-home" },
        component: () => import("@/views/Home.vue")
      }
    ]
  },
  // 数据管理路由
  {
    path: "/dataManage",
    name: "dataManage",
    hidden: true,
    meta: { title: "数据管理", icon: "fa fa-database" },
    component: Layout,
    redirect: "/tableData",
    children: [
      {
        path: "/tableData",
        name: "tableData",
        meta: { title: "表格管理", icon: "fa fa-table" },
        component: () => import("@/views/DataManage/TableData.vue")
      },
      {
        path: "/chartsData",
        name: "chartsData",
        meta: { title: "图标管理", icon: "fa fa-bar-chart" },
        component: () => import("@/views/DataManage/ChartsData.vue")
      },
      {
        path: "/formData",
        name: "formData",
        meta: { title: "表单管理", icon: "fa fa-file-text-o" },
        component: () => import("@/views/DataManage/FormData.vue")
      }
    ]
  },
  // 用户路由
  {
    path: "/userManage",
    name: "userManage",
    hidden: true,
    component: Layout,
    redirect: "/accountData",
    children: [
      {
        path: "/accountData",
        name: "accountData",
        meta: { title: "账户管理", icon: "fa fa-user-plus" },
        component: () => import("@/views/UserManage/AccountData.vue")
      }
    ]
  },
  // 登录过后都可以访问到个人中心，所以不过什么路由，如果点击了个人中心就直接显示个人中心的路由，所以要单独写出来
  {
    path: "/user",
    component: Layout,
    hidden: false,
    redirect: "/userInfo",
    children: [
      {
        path: "/userInfo",
        name: "userInfo",
        meta: { title: "个人中心" },
        component: () => import("@/views/UserManage/UserInfo.vue")
      }
    ]
  },
  // 404 路由
  {
    path: "/404",
    name: "404",
    hidden: false,
    meta: { title: "404" },
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
    hidden: false,
    meta: { title: "系统登录" },
    component: () => import("@/views/Login/Login.vue")
  },
  // 密码页面路由
  {
    path: "/password",
    name: "Password",
    hidden: false,
    meta: { title: "找回密码" },
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
