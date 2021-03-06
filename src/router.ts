import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './pages/Home.vue'

export type AppRouteNames = 'home'
| 'global-feed'
| 'my-feed'
| 'tag'
| 'article'
| 'create-article'
| 'edit-article'
| 'login'
| 'register'
| 'profile'
| 'profile-favorites'
| 'settings'

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { name: 'home', path: '/', component: Home },
    { name: 'global-feed', path: '/o2o', component: () => import('./pages/Articles.vue') },
    { name: 'my-feed', path: '/my-feeds', component: Home },
    { name: 'tag', path: '/tag/:tag', component: Home },
    { name: 'article', path: '/article/:slug', component: () => import('./pages/ArticlesDetail.vue') },
    { name: 'create-article', path: '/article/create', component: Home },
    { name: 'edit-article', path: '/article/:slug/edit', component: Home },
    { name: 'login', path: '/login', component: Home },
    { name: 'register', path: '/register', component: Home },
    { name: 'profile', path: '/profile/:username', component: Home },
    { name: 'profile-favorites', path: '/profile/:username/favorites', component: Home },
    { name: 'settings', path: '/settings', component: Home },
  ],
})
