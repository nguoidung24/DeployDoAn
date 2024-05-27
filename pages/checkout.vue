<template>
    <div>
        <!-- ==================================================== START ================================================================ -->

        <section class=" relative z-10 ">
            <div class="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto relative z-10">
                <div class="grid grid-cols-12">
                    <!-- ========================================== DANH SÁCH SẢN PHẨM ================================================= -->
                    <div
                        class="col-span-12 xl:col-span-8 lg:pr-8 pt-14 pb-8 lg:py-24 w-full max-xl:max-w-3xl max-xl:mx-auto">
                        <div class="grid grid-cols-1 gap-x-5 lg:grid-cols-2">
                            <div class="">
                                <p class="text-center font-semibold mb-10">Thông tin đơn hàng</p>
                                <div v-for="(item, index) in dataCart" :key="index"
                                    class="flex mb-3 gap-x-3 justify-center">
                                    <figure>
                                        <img class="w-32 mx-auto" :src="baseImageURL + item?.product?.thumbnail" alt="">
                                    </figure>
                                    <div>
                                        <p class="font-bold text-lg">{{ item?.product?.product_name }}</p>
                                        <p class="px-1 py-1 rounded-3xl my-1 border text-center">{{ item?.quantity }}
                                        </p>
                                        <p>Giá: {{ Number(item?.price).toLocaleString() }} vnđ</p>
                                        <p>Tổng: {{ (Number(item?.price) * Number(item?.quantity)).toLocaleString() }}
                                            vnđ</p>
                                    </div>
                                </div>
                            </div>
                            <div class="w-[400px] mx-auto">
                                <p class="text-center font-semibold">Thông tin khách hàng</p>
                                <div class="text-left mt-3">
                                    <p>Họ và tên:</p>
                                    <input v-model="user_name" placeholder="Họ và tên" class="mt-1 w-full rounded-lg"
                                        type="text">
                                </div>
                                <div class="text-left mt-3">
                                    <p>Số điện thoại:</p>
                                    <input v-model="user_phone" placeholder="Số điện thoại"
                                        class="mt-1 w-full rounded-lg" type="text">
                                </div>
                                <div class="text-left mt-3">
                                    <p>Tỉnh, Thành phố:</p>
                                    <input v-model="user_province" placeholder="Tỉnh, Thành phố"
                                        class="mt-1 w-full rounded-lg" type="text">
                                </div>
                                <div class="text-left mt-3">
                                    <p>Quận, Huyện:</p>
                                    <input v-model="user_distrist" placeholder="Quận, Huyện"
                                        class="mt-1 w-full rounded-lg" type="text">
                                </div>
                                <div class="text-left mt-3">
                                    <p>Xã, Phường:</p>
                                    <input v-model="user_wards" placeholder="Xã, Phường" class="mt-1 w-full rounded-lg"
                                        type="text">
                                </div>
                                <div class="text-left mt-3">
                                    <p>Số nhà, đường...:</p>
                                    <input v-model="user_address" placeholder="Số nhà, đường..."
                                        class="mt-1 w-full rounded-lg" type="text">
                                </div>
                                <div class="text-left mt-3">
                                    <p>Phương thức thanh toán:</p>
                                    <select v-model="payment_method" class="mt-1 w-full rounded-lg">
                                        <option value="-1">Chọn phương thức thanh toán?</option>
                                        <option value="0">Thanh toán online</option>
                                        <option value="1">Thanh toán khi nhận hàng</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div v-if="isLoading">
                            Loading...
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
                                <button v-if="!checkOutIsLoading" @click="handleCheckOut()"
                                    class="w-full block text-center bg-indigo-600 rounded-xl py-3 px-6 font-semibold text-lg text-white transition-all duration-500 hover:bg-indigo-700">
                                    Đặt Hàng
                                </button>
                                <button v-if="checkOutIsLoading"
                                    class="w-full block text-center bg-gray-600 rounded-xl py-3 px-6 font-semibold text-lg text-white transition-all duration-500 hover:bg-gray-700">
                                    Đặt Hàng
                                </button>
                            </div>
                        </div>
                    </div>
                    <!-- ======================================== HẾT TỔNG QUAN GIỎ HÀNG =========================================== -->
                </div>
            </div>
        </section>
        <div v-if="isGenQR" class="fixed top-0 left-0 w-screen h-screen bg-[#0000009e] z-40">
            <div class="w-[400px] absolute top-2/4 left-2/4 -translate-x-2/4 text-center -translate-y-2/4">
                <img class="" :src="dataQR?.data?.qrDataURL" alt="">
                <button @click="handleCheckOut()" class="mt-3 px-4 py-2 bg-white rounded font-semibold">Hoàn
                    Thành</button>
            </div>
        </div>
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
            isGenQR: false,
            dataQR: null,
            // user_name: null,
            // user_phone: null,
            // user_province: null,
            // user_distrist: null,
            // user_wards: null,
            // user_address: null,
            user_name: 'Nguyễn Ngọc Thái',
            user_phone: '0987654321',
            user_province: "Hà Nội",
            user_distrist: "Cầu Giấy",
            user_wards: "Dịch Vọng Hậu",
            user_address: "12",
            payment_method: -1,
            checkOutIsLoading: false,
        }
    },
    async created() {
        const data = (await useGetCart()).value
        this.dataCart = data.listCart.cart.data;
        if (this.dataCart?.length == undefined || this.dataCart?.length == 0) {
            this.$router.push("/");
        }

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

        getTotalItems(cart) {
            let count = 0;
            cart.forEach(item => {
                count += item?.quantity;
            });
            return count;
        },

        async handleCheckOut() {
            this.checkOutIsLoading = true;
            const customer_id = Cookie.get("SSID");

            let order_ids = '';

            await this.dataCart.forEach(item => {
                order_ids += item.order_id + ',';
            });

            if (Number(this.payment_method) == -1) {
                this.checkOutIsLoading = false;
                return alert('Bạn chưa chọn phương thức thanh toán!');
            } else if (Number(this.payment_method) == 0) {
                if (this.isGenQR == false) {
                    this.dataQR = await useGenQR({
                        amount: this.totalAmount,
                        addInfo: `Thanh toán đơn hàng ${customer_id}c${order_ids?.slice(0, -1)?.replace(',', 'x')}`
                    })
                    this.checkOutIsLoading = false;
                    return this.isGenQR = true;
                }
                this.isGenQR = false;
                this.checkOutIsLoading = false;
            }


            const request = {
                action: 'edit',
                payMethod: this.payment_method,
                payment_date: null,
                customer_id: customer_id,
                updateStatus: "1",
                order_ids: order_ids?.slice(0, -1),
                updateLocal: `${this.user_province},${this.user_distrist},${this.user_wards},${this.user_address},${this.user_name},${this.user_phone}`
            }

            await useCheckOut(request)
            await useGetCart()

            await alert("Đã đặt hàng");
            this.$router.push("/user");
            this.checkOutIsLoading = false;
        }
    }
});
</script>