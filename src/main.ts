import { createApp } from "vue";
import { createPinia } from 'pinia'
import "./style.css";
import App from "./App.vue";
import Router from "./router";

import BaseLink from "./card/BaseNavLink.vue";
const pinia = createPinia();
const app = createApp(App);


app.use(pinia)
app.use(Router);

app.component("BaseNavLink", BaseLink);
app.mount("#app");
