<template>
    <div>
        <div class="bg-gray-100">
            <div class="container mx-auto py-8">
                <div class="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
                    <div class="col-span-4 sm:col-span-3">
                        <div class="bg-white shadow rounded-lg p-6">
                            <div class="flex flex-col items-center">
                                <img src="data:image/webp;base64,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"
                                    class="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0">

                                </img>
                                <h1 class="text-xl font-bold">
                                    Nguyễn Tất Niên
                                </h1>
                                <p class="italic text-gray-700">
                                    samseng.shop
                                </p>
                                <div class="mt-6 flex flex-wrap gap-4 justify-center">
                                    <button @click="handleLogout()"
                                        class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                                        Đăng xuất
                                    </button>
                                    <!-- <a href="#"
                                        class="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded">
                                        Đổi mật khẩu
                                    </a> -->
                                </div>
                            </div>
                            <hr class="my-6 border-t border-gray-300">
                            <div class="flex flex-col">
                                <span class="text-gray-700 uppercase font-bold tracking-wider mb-2">
                                    Danh mục
                                </span>
                                <ul style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
                                    <li @click="handleChangeTab(item)" v-for="(item, index) in Object.keys(tab)"
                                        :key="index"
                                        :class="`${tabActive == item ? ' font-semibold italic ' : ''}} mb-1 pb-2 hover:underline hover:cursor-pointer`">
                                        <span>
                                            {{ tabActive == item ? '👉 ' : '🤜 ' }}
                                        </span>
                                        <span>
                                            {{ tab[`${item}`].text }}
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-4 relative sm:col-span-9">
                        <div class="bg-white shadow rounded-lg p-6 min-h-[100vh]">
                            <div v-if="!isLoading" class="grid grid-cols-1 lg:grid-cols-2">
                                <div v-for="(item, index) in tab[`${tabActive}`]?.value" :key="index"
                                    class="mb-5 flex gap-2 items-center">
                                    <figure>
                                        <img class="lg:w-48 w-36 me-2 hover:scale-95 duration-700 hover:cursor-pointer"
                                            :src="baseImageURL + item?.product?.thumbnail" alt="">
                                    </figure>
                                    <div class="">
                                        <p class="font-semibold text-lg">
                                            {{ item?.product?.product_name }} <span>({{ item?.quantity }} chiếc)</span>
                                        </p>
                                        <div>
                                            <span class="italic">
                                                Đặt lúc:
                                                {{
                                                    item?.order_date?.split(' ')[0] +
                                                    ' | ' +
                                                    item?.order_date?.split(' ')[1]
                                                }}
                                            </span>
                                        </div>
                                        <div v-if="`${tabActive}` == '3'">
                                            <span class="italic">
                                                Thanh toán lúc:
                                                {{
                                                    item?.payment_date?.split(' ')[0] +
                                                    ' | ' +
                                                    item?.order_date?.split(' ')[1]
                                                }}
                                            </span>
                                        </div>
                                        <div>
                                            <span class="italic">
                                                Phương thức:
                                                {{ item?.pay_method }}
                                            </span>
                                        </div>
                                        <div>
                                            <span class="italic">Giá </span>:<span class="font-bold">
                                                {{ Number(item?.price).toLocaleString() }}
                                                <sup>vnđ</sup>
                                            </span> <br> <span class="italic">Tổng </span>:<span
                                                class="font-bold text-red-500">
                                                {{ (Number(item?.price) * Number(item?.quantity)).toLocaleString() }}
                                                <sup>vnđ</sup>
                                            </span>
                                        </div> <!----> <!---->
                                        <div>
                                            <p v-if="item?.pay_method == 'Thanh Toán Online' && `${tabActive}` == '1'"
                                                class="italic text-sm text-red-600">
                                                (Đang kiểm tra thanh toán - Không quá 24h)</p>
                                        </div>
                                        <div>
                                            <button v-if="`${tabActive}` == '1'"
                                                class="bg-red-500 mt-2 text-sm text-white px-3 py-2 rounded-lg ">
                                                Hủy đơn - chua xong</button>
                                        </div>
                                        <div v-if="`${tabActive}` == '3'">
                                            <button @click="handleDisplayRating(item)" v-if="!item?.rating"
                                                class="px-4 py-2 text-sm bg-blue-500 rounded text-white">
                                                Đánh giá {{ item?.rating }}
                                            </button>
                                            <p v-if="item?.rating">
                                                <span v-for="(i, j) in new Array(Number(item?.rating)).fill(0)"
                                                    :key="j">
                                                    ⭐
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div v-if="isLoading">
                                <div class="w-full mx-auto">
                                    <div class="animate-pulse grid lg:p-5 grid-cols-1 lg:grid-cols-2 gap-y-5">
                                        <div v-for="(i, j) in [0,0,0,0,0,0]" :key="j" class="lg:h-64 h-48 w-full flex gap-x-5">
                                            <div class="h-full rounded-lg w-48 bg-gray-400">
                                            </div>
                                            <div class="mt-3 *:h-3 *:mt-3 *:bg-gray-400 *:rounded-lg">
                                                <p class="w-48"></p>
                                                <p class="w-56"></p>
                                                <p class="w-48"></p>
                                                <p class="w-56"></p>
                                                <p class="w-48"></p>
                                                <p class="w-56"></p>
                                                <p class="w-48"></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="displayRating" class="fixed top-0 left-0 w-screen h-screen bg-[#0000003e] z-50">
                <div
                    class="absolute px-24 rounded-2xl py-8 bg-white top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
                    <p class="text-center font-semibold mb-5">Đánh giá</p>
                    <p>
                        <span v-for="(i, j) in new Array(Number(ratingVal)).fill(0)" :key="j">
                            ⭐
                        </span>
                    </p>
                    <input v-model="ratingVal" type="range" max="5" min="1" class="hover:cursor-pointer">
                    <div class="flex gap-2 text-white justify-end mt-3">
                        <button @click="handleRating(null)"
                            class="border px-4 py-2 rounded-lg bg-green-600">Xong</button>
                        <button @click="handleDisplayRating()"
                            class="border px-4 py-2 rounded-lg bg-red-600">Hủy</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="js">
import Cookies from "js-cookie";
export default defineNuxtComponent({
    data() {
        return {
            displayRating: false,
            isLoading: true,
            dataRating: null,
            tabActive: '1',
            ratingVal: 4,
            tab: {
                '1': { text: 'Chờ Duyệt', value: [] },
                '2': { text: 'Đang Giao', value: [] },
                '3': { text: 'Đã Giao', value: [] },
                '4': { text: 'Thất Bại', value: [] },
                '-1': { text: 'Đơn bị hủy', value: [] },
            }
        }
    },

    async created() {
        const data = await useCustomer();
        data?.data?.map((item, index) => {
            this.tab[`${item?.status}`]?.value?.push(item);
        });
        this.isLoading = false;
    },
    methods: {
        handleLogout() {
            if (confirm('Bạn đang đăng xuất?')) {
                Cookies.remove("isLogin");
                Cookies.remove("SSID");
                this.$router.push("/login");
            }

        },
        handleChangeTab(item) {
            this.tabActive = `${item}`;
        },
        handleDisplayRating(item) {
            this.displayRating = !this.displayRating;
            this.dataRating = {
                order_id: item?.order_id,
                product_id: item?.product?.product_id
            };
        },
        async handleRating(att) {
            if (Number(this.ratingVal) <= 5 && Number(this.ratingVal) >= 1) {
                this.isLoading = true;
                const request = {
                    product_id: this.dataRating.product_id,
                    order_id: this.dataRating.order_id,
                    star: this.ratingVal
                };
                this.displayRating = !this.displayRating;
                await useRating(request);
                this.tab = await {
                    '1': { text: 'Chờ Duyệt', value: [] },
                    '2': { text: 'Đang Giao', value: [] },
                    '3': { text: 'Đã Giao', value: [] },
                    '4': { text: 'Thất Bại', value: [] },
                    '-1': { text: 'Đơn bị hủy', value: [] },
                }

                const data = await useCustomer();
                data?.data?.map((item, index) => {
                    this.tab[`${item?.status}`]?.value?.push(item);
                });
                this.isLoading = false;
            }
        }
    },
    async setup() {
        const baseImageURL = (await useBaseURL()).value.baseURLImage
        return {
            baseImageURL
        }
    }
})
</script>