<template>
  <div>
    <div class="bg-white">
      <div>
        <div class="relative z-40 lg:hidden" role="dialog" aria-modal="true" v-if="displayFilter">
          <div class="fixed inset-0 bg-black bg-opacity-25"></div>
          <div class="fixed inset-0 z-40 flex">
            <div
              class="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
              <div class="flex items-center justify-between px-4 border-b pb-4 mb-4">
                <h2 class="text-lg font-medium text-gray-900 ">Filters</h2>
                <button type="button" @click="handleDisplayFilter()"
                  class="-mr-2 flex h-10 w-10 items-center justify-center p-2 text-gray-400 hover:text-gray-500">
                  <span class="sr-only">Close menu</span>
                  <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                    aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <!-- Filters -->
              <ProductsFilter :data="filters" :handleChangeFilters="handleChangeFilters" index="1" />
            </div>
          </div>
        </div>

        <main class="mx-auto  py-10 px-5 lg:px-32">
          <div class="border-b border-gray-200 pb-10">
            <p class="text-3xl font-bold tracking-tight text-gray-900">Các sản phẩm</p>
            <p class="mt-4 text-base text-gray-500">Danh mục "Sản phẩm"</p>
          </div>

          <div class="pt-6 lg:grid lg:grid-cols-4 lg:gap-x-8 xl:grid-cols-5">
            <aside>
              <h2 class="sr-only">Filters</h2>

              <!-- Mobile filter dialog toggle, controls the 'mobileFilterDialogOpen' state. -->
              <button type="button" class="inline-flex items-center lg:hidden" @click="handleDisplayFilter()">
                <span class="text-sm font-medium text-gray-700">Filters</span>
                <svg class="ml-1 h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor"
                  aria-hidden="true">
                  <path
                    d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                </svg>
              </button>

              <div class="hidden lg:block">
                <ProductsFilter :data="filters" :handleChangeFilters="handleChangeFilters" index="2" />

              </div>
            </aside>

            <!-- Product grid -->
            <div class="mt-6 lg:col-span-3 lg:mt-0 xl:col-span-4 ">

              <IndexSuggestedProducts/>

            </div>
          </div>
        </main>
      </div>
    </div>

  </div>
</template>
<script lang="js">
export default defineNuxtComponent({
  data() {
    return {
      displayFilter: true,
      filters: {
        category: 0,
        color: 0,
        size: 2,
      }
    }
  },
  methods: {
    handleDisplayFilter() {
      return this.displayFilter = !this.displayFilter;
    },
    handleChangeFilters(key, value) {
      this.filters[key] = value;
    }
  }
})
</script>