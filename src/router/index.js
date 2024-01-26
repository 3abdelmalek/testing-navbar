import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
        { path: "/", component: () => import("../components/Home.vue") },
        { path: "/about", component: () => import("../components/About.vue") },
      ],
});

export default router;
