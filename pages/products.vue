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
                <h2 class="text-lg font-medium text-gray-900 ">
                  Bộ lọc sản phẩm
                </h2>
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

        <main class="mx-auto px-5 lg:px-32">
          <!-- <div class="border-b border-gray-200 pb-10">
            <p class="text-3xl font-bold tracking-tight text-gray-900">Các sản phẩm</p>
            <p class="mt-4 text-base text-gray-500">Danh mục "Sản phẩm"</p>
          </div> -->
          <h2 class="text-center pb-6 text-xl font-medium">
            {{ title }}
          </h2>
          <div class="pt-6 border-t lg:grid lg:grid-cols-5 lg:gap-x-8 xl:grid-cols-6">
            <aside>
              <h2 class="sr-only">Bộ lọc sản phẩm</h2>

              <!-- Mobile filter dialog toggle, controls the 'mobileFilterDialogOpen' state. -->
              <button type="button" class="inline-flex items-center lg:hidden" @click="handleDisplayFilter()">
                <span class="text-sm font-medium text-gray-700">
                  Bộ lọc sản phẩm
                  <span class="text-gray-400 ms-0">
                    {{ displayFilter ? '-' : '+' }}
                  </span>
                </span>

              </button>
              <button type="button" class="inline-flex ms-5 items-center lg:hidden" @click="handleDisplayCategory()">
                <span class="text-sm font-medium text-gray-700">
                  Danh mục sản phẩm
                  <span class="text-gray-400 ms-0">
                    {{ displayCategory ? '-' : '+' }}
                  </span>
                </span>

              </button>
              <div class="hidden lg:block">
                <ProductsFilter :data="filters" :handleChangeFilters="handleChangeFilters" index="2" />

              </div>
            </aside>

            <!-- Product grid -->
            <div class="mt-6 lg:border-l lg:ps-5  lg:col-span-4 lg:mt-0 xl:col-span-5 ">
              <!-- ================================ DANH MUC ================================== -->


              <div v-if="!displayCategory">
                <button type="button" class=" lg:inline-flex ms-5 items-center hidden" @click="handleDisplayCategory()">
                  <span class="text-sm font-medium text-gray-700">
                    Danh mục sản phẩm
                    <span class="text-gray-400 ms-0">
                      {{ displayCategory ? '-' : '+' }}
                    </span>
                  </span>

                </button>
              </div>
              <IndexSuggestedProducts v-if="!isLoading" header="" :dataSuggestedProducts="listProducts" />
              <div class="mt-3" v-if="isLoading">
                Loading..
              </div>
              <div class="mt-3" v-if="!isLoading && listProducts?.length == 0">
                Không có sản phẩm nào hợp lệ
              </div>
              <div class="mt-20" v-if="!isLoading && listProducts?.length != 0">
                <div class="text-center relative">
                  Trang {{ page }} / {{ totalPage }}
                  <div v-if="showChangePage" class="absolute flex -top-[191%] left-2/4 -translate-x-2/4">
                    <input @change="(e) => handleChangePageValue(e)" type="number" class="pe-12 w-32 rounded-xl">
                    <button @click="getData(selectPage)"
                      class="absolute border-gray-400 border-l ps-1 right-2 top-2/4 -translate-y-2/4">
                      xem
                    </button>
                  </div>
                </div>
                <div class=" flex justify-center gap-x-3 mt-2">
                  <button :disabled="page == 1"
                    class="border disabled:bg-gray-50 disabled:text-gray-400 px-3 bg-gray-200 font-medium py-2 rounded-xl"
                    @click="getData(1)">
                    Đầu tiên
                  </button>
                  <button :disabled="page == 1"
                    class="border disabled:bg-gray-50 disabled:text-gray-400 px-3 bg-gray-200 font-medium py-2 rounded-xl"
                    @click="getData(Number(page) - 1)">
                    Trước
                  </button>

                  <button class="border px-3 bg-gray-200 font-medium py-2 rounded-xl" @click="displayChangePage()">
                    <v-icon name="gi-archive-research" scale="1.3"></v-icon>
                  </button>

                  <button :disabled="page == totalPage"
                    class="border disabled:bg-gray-50 disabled:text-gray-400 px-3 bg-gray-200 font-medium py-2 rounded-xl"
                    @click="getData(Number(page) + 1)">
                    Sau
                  </button>
                  <button :disabled="page == totalPage"
                    class="border disabled:bg-gray-50 disabled:text-gray-400 px-3 bg-gray-200 font-medium py-2 rounded-xl"
                    @click="getData(totalPage)">
                    Cuối cùng
                  </button>
                </div>
              </div>
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
      title: "Tất cả sản phẩm",
      showChangePage: false,
      displayCategory: true,
      displayFilter: false,
      listProducts: null,
      selectPage: null,
      isLoading: true,
      totalPage: null,
      nextPage: null,
      prePage: null,
      filters: {
      },
      page: 1,
    }
  },
  watch: {
    '$route.query': {
      handler(newQuery, oldQuery) {
        if (newQuery?.search) {
          this.handleChangeFilters('keywords', newQuery.search)
          this.title = `Tìm kiếm: "${newQuery.search}"`
        } else {
          this.handleChangeFilters('keywords', 0)
          this.title = `Tất cả sản phẩm`
        }
      },
      immediate: true, // Gọi handler ngay lập tức với giá trị hiện tại
      deep: true // Theo dõi sự thay đổi sâu bên trong object query
    }
  },

  async created() {
    if (this.$route.query?.search) {
      this.handleChangeFilters('keywords', this.$route.query?.search)
      this.title = `Tìm kiếm: "${this.$route.query?.search}"`;
    }
    await this.getData()
    this.isLoading = false;
    // const a = useState()._object['$sdataBaseURL']
  },
  methods: {
    handleDisplayFilter() {
      return this.displayFilter = !this.displayFilter;
    },
    handleDisplayCategory() {
      return this.displayCategory = !this.displayCategory;
    },
    async handleChangeFilters(key, value) {
      this.isLoading = true;
      if (Number(value) == 0) {
        delete this.filters[key];
        await this.getData();
        return;
      }
      this.filters[key] = value;
      await this.getData();
      this.isLoading = false;
    },
    async getData(page = 1) {
      if (!Number(page)) {
        return alert('Page not found');
      }
      this.isLoading = true;
      this.listProducts = null;
      const listProducts = await useProducts(this.filters, page);
      this.listProducts = await listProducts?.data;
      this.totalPage = listProducts.totalPage;
      this.nextPage = listProducts.nextPage;
      this.prePage = listProducts.prePage;
      this.page = listProducts.page;

      this.isLoading = false;
      this.showChangePage = false;
    },
    displayChangePage() {
      this.showChangePage = !this.showChangePage;
    },
    handleChangePageValue(e) {
      const selected = e.target.value;
      if (!Number(selected)) {
        return this.selectPage = 'Fail';
      }
      if (!this.isInteger(selected)) {
        return this.selectPage = 'Fail';
      }
      if (Number(selected) < 1 || Number(selected) > this.totalPage)
        return this.selectPage = 'Fail';
      this.selectPage = e.target.value;
    },
    isInteger(value) {
      return (Math.round(Number(value)) - value) == 0;
    }
  }
})
</script>