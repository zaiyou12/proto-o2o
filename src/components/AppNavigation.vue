<template>
  <div class="sticky top-0 z-40 lg:z-50 w-full max-w-8xl mx-auto bg-white flex-none flex border-b border-gray-200">
    <div class="flex-none pl-4 sm:pl-6 xl:pl-8 flex items-center  lg:w-60 xl:w-72">
      <AppLink
        name="home"
        class="overflow-hidden w-10 md:w-auto font-sans font-bold text-2xl text-blue-900"
      >
        Proto
        <span class="sr-only">Prototype by Ex-Platform</span>
      </AppLink>
    </div>
    <div class="flex-auto px-4 sm:px-6 lg:mx-6 lg:px-0 xl:mx-8 h-18 flex items-center justify-between">
      <nav class="text-gray-600">
        <AppLink
          class="mr-5 hover:text-gray-900"
          active-class="active"
          name="global-feed"
        >
          Articles
        </AppLink>
        <AppLink
          class="mr-5 hover:text-gray-900"
          active-class="active"
          name="article"
          :params="{slug: '123'}"
        >
          Articles-detail
        </AppLink>
      </nav>
      <ul class="lg:w-64 pl-8 flex-shrink-0 flex items-center justify-end space-x-6">
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
    name: 'home',
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

// TODO: vue-tsc read `allNavLinks` and `displayStatus` as ComputedRef
ref: navLinks = computed(() => (allNavLinks as unknown as NavLink[]).filter(
  l => l.display === (displayStatus as unknown as string) || l.display === 'all',
))
</script>
