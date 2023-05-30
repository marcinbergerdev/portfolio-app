import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import Router from "./router";

import BaseLink from "./card/BaseNavLink.vue";

const app = createApp(App);
app.use(Router);

app.component("BaseNavLink", BaseLink);
app.mount("#app");
