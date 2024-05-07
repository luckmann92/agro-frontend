import { createRouter, createWebHistory } from 'vue-router'
// import { useProfile } from "../store/profile";
// import { nextTick } from "vue";
import routes from "./routes";

const router = createRouter({
    // history: createWebHistory(process.env.BASE_URL),
    history: createWebHistory(),
    routes
})

// router.afterEach((to, from) => {
//     nextTick(() => {
//         document.title = to.meta.title || 'Главная';
//     });
// });

// router.beforeEach(async (to) => {
//     const profileStore = useProfile()
//     if (to.meta.requiresAuth && !profileStore.isLoggedIn) return { name: 'auth' }
//     if (!to.meta.requiresAuth && profileStore.isLoggedIn) return { name: 'index' }
// })

export default router