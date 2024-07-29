import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/products',
    component: () => import('../views/ProductCategory.vue')
  },
  {
    path: '/product/:productId',
    component: () => import('../views/UserProduct.vue')
  },
  {
    path: '/cart',
    component: () => import('../views/UserCart.vue')
  },
  {
    path: '/fillin',
    component: () => import('../views/CartFill.vue')
  },
  {
    path: '/checkout/:orderId',
    component: () => import('../views/UserCheckout.vue')
  },
  {
    path: '/login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/dashboard',
    component: () => import('../views/DashBoard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/ProductsView.vue')
      },
      {
        path: 'orders',
        component: () => import('../views/OrdersView.vue')
      },
      {
        path: 'coupons',
        component: () => import('../views/CouponsView.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes
})

export default router
