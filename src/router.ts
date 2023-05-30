import { createRouter, createWebHashHistory } from "vue-router";

const ContentAbout = () => import("./components/content/ContentAbout.vue");

const router = createRouter({
   history: createWebHashHistory(),
   routes: [
      { path: "/", redirect: "/about" },
      { name: "home", path: "/about", component: ContentAbout },

   ],
});

export default router;
