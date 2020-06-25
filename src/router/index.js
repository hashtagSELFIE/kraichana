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
    path: "/qr",
    name: "QRcode",
    component: loadView("qrcodeReader"),
    meta: {
      title: "qrcodeReader",
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
  document.title = `${customTitle ? customTitle.meta.title : ""}`;
  next();
});

export default router;
