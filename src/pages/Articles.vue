<template>
  <ArticleBanner detail="O2O application" />
  <button
    type="button"
    class="fixed z-50 bottom-4 right-4 w-16 h-16 rounded-full bg-gray-900 text-white block lg:hidden"
  >
    <span class="sr-only">Open site navigation</span>
    <svg
      width="24"
      height="24"
      fill="none"
      class="absolute top-1/2 left-1/2 -mt-3 -ml-3 transition duration-300 transform"
    >
      <path
        d="M4 8h16M4 16h16"
        stroke="currentColor"
        stroke-width="2"
        linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </button>
  <div class="w-full max-w-8xl mx-auto">
    <div class="lg:flex">
      <ArticleSidebar />
      <ArticleList :articles="articles" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import ArticleSidebar from 'src/components/ArticleSidebar.vue'
import ArticleBanner from 'src/components/ArticleBanner.vue'
import ArticleList from 'src/components/ArticleList.vue'

// TODO: temp value
ref: articles = ['1', '2', '3', '4', '5', '6']
</script>
