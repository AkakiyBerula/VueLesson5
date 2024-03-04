import { createRouter, createWebHistory } from "vue-router";
import Products from "../components/Products.vue";
import ShowID from "../components/ShowID.vue"
import HelloWorld from "../components/HelloWorld.vue";
import FormEvent from "../components/FormEvent.vue"
import GenerateItems from "../components/GenerateItems.vue";
import Pagination from "../components/Pagination.vue";
import FilterList from "../components/FilterList.vue";
import Login from "../components/Login.vue";
import NotFound from "../components/NotFound.vue";
import AdminList from "../components/AdminList.vue"

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
        props: true,
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
        path: '/admin-list',
        name: 'admin-list',
        component: AdminList,
        meta: { requiresAdmin: true }
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
    },
    {
        path: "/not-found",
        name: "not-found",
        component: NotFound
    }
]

const router = createRouter({
    linkActiveClass: 'active',
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth || record.meta.requiresAdmin)) {
      if (to.meta.requiresAuth && !isLoggedIn()) {
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        });
      } else if (to.meta.requiresAdmin && !isAdminRole()) {
        next({
            path: '/not-found',
            query: { redirect: to.fullPath }
        });
      } else {
        next();
      }
    } else {
      next();
    }
});


router.afterEach((to, from) => {
    console.log("Перехід нас сторінку ", to.name, " була виконано успішно(afterEach)!")
});

function messagePattern(data) {
    return 'Була відкрита сторінка ' + data + '!' 
}

function isLoggedIn() {
    return localStorage.getItem('loggedIn') === 'true';
}

function isAdminRole() {
    return localStorage.getItem('isAdmin') === 'Admin';
}

export default router