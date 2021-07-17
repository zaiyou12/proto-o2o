<template>
  <div class="sticky top-0 z-40 lg:z-50 w-full max-w-8xl mx-auto bg-white flex-none flex">
    <div class="flex-none pl-4 sm:pl-6 xl:pl-8 flex items-center border-b border-gray-200 lg:border-b-0 lg:w-60 xl:w-72">
      <AppLink name="global-feed">
        Proto
      </AppLink>
      <ul>
        <li
          v-for="link in navLinks"
          :key="link.name"
        >
          <AppLink
            active-class="active"
            :name="link.name"
            :params="link.params"
          >
            <i v-if="link.icon" /> {{ link.title }}
          </AppLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { RouteParams } from 'vue-router'
import type { AppRouteNames } from 'src/router'
import { useUserStore } from 'src/store/user'

interface NavLink {
  name: AppRouteNames
  params?: Partial<RouteParams>
  title: string
  icon?: string
  display: 'all' | 'anonym' | 'authorized'
}

const userStore = useUserStore()
ref: displayStatus = computed(() => userStore.isAuthorized ? 'authorized' : 'anonym')

ref: allNavLinks = computed<NavLink[]>(() => [
  {
    name: 'global-feed',
    title: 'Home',
    display: 'all',
  },
  {
    name: 'login',
    title: 'Sign in',
    display: 'anonym',
  },
  {
    name: 'register',
    title: 'Sign up',
    display: 'anonym',
  },
  {
    name: 'create-article',
    title: 'New Post',
    display: 'authorized',
    icon: 'ion-compose',
  },
  {
    name: 'settings',
    title: 'Settings',
    display: 'authorized',
    icon: 'ion-gear-a',
  },
  {
    name: 'profile',
    params: { username: userStore.user?.username },
    title: userStore.user?.username || '',
    display: 'authorized',
  },
])

ref: navLinks = computed(() => allNavLinks.filter(
  l => l.display === displayStatus || l.display === 'all',
))
</script>
