<template>
  <ArticleBanner detail="articles with filter" />
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
      <ArticlesSidebar />
      <ArticlesList :articles="articles" />
      <!-- <Suspense>
        <template #default>
          <ArticlesList :articles="articles" />
        </template>
        <template #fallback>
          <div class="w-full">
            Article is downloading...
          </div>
        </template>
      </Suspense> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import ArticlesList from 'src/components/ArticlesList.vue'
import ArticleBanner from 'src/components/ArticleBanner.vue'
import ArticlesSidebar from 'src/components/ArticlesSidebar.vue'

ref: articles = ['1', '2', '3', '4', '5', '6']
// import { useArticles } from 'src/services/article/useArticles'

// const {
//   fetchArticles,
//   articlesDownloading,
//   articlesCount,
//   articles,
//   updateArticle,
//   page,
//   changePage,
//   tag,
//   username,
// } = useArticles()

// await fetchArticles()
</script>
