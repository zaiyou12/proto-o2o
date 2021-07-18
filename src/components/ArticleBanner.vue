<template>
  <div class="bg-blue-900 shadow-inner text-white p-8">
    <div class="mx-auto px-4 text-center">
      <h1 class="text-4xml sm:text-6xl lg:text-7xl leading-none font-extrabold tracking-tight">
        Proto
      </h1>
      <p class="text-lg sm:text-2xl sm:leading-10">
        {{ props.detail }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  detail: string;
}>()
</script>
