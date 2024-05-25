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
              <ProductsCategories :filters="filters" :handleChangeFilters="handleChangeFilters" v-if="displayCategory"  />

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
                    <svg fill="#000000" height="20px" width="20px" version="1.1" id="Capa_1"
                      xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 338.364 338.364" xml:space="preserve">
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                      <g id="SVGRepo_iconCarrier">
                        <g>
                          <path
                            d="M332.201,55.344c-2.964-1.232-73.148-30.162-121.749-30.162c-21.234,0-33.858,5.597-41.27,13.045 c-7.412-7.448-20.036-13.045-41.269-13.045c-48.602,0-118.786,28.93-121.75,30.162C2.432,56.894,0,60.538,0,64.579v238.604 c0,3.339,1.666,6.457,4.442,8.314c1.669,1.115,3.607,1.686,5.559,1.686c1.293,0,2.592-0.251,3.821-0.76 c0.888-0.367,89.31-36.731,132.189-36.731c9.963,0,14.035,2.104,14.871,3.349c2.454,3.652,7.005,5.273,11.216,3.988 c2.344-0.714,4.272-2.236,5.523-4.203c0.004,0.01,0.009,0.018,0.014,0.027c1.099-1.257,5.238-3.161,14.72-3.161 c42.878,0,131.3,36.364,132.188,36.731c1.229,0.509,2.528,0.76,3.821,0.76c1.951,0,3.889-0.571,5.559-1.686 c2.776-1.857,4.442-4.975,4.442-8.314V64.579C338.364,60.538,335.933,56.894,332.201,55.344z M318.364,288.465 c-27.588-10.607-89.6-32.774-126.01-32.774c-4.912,0-9.297,0.393-13.171,1.184v-43.537c-7.019-0.832-13.766-2.858-20-5.985v49.522 c-3.874-0.791-8.259-1.184-13.171-1.184c-36.411,0-98.423,22.167-126.011,32.774V71.372c17.94-6.927,71.149-26.19,107.913-26.19 c31.269,0,31.269,13.592,31.269,19.397v33.713c6.235-3.128,12.98-5.156,20-5.986V64.579c0-5.805,0-19.397,31.27-19.397 c36.764,0,89.972,19.264,107.912,26.19V288.465z">
                          </path>
                          <path
                            d="M46.871,117.682c1.169,0,2.357-0.274,3.466-0.854c13.884-7.249,54.114-23.65,73.292-12.643 c3.591,2.063,8.176,0.822,10.238-2.771c2.062-3.592,0.822-8.176-2.771-10.238C118.038,83.68,99.102,83.6,74.817,90.94 c-17.231,5.208-30.861,12.298-31.433,12.597c-3.669,1.92-5.085,6.449-3.167,10.119C41.556,116.216,44.167,117.682,46.871,117.682z">
                          </path>
                          <path
                            d="M46.871,157.682c1.169,0,2.357-0.274,3.466-0.854c13.884-7.249,54.114-23.65,73.292-12.643 c0.771,0.443,1.589,0.725,2.416,0.872c0.63-4.965,1.862-9.867,3.711-14.583c-13.001-6.771-31.462-6.631-54.938,0.465 c-17.231,5.208-30.861,12.298-31.433,12.597c-3.669,1.92-5.085,6.449-3.167,10.119C41.556,156.216,44.167,157.682,46.871,157.682z">
                          </path>
                          <path
                            d="M46.871,197.682c1.169,0,2.357-0.274,3.466-0.854c13.884-7.249,54.114-23.653,73.292-12.642 c1.934,1.11,4.154,1.255,6.115,0.599l3.064-3.064c-2.097-3.897-3.729-7.979-4.917-12.161c-12.88-5.83-30.7-5.382-53.073,1.379 c-17.231,5.208-30.861,12.298-31.433,12.598c-3.669,1.92-5.085,6.448-3.167,10.118C41.556,196.217,44.167,197.682,46.871,197.682z">
                          </path>
                          <path
                            d="M74.817,210.94c-17.231,5.208-30.861,12.298-31.433,12.598c-3.669,1.92-5.085,6.448-3.167,10.118 c1.339,2.562,3.95,4.026,6.654,4.026c1.169,0,2.357-0.274,3.466-0.854c8.472-4.423,26.75-12.245,44.072-15.178 c0.841-1.816,1.991-3.523,3.488-5.021l11.082-11.081C99.157,205.248,87.754,207.031,74.817,210.94z">
                          </path>
                          <path
                            d="M204.227,94.474c5.616,1.702,10.95,4.219,15.863,7.482c20.512-6.03,55.24,8.242,67.938,14.872 c1.109,0.58,2.297,0.854,3.468,0.854c2.702,0,5.312-1.464,6.651-4.024c1.92-3.67,0.503-8.202-3.168-10.123 c-0.572-0.299-14.202-7.389-31.433-12.597c-24.284-7.339-43.219-7.26-56.279,0.237C205.889,91.97,204.859,93.136,204.227,94.474z">
                          </path>
                          <path
                            d="M294.98,143.537c-0.572-0.299-14.202-7.389-31.433-12.597c-8.016-2.422-15.436-4.02-22.268-4.825 c2.463,5.046,4.207,10.418,5.189,15.994c16.55,3.223,33.497,10.51,41.559,14.72c1.109,0.58,2.297,0.854,3.468,0.854 c2.702,0,5.312-1.464,6.651-4.023C300.068,149.99,298.65,145.457,294.98,143.537z">
                          </path>
                          <path
                            d="M294.98,183.538c-0.572-0.3-14.202-7.39-31.433-12.598c-6.274-1.896-12.184-3.287-17.735-4.192 c-1.167,5.013-2.957,9.838-5.343,14.377c18.299,2.386,38.517,10.983,47.559,15.704c1.109,0.58,2.297,0.855,3.468,0.855 c2.702,0,5.312-1.465,6.651-4.025C300.068,189.99,298.65,185.457,294.98,183.538z">
                          </path>
                          <path
                            d="M294.98,223.538c-0.572-0.3-14.202-7.39-31.433-12.598c-24.284-7.34-43.219-7.26-56.279,0.237 c-3.592,2.063-4.833,6.646-2.771,10.239c2.064,3.593,6.648,4.83,10.238,2.771c19.176-11.009,59.408,5.393,73.292,12.642 c1.109,0.58,2.297,0.855,3.468,0.855c2.702,0,5.312-1.465,6.651-4.025C300.068,229.99,298.65,225.457,294.98,223.538z">
                          </path>
                          <path
                            d="M236.506,152.815c0-13.61-5.301-26.407-14.925-36.031c-9.624-9.624-22.419-14.925-36.03-14.925 c-13.611,0-26.407,5.301-36.031,14.925c-9.624,9.624-14.925,22.421-14.925,36.031c0,11.077,3.512,21.613,10.007,30.342 l-40.547,40.545c-2.929,2.929-2.929,7.678,0,10.606c1.464,1.465,3.384,2.197,5.303,2.197c1.919,0,3.839-0.732,5.303-2.196 l40.547-40.546c8.727,6.495,19.265,10.007,30.342,10.007c13.61,0,26.406-5.3,36.029-14.924 C231.205,179.221,236.506,166.425,236.506,152.815z M210.974,178.24c-6.79,6.791-15.819,10.53-25.422,10.53 c-9.604,0-18.633-3.739-25.425-10.531c-6.791-6.791-10.531-15.82-10.531-25.424c0-9.605,3.74-18.633,10.531-25.425 c6.792-6.791,15.821-10.531,25.425-10.531c9.604,0,18.632,3.74,25.423,10.532c6.791,6.791,10.532,15.82,10.532,25.424 S217.766,171.448,210.974,178.24z">
                          </path>
                        </g>
                      </g>
                    </svg>
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