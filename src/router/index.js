import { createRouter, createWebHistory } from "vue-router";
import Products from "../components/Products.vue";
import ShowID from "../components/ShowID.vue"
import HelloWorld from "../components/HelloWorld.vue";
import FormEvent from "../components/FormEvent.vue"
import GenerateItems from "../components/GenerateItems.vue";
import Pagination from "../components/Pagination.vue";
import FilterList from "../components/FilterList.vue";
import Login from "../components/Login.vue"

const routes = [
    { 
        path: '/',
        name: 'products',
        component: Products,
        meta: {
            message: messagePattern('products')
        }
    },
    {
        path: '/show-id/:id',
        name: 'show-id',
        component: ShowID,
        meta: {
            message: messagePattern('show-id')
        }
    },
    {
        path: '/hello-user',
        name: 'hello',
        component: HelloWorld,
        meta: {
            message: messagePattern('hello')
        }
    },
    {
        path: '/form',
        name: 'form',
        component: FormEvent,
        meta: {
            message: messagePattern('form')
        }
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            message: messagePattern('login')
        }
    },
    {
        path: '/generator',
        name: 'generator',
        component: GenerateItems,
        meta: {
            message: messagePattern('generator')
        }
    },
    {
        path: '/list',
        name: 'list',
        component: Pagination,
        meta: { requiresAuth: true },
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

router.beforeEach((to, from, next) => {
    document.title = to.meta.title || 'My App';


    if (to.matched.some(record => record.meta.requiresAuth)) {
      if (!isLoggedIn()) {
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        });
      } else {
        next();
      }
    } else {
      next();
    }
});

function messagePattern(data) {
    return 'Була відкрита сторінка ' + data + '!' 
}

function isLoggedIn() {
    return localStorage.getItem('loggedIn') === 'true';
}

export default router