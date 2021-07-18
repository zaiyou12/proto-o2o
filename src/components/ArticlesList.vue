<template>
  <section class="text-gray-600 w-full">
    <div class="container px-5 py-12 mx-auto">
      <div class="divide-y-2 divide-gray-100">
        <article
          v-for="article in props.articles"
          :key="article"
          class="py-8 flex flex-wrap md:flex-nowrap"
        >
          <div class="md:flex-grow">
            <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">
              Bitters hashtag waistcoat fashion axe chia unicorn
            </h2>
            <p class="leading-relaxed">
              Date: 28th Jan. ~ 30th. Jan
            </p>
            <p class="leading-relaxed">
              Place: Ipanguacu, Brazil
            </p>
            <AppLink
              name="home"
              class="text-indigo-500 inline-flex items-center mt-4"
            >
              Learn More
              <svg
                class="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14" /><path d="M12 5l7 7-7 7" />
              </svg>
            </AppLink>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const props = defineProps<{
  articles: string[];
}>()
</script>
