<template>
    <div v-motion :initial="{
        opacity: 0,
        y: 100,
    }" :enter="{
        opacity: 1,
        y: 0,
    }" :leave="{
        y: -100,
        opacity: 0,
    }">
        <!-- ==================================================== START ================================================================ -->

        <section class=" relative z-10 ">
            <div class="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto relative z-10">
                <div class="grid grid-cols-12">
                    <!-- ========================================== DANH SÁCH SẢN PHẨM ================================================= -->
                    <div
                        class="col-span-12 xl:col-span-8 lg:pr-8 pt-14 pb-8 lg:py-24 w-full max-xl:max-w-3xl max-xl:mx-auto">
                        <div class="flex items-center justify-between pb-8 border-b border-gray-300">
                            <h2 class="font-manrope font-bold text-3xl leading-10 text-black">Giỏi Hàng</h2>
                            <h2 class="font-manrope font-bold text-xl leading-8 text-gray-600">{{ totalItems }}
                                Sản phẩm</h2>
                        </div>
                        <div class="grid grid-cols-12 mt-8 max-md:hidden pb-6 border-b border-gray-200">
                            <div class="col-span-12 md:col-span-7">
                                <p class="font-normal text-lg leading-8 text-gray-400">Chi Tiết Sản Phẩm</p>
                            </div>
                            <div class="col-span-12 md:col-span-5">
                                <div class="grid grid-cols-5">
                                    <div class="col-span-3">
                                        <p class="font-normal text-lg leading-8 text-gray-400 text-center">Số Lượng</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- SẢN PHẨM  -->
                        <div v-if="!isLoading" v-for="(item, index) in dataCart" :key="index"
                            class="flex flex-col min-[500px]:flex-row min-[500px]:items-center gap-5 py-6  border-b border-gray-200 group">
                            <div class="w-full md:max-w-[126px]">
                                <img :src="baseImageURL + item?.product?.thumbnail" alt="perfume bottle image"
                                    class="mx-auto">
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-4 w-full">
                                <div class="md:col-span-2">
                                    <div class="flex flex-col max-[500px]:items-center gap-3">
                                        <h6 class="font-semibold text-base leading-7 text-black">
                                            {{ item?.product?.product_name }}
                                        </h6>
                                        <h6 class="font-normal text-base leading-7 text-gray-500">
                                            Giá: {{ Number(item?.price).toLocaleString() }} vnđ
                                        </h6>
                                        <h6
                                            class="font-medium text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-indigo-600">
                                            Tổng: {{ (Number(item?.price) * Number(item?.quantity)).toLocaleString() }}
                                            vnđ
                                        </h6>
                                    </div>
                                </div>
                                <div class="flex items-center max-[500px]:justify-center h-full max-md:mt-3">
                                    <div class="flex items-center h-full">
                                        <button v-if="Number(item?.quantity) > 1" :disabled="isLoadQuantity"
                                            @click="handleAddToCart(item, '-')"
                                            class="group rounded-l-xl px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300">
                                            <svg class="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                                                xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                                                viewBox="0 0 22 22" fill="none">
                                                <path d="M16.5 11H5.5" stroke="" stroke-width="1.6"
                                                    stroke-linecap="round" />
                                                <path d="M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6"
                                                    stroke-linecap="round" />
                                                <path d="M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6"
                                                    stroke-linecap="round" />
                                            </svg>
                                        </button>
                                        <button v-if="Number(item?.quantity) <= 1" :disabled="isLoadQuantity"
                                            class="group rounded-l-xl bg-gray-200 px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500  hover:shadow-gray-300 focus-within:outline-gray-300">
                                            <svg class="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                                                xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                                                viewBox="0 0 22 22" fill="none">
                                                <path d="M16.5 11H5.5" stroke="" stroke-width="1.6"
                                                    stroke-linecap="round" />
                                                <path d="M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6"
                                                    stroke-linecap="round" />
                                                <path d="M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6"
                                                    stroke-linecap="round" />
                                            </svg>
                                        </button>
                                        <input type="text" readonly
                                            class="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-full max-w-[73px] min-w-[60px] placeholder:text-gray-900 py-[15px]  text-center bg-transparent"
                                            :placeholder="item?.quantity">
                                        <button :disabled="isLoadQuantity" @click="handleAddToCart(item, '+')"
                                            class="group rounded-r-xl px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300">
                                            <svg class="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                                                xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                                                viewBox="0 0 22 22" fill="none">
                                                <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-width="1.6"
                                                    stroke-linecap="round" />
                                                <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-opacity="0.2"
                                                    stroke-width="1.6" stroke-linecap="round" />
                                                <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-opacity="0.2"
                                                    stroke-width="1.6" stroke-linecap="round" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div class="ms-5">
                                        <button @click="handleDeleteCart(item)"
                                            class="size-6 text-sm text-center bg-red-600 rounded-full font-semibold text-white">
                                            x
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-if="isLoading">
                            Loading...
                        </div>
                        <div v-if="!isLoading && (dataCart?.length == 0 || dataCart?.length == undefined)">
                            <p class="text-center mt-5 font-semibold text-3xl"
                                style="font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">
                                Giỏ hàng của bạn đang trống
                            </p>
                            <p class="text-center mt-3 text-blue-400">
                                <NuxtLink to="/products"  class="inline-block">
                                    Mua Sắm
                                </NuxtLink>
                            </p>
                        </div>
                    </div>
                    <!-- ========================================= HẾT DANH SÁCH SẢN PHẨM ================================================= -->
                    <!-- ========================================== TỔNG QUAN GIỎ HÀNG =========================================== -->
                    <div
                        class=" col-span-12 xl:col-span-4 w-full max-xl:px-6 max-w-3xl xl:max-w-lg mx-auto lg:pl-8 py-24">
                        <h2 class="font-manrope font-bold text-3xl leading-10 text-black pb-8 border-b border-gray-300">
                            Tổng Quan Đơn Hàng
                        </h2>
                        <div class="mt-8">
                            <div class="flex items-center justify-between pb-6">
                                <p class="font-normal text-lg leading-8 text-black">{{ totalItems }} Sản phẩm</p>
                                <p class="font-medium text-lg leading-8 text-black">
                                    {{ Number(totalAmount).toLocaleString() }} vnđ
                                </p>
                            </div>
                            <div>
                                <p class="mb-5 font-semibold">Quyền lợi tại Samseng.shop</p>
                                <p class="flex items-center gap-4">
                                    <span>
                                        <svg width="40" fill="#000000" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round"
                                                stroke-linejoin="round"></g>
                                            <g id="SVGRepo_iconCarrier">
                                                <g data-name="Layer 2">
                                                    <g data-name="car">
                                                        <rect width="24" height="24" opacity="0"></rect>
                                                        <path
                                                            d="M21.6 11.22L17 7.52V5a1.91 1.91 0 0 0-1.81-2H3.79A1.91 1.91 0 0 0 2 5v10a2 2 0 0 0 1.2 1.88 3 3 0 1 0 5.6.12h6.36a3 3 0 1 0 5.64 0h.2a1 1 0 0 0 1-1v-4a1 1 0 0 0-.4-.78zM20 12.48V15h-3v-4.92zM7 18a1 1 0 1 1-1-1 1 1 0 0 1 1 1zm5-3H4V5h11v10zm7 3a1 1 0 1 1-1-1 1 1 0 0 1 1 1z">
                                                        </path>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                    </span>
                                    <span>
                                        Miễn phí giao hàng toàn quốc
                                    </span>
                                </p>
                                <p class="flex items-center gap-4">
                                    <span>
                                        <svg width="40" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round"
                                                stroke-linejoin="round"></g>
                                            <g id="SVGRepo_iconCarrier">
                                                <path
                                                    d="M18 8V7.2C18 6.0799 18 5.51984 17.782 5.09202C17.5903 4.71569 17.2843 4.40973 16.908 4.21799C16.4802 4 15.9201 4 14.8 4H6.2C5.07989 4 4.51984 4 4.09202 4.21799C3.71569 4.40973 3.40973 4.71569 3.21799 5.09202C3 5.51984 3 6.0799 3 7.2V8M21 12H19C17.8954 12 17 12.8954 17 14C17 15.1046 17.8954 16 19 16H21M3 8V16.8C3 17.9201 3 18.4802 3.21799 18.908C3.40973 19.2843 3.71569 19.5903 4.09202 19.782C4.51984 20 5.07989 20 6.2 20H17.8C18.9201 20 19.4802 20 19.908 19.782C20.2843 19.5903 20.5903 19.2843 20.782 18.908C21 18.4802 21 17.9201 21 16.8V11.2C21 10.0799 21 9.51984 20.782 9.09202C20.5903 8.71569 20.2843 8.40973 19.908 8.21799C19.4802 8 18.9201 8 17.8 8H3Z"
                                                    stroke="#000000" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round"></path>
                                            </g>
                                        </svg>
                                    </span>
                                    <span>
                                        Đổi sản phẩm theo chính sách quy định trong vòng 14 ngày
                                    </span>
                                </p>
                                <p class="my-5 font-semibold">Hỗ trợ thanh toán</p>
                                <p class="text-sm flex items-center gap-2">
                                    <span>
                                        <svg width="15" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round"
                                                stroke-linejoin="round"></g>
                                            <g id="SVGRepo_iconCarrier">
                                                <path d="M4 12.9L7.14286 16.5L15 7.5" stroke="#1C274C"
                                                    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                                </path>
                                                <path d="M20 7.5625L11.4283 16.5625L11 16" stroke="#1C274C"
                                                    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                                </path>
                                            </g>
                                        </svg>
                                    </span>
                                    <span>
                                        Thanh toán bằng QR Code
                                    </span>
                                </p>
                                <p class="text-sm flex items-center gap-2 mt-3">
                                    <span>
                                        <svg width="15" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round"
                                                stroke-linejoin="round"></g>
                                            <g id="SVGRepo_iconCarrier">
                                                <path d="M4 12.9L7.14286 16.5L15 7.5" stroke="#1C274C"
                                                    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                                </path>
                                                <path d="M20 7.5625L11.4283 16.5625L11 16" stroke="#1C274C"
                                                    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                                </path>
                                            </g>
                                        </svg>
                                    </span>
                                    <span>
                                        Thanh toán chuyển khoản
                                    </span>
                                </p>
                                <p class="text-sm flex items-center gap-2 mt-3">
                                    <span>
                                        <svg width="15" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round"
                                                stroke-linejoin="round"></g>
                                            <g id="SVGRepo_iconCarrier">
                                                <path d="M4 12.9L7.14286 16.5L15 7.5" stroke="#1C274C"
                                                    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                                </path>
                                                <path d="M20 7.5625L11.4283 16.5625L11 16" stroke="#1C274C"
                                                    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                                </path>
                                            </g>
                                        </svg>
                                    </span>
                                    <span>
                                        Thanh toán khi nhận hàng

                                    </span>
                                </p>
                                <div class="flex items-center justify-between py-8">
                                    <p class="font-medium text-xl leading-8 text-black">{{ totalItems }} Sản phẩm
                                    </p>
                                    <p class="font-semibold text-xl leading-8 text-indigo-600">
                                        {{ Number(totalAmount).toLocaleString() }} vnđ</p>
                                </div>
                                <NuxtLink to="/checkout" v-if="Number(totalItems) > 0"
                                    class="w-full block text-center bg-indigo-600 rounded-xl py-3 px-6 font-semibold text-lg text-white transition-all duration-500 hover:bg-indigo-700">
                                    Tiến
                                    Hành
                                    Đặt
                                    Hàng
                                </NuxtLink>
                                <NuxtLink to="/" v-if="Number(totalItems) <= 0"
                                    class="w-full block text-center bg-indigo-600 rounded-xl py-3 px-6 font-semibold text-lg text-white transition-all duration-500 hover:bg-indigo-700">
                                    Mua sắm
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                    <!-- ======================================== HẾT TỔNG QUAN GIỎ HÀNG =========================================== -->

                </div>
            </div>
        </section>

    </div>
</template>
<script lang="js">
import Cookie from "js-cookie";
export default defineNuxtComponent({
    data() {
        return {
            dataCart: null,
            totalAmount: null,
            totalItems: 0,
            isLoadQuantity: false,
            isLoading: true,
        }
    },
    async created() {
        const data = (await useGetCart()).value
        this.dataCart = data.listCart.cart.data;
        this.totalAmount = data.listCart.totalAmount;
        this.totalItems = this.getTotalItems(this.dataCart);
        this.isLoading = false;
    },
    async setup() {
        const baseImageURL = (await useBaseURL()).value.baseURLImage;
        return {
            baseImageURL,
        }
    },
    methods: {
        async handleAddToCart(product, math) {
            this.isLoadQuantity = true;

            const customer_id = Cookie.get('SSID');
            let action = '';
            if (math == '+') {
                action = 'create';
            } else if (math == '-') {
                action = '-quantity';
            }

            const request = {
                action: action,
                customer_id: customer_id,
                price: product?.product?.price,
                product_id: product?.product?.product_id,
                quantity: 1,
                status: 0,
                payment_date: ''
            }
            useChangeCart(request);

            const data = (await useGetCart()).value
            this.dataCart = data.listCart.cart.data;
            this.totalAmount = data.listCart.totalAmount;
            this.totalItems = this.getTotalItems(this.dataCart)

            this.isLoadQuantity = false;


        },
        getTotalItems(cart) {
            let count = 0;
            cart.forEach(item => {
                count += item?.quantity;
            });
            return count;
        },
        async handleDeleteCart(product) {
            this.isLoadQuantity = true;

            if (confirm("Có chắc muốn xóa!")) {
                useDeleteCart({
                    product_id: product.product_id,
                    customer_id: product.customer_id
                });
                const data = (await useGetCart()).value
                this.dataCart = data.listCart.cart.data;
                this.totalAmount = data.listCart.totalAmount;
                this.totalItems = this.getTotalItems(this.dataCart)
                alert('Đã xóa')
            }

            this.isLoadQuantity = false;


        }
    }
});
</script>