<template>
  <aside class="fixed z-40 insert-0 flex-none h-full bg-black bg-opacity-25 w-full lg:bg-white lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 lg:w-60 xl:w-72 lg:block border-r border-gray-200">
    <div class="h-full overflow-y-auto scrolling-touch lg:h-auto lg:block lg:relative lg:sticky lg:bg-transparent overflow-hidden lg:top-18 bg-white mr-24 lg:mr-0">
      <div class="px-1 pt-6 overflow-y-auto font-medium text-base sm:px-3 xl:px-5 lg:text-sm pb-10 lg:pt-10 lg:pb-14 sticky?lg:h-(screen-18)">
        <h3 class="text-lg font-semibold text-gray-700 dark:text-white mb-6">
          조건 검색
        </h3><form>
          <div class="mb-6">
            <label
              class="text-gray-700 mb-4"
              for="category"
            >Category</label><input
              id="category"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
              type="text"
              placeholder="all"
            >
          </div>
          <div class="mb-6">
            <label
              class="text-gray-700 mb-4"
              for="place"
            >Place</label><input
              id="place"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
              type="text"
              placeholder="all"
            >
          </div>
          <div class="mb-6">
            <label
              class="text-gray-700 mb-4"
              for="price"
            >Price</label><input
              id="price"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
              type="number"
              placeholder="all"
            >
          </div>
          <div class="mb-6">
            <label
              class="text-gray-700 mb-4"
              for="time"
            >Time</label><input
              id="time"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
              type="date"
            >
          </div>
        </form>
      </div>
    </div>
  </aside>
</template>
