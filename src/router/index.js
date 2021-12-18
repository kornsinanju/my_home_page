import { createWebHistory, createRouter } from "vue-router";
import Home from "../components/Main.vue";
import About from "../components/Projects.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    props: { count:0}
  },
  {
    path: "/home",
    name: "Intro",
    component: Home,
    props: { count:0}
  },
  {
    path: "/projects",
    name: "Projects",
    component: Home,
    props: { count:1}
  },
  {
    path: "/blogs",
    name: "Blogs",
    component: Home,
    props: { count:2}
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;