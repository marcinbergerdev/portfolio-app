import { createRouter, createWebHashHistory } from "vue-router";
import { useToggleMenu } from "./store/ToggleMenu";

const ContentAbout = () => import("./components/content/ContentAbout.vue");
const ContentProjects = () =>
   import("./components/content/projects/ContentProjects.vue");
const ContentContact = () => import("./components/content/ContentContact.vue");

const router = createRouter({
   history: createWebHashHistory(),
   routes: [
      { path: "/", redirect: "/about" },
      { name: "home", path: "/about", component: ContentAbout },
      { name: "projects", path: "/projects", component: ContentProjects },
      { name: "contact", path: "/contact", component: ContentContact },
   ],
   scrollBehavior() {
      const routContainer = document.querySelector(".content-container");
      routContainer?.scrollTo({ top: 0 });
   },
});

router.beforeEach((__, to, next) => {
   const menu = useToggleMenu();

   if (!!to.path && innerWidth <= 768) menu.closeMenuHandler();
   return next();
});

export default router;
