import { createRouter, createWebHistory } from "vue-router";

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
    name: "signup",
    component: () => import("../views/Signup"),
  },
  {
    path: "/login",
    name: "login",
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

export default router;
