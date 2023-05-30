import { createRouter, createWebHashHistory } from "vue-router";

const ContentAbout = () => import("./components/content/ContentAbout.vue");
const ContentProjects = () =>
   import("./components/content/ContentProjects.vue");
const ContentContact = () =>
   import("./components/content/ContentContact.vue");

const router = createRouter({
   history: createWebHashHistory(),
   routes: [
      { path: "/", redirect: "/about" },
      { name: "home", path: "/about", component: ContentAbout },
      { name: "projects", path: "/projects", component: ContentProjects },
      { name: "contact", path: "/contact", component: ContentContact },
   ],
});

export default router;
