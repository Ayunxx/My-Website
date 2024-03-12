import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';
import Index from "../view/index.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Index',
        component: Index
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router;
