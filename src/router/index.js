import { createRouter, createWebHistory } from "vue-router";
import Products from "../components/Products.vue";
import HelloWorld from "../components/HelloWorld.vue";
import FormEvent from "../components/FormEvent.vue"
import GenerateItems from "../components/GenerateItems.vue"

const routes = [
    { 
        path: '/', 
        component: Products
    },
    {
        path: '/hello-user',
        component: HelloWorld
    },
    {
        path: '/form',
        component: FormEvent
    },
    {
        path: '/generator',
        component: GenerateItems
    }
]

const router = createRouter({
    linkActiveClass: 'active',
    history: createWebHistory(),
    routes
})

export default router