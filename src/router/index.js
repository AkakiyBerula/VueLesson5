import { createRouter, createWebHistory } from "vue-router";
import Products from "../components/Products.vue";
import ShowID from "../components/ShowID.vue"
import HelloWorld from "../components/HelloWorld.vue";
import FormEvent from "../components/FormEvent.vue"
import GenerateItems from "../components/GenerateItems.vue";
import Pagination from "../components/Pagination.vue";
import FilterList from "../components/FilterList.vue";

const routes = [
    { 
        path: '/',
        name: 'products',
        component: Products
    },
    {
        path: '/show-id/:id',
        name: 'show-id',
        component: ShowID
    },
    {
        path: '/hello-user',
        name: 'hello',
        component: HelloWorld,
    },
    {
        path: '/form',
        name: 'form',
        component: FormEvent
    },
    {
        path: '/generator',
        name: 'generator',
        component: GenerateItems
    },
    {
        path: '/list',
        name: 'list',
        component: Pagination,
        children: [
            {
                path: 'filter-list',
                name: 'filter-list',
                component: FilterList
            }
        ]
    }
]

const router = createRouter({
    linkActiveClass: 'active',
    history: createWebHistory(),
    routes
})

export default router