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
      title: "หน้าหลัก"
    }
  },
  {
    path: "/qr",
    name: "QRcode",
    component: loadView("QRCodeReader"),
    meta: {
      title: "QRCode Reader"
    }
  },
  {
    path: "/shop_detail",
    name: "ShopDetail",
    component: loadView("ShopDetail"),
    meta: {
      title: "ข้อมูลร้านค้า"
    }
  },
  {
    path: "*",
    redirect: "/"
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const customTitle = to.matched
    .slice()
    .reverse()
    .find(record => record.meta && record.meta.title);
  document.title = `${customTitle ? customTitle.meta.title : ""} - ใครชนะ?`;
  next();
});

export default router;
