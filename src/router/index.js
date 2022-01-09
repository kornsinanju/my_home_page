import { createWebHistory, createRouter } from "vue-router";
// import Intro from "../components/Intro.vue";
// import Blogs from "../components/Blogs.vue";
// import Projects from "../components/Projects.vue";
// import Post from "../components/Post.vue";

const Intro = () => import("../components/Intro.vue");
const Blogs = () => import("../components/Blogs.vue");
const Projects = () => import("../components/Projects.vue");
const Post = () => import("../components/Post.vue");

const routes = [
  {
    path: "/",
    redirect:{name: "Intro"},
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
  scrollBehavior (to, from, savedPosition) {
    // if (to.hash) {
      // console.log('hola')
      window.scrollTo({ top: 0});
      return {
        x:0,
        y:0,
        behavior: 'smooth',
      }
    // }
  }
});

export default router;