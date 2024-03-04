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

// import { createRouter, createWebHashHistory } from 'vue-router'
// import Telegram from '../components/Telegram.vue'

// const routes = [
//   {
//     path: "/",
//     redirect: '/r2g2'
//   },
//   {
//     path: "/r2g2",
//     name: 'R2G2',
//     component: Telegram
//   },
// ];

// const router = createRouter({
//   history: createWebHashHistory(),
//   routes,
// });

// export default router;