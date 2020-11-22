import { createRouter, createWebHistory } from "vue-router";
import store from "../store/index";
// const routes = [
//   {
//     path: "/",
//     component: Signup,
//   },
//   {
//     path: "/login",
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ "../views/Login"),
//   },
// ];

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home"),
  },
  {
    path: "/posts",
    name: "posts",
    meta: { requiresAuth: true },
    component: () => import("../views/Posts"),
  },
  {
    path: "/register",
    name: "register",
    meta: { guest: true },
    component: () => import("../views/Register"),
  },
  {
    path: "/login",
    name: "login",
    meta: { guest: true },
    component: () => import("../views/Login"),
  },
  {
    path: "/forgot-password",
    name: "forgot-password",
    component: () => import("../views/ForgotPassword"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (store.getters.isAuthenticated) {
      next();
      return;
    }
    next("/login");
  } else {
    next();
  }
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.guest)) {
    if (store.getters.isAuthenticated) {
      next("/posts");
      return;
    }
    next();
  } else {
    next();
  }
});

export default router;
