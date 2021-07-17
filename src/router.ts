import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './pages/Home.vue'

export type AppRouteNames = 'global-feed'
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
    { name: 'global-feed', path: '/', component: Home },
    { name: 'my-feed', path: '/my-feeds', component: Home },
    { name: 'tag', path: '/tag/:tag', component: Home },
    { name: 'article', path: '/article/:slug', component: Home },
    { name: 'create-article', path: '/article/create', component: Home },
    { name: 'edit-article', path: '/article/:slug/edit', component: Home },
    { name: 'login', path: '/login', component: Home },
    { name: 'register', path: '/register', component: Home },
    { name: 'profile', path: '/profile/:username', component: Home },
    { name: 'profile-favorites', path: '/profile/:username/favorites', component: Home },
    { name: 'settings', path: '/settings', component: Home },
  ],
})
