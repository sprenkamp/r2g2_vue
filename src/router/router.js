import { createRouter, createWebHashHistory } from 'vue-router'
import Telegram from '../components/Telegram.vue'

const routes = [
  {
    path: "/",
    name: 'Telegram',
    component: Telegram
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router
