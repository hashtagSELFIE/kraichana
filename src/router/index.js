import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

function loadView(view) {
  return () => import(`../views/${view}.vue`);
}

const routes = [
  {
    path: "/",
    name: "Home",
    component: loadView("Home"),
    meta: {
      title: "Home",
    },
  },
  {
    path: "/about",
    name: "About",
    component: loadView("About"),
    meta: {
      title: "About",
    },
  },
  {
    path: "*",
    redirect: "/",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const customTitle = to.matched
    .slice()
    .reverse()
    .find((record) => record.meta && record.meta.title);
  document.title = `E-choice - ${customTitle ? customTitle.meta.title : ""}`;
  next();
});

export default router;
