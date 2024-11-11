import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/DashBoard.vue'),
    children: [
      {
        path: '/',
        component: () => import('../views/HomeView.vue')
      },
      {
        path: 'products',
        component: () => import('../views/Front/ProductCategory.vue')
      },
      {
        path: 'product/:productId',
        component: () => import('../views/Front/ProductDescription.vue')
      },
      {
        path: 'favorite',
        component: () => import('../views/Front/MyFavorite.vue')
      },
      {
        path: 'cart',
        component: () => import('../views/Front/UserCart.vue')
      },
      {
        path: 'fillin',
        component: () => import('../views/Front/CartFill.vue')
      },
      {
        path: 'checkout/:orderId',
        component: () => import('../views/Front/UserCheckout.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('../views/Back/LoginView.vue')
  },
  {
    path: '/managecenter',
    component: () => import('../views/ManageCenter.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/Back/ProductsView.vue')
      },
      {
        path: 'orders',
        component: () => import('../views/Back/OrdersView.vue')
      },
      {
        path: 'coupons',
        component: () => import('../views/Back/CouponsView.vue')
      }
    ]
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes
})

export default router
