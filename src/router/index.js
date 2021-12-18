import { createWebHistory, createRouter } from "vue-router";
import Intro from "../components/Intro.vue";
import Blogs from "../components/Blogs.vue";
import Projects from "../components/Projects.vue";
import Post from "../components/Post.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Intro,
  },
  {
    path: "/home",
    name: "Intro",
    component: Intro,
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
  },
  {
    path: "/blogs",
    name: "Blogs",
    component: Blogs,
  },
  {
    path: '/blogs/:id',
    name: 'Posts',
    component: Post
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;