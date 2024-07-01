<template>
    <div>
        <div class="bg-gray-100">
            <div class="container mx-auto py-8">
                <div class="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
                    <div class="col-span-4 sm:col-span-3">
                        <div class="bg-white shadow rounded-lg p-6">
                            <div class="flex flex-col items-center">
                                <span src="" class="w-32 h-32 relative bg-gray-300 rounded-full mb-4 shrink-0">
                                    <span
                                        class="text-[4rem] font-bold absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
                                        {{ key }}
                                    </span>
                                </span>
                                <h1 class="text-xl font-bold">
                                    {{ user_name }}
                                </h1>
                                <p class="italic text-gray-700">
                                    samseng.shop
                                </p>
                                <div class="mt-6 flex flex-wrap gap-4 justify-center">
                                    <button @click="handleLogout()"
                                        class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                                        Đăng xuất
                                    </button>
                                    <button v-if="!isInfo" @click="handleIsInfo()"
                                        class="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded">
                                        Thông tin 📝
                                    </button>
                                    <button v-if="isInfo" @click="handleIsInfo()"
                                        class="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded">
                                        Đơn hàng 📦
                                    </button>
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
                    <div v-if="!isInfo" class="col-span-4 relative sm:col-span-9">
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
                                            <button v-if="`${tabActive}` == '1'" @click="handleOrderCancel(item)"
                                                class="bg-red-500 mt-2 text-sm text-white px-3 py-2 rounded-lg ">
                                                Hủy đơn
                                            </button>
                                        </div>
                                        <div v-if="`${tabActive}` == '-1'">
                                            <span class='italic'>Lý do hủy:</span> '{{ item?.note }}'
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
                                        <div v-for="(i, j) in [0, 0, 0, 0, 0, 0]" :key="j"
                                            class="lg:h-64 h-48 w-full flex gap-x-5">
                                            <div class="h-full rounded-lg w-48 bg-gray-100">
                                            </div>
                                            <div class="mt-3 *:h-3 *:mt-3 *:bg-gray-100 *:rounded-lg">
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
                    <div v-if="isInfo" class="col-span-4 relative sm:col-span-9">
                        <div class="bg-white shadow rounded-lg p-6 min-h-[100vh]">
                            <div>
                                <p class="text-center text-xl lg:text-2xl font-bold my-5">Thông Tin Của Bạn</p>
                            </div>
                            <div class="grid grid-cols-1 gap-3 gap-x-10 lg:px-20 lg:grid-cols-2">

                                <div class="mb-4">
                                    <label class="block text-gray-700 text-sm font-bold mb-2">
                                        Tên người dùng
                                    </label>
                                    <input v-model="user_name"
                                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type="text" placeholder="Tên người dùng">
                                </div>
                                <div class="mb-4">
                                    <label class="block text-gray-700 text-sm font-bold mb-2">
                                        Địa chỉ - Tỉnh, Thành phố
                                    </label>
                                    <input v-model="user_province"
                                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type="text" placeholder="Tỉnh, Thành Phố">
                                </div>
                                <div class="mb-4">
                                    <label class="block text-gray-700 text-sm font-bold mb-2">
                                        Địa chỉ - Quận, Huyện
                                    </label>
                                    <input v-model="user_distrist"
                                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type="text" placeholder="Quận, Huyện">
                                </div>
                                <div class="mb-4">
                                    <label class="block text-gray-700 text-sm font-bold mb-2">
                                        Địa chỉ - Xã, Phường
                                    </label>
                                    <input v-model="user_wards"
                                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type="text" placeholder="Xã, Phường">
                                </div>
                                <div class="mb-4">
                                    <label class="block text-gray-700 text-sm font-bold mb-2">
                                        Địa chỉ - Số nhà, đường
                                    </label>
                                    <input v-model="user_address"
                                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type="text" placeholder="Số nhà, đường">
                                </div>
                                <div class="mb-4">
                                    <label class="block text-gray-700 text-sm font-bold mb-2">
                                        Số điện thoại
                                    </label>
                                    <input v-model="user_phone"
                                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type="text" placeholder="Số điện thoại">
                                </div>

                                <div :class="`${showChangePassword ? ' hidden ' : ''} mb-4`">
                                    <label class="block text-gray-700 text-sm font-bold mb-2">
                                        Mật khẩu mới
                                    </label>
                                    <div v-if="!showPassword" class="relative">
                                        <input
                                            class="shadow appearance-none border rounded w-full py-2 px-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            type="password" v-model="user_password" placeholder="Nhập mật khẩu mới">
                                        <span @click="handleShowPassword()"
                                            class="absolute cursor-pointer top-2/4 right-2 px-3 bg-white rounded -translate-y-2/4">🙈</span>
                                    </div>
                                    <div v-if="showPassword" class="relative">
                                        <input
                                            class="shadow appearance-none border rounded w-full py-2 px-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            type="text" v-model="user_password" placeholder="Nhập mật khẩu mới">
                                        <span @click="handleShowPassword()"
                                            class="absolute cursor-pointer top-2/4 right-2 px-3 bg-white rounded -translate-y-2/4">🙉</span>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-4 mt-3 lg:px-20">
                                <button @click="handleChangeInfo()"
                                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline"
                                    type="button">
                                    Lưu
                                </button>
                                <!-- <button @click="handleShowChangePassword()"
                                    class="ms-2 text-sm text-gray-600 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="button">
                                    {{ showChangePassword ? 'Thay mật khẩu?' : 'Bỏ Thay mật khẩu' }}
                                </button> -->
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
            showPassword: true,
            isInfo: false,
            userInfo: null,
            showChangePassword: false,
            key: '#',
            tab: {
                '1': { text: 'Chờ Duyệt', value: [] },
                '2': { text: 'Đang Giao', value: [] },
                '3': { text: 'Đã Giao', value: [] },
                '4': { text: 'Thất Bại', value: [] },
                '-1': { text: 'Đã hủy', value: [] },
            },

            user_name: '',
            user_phone: '',
            user_province: "",
            user_distrist: "",
            user_wards: "",
            user_password: "",
            user_address: "",
        }
    },

    async created() {
        await this.getCustomerInfo();
        const address = this.userInfo?.address?.split('$tach_ra$');
        this.user_name = this.userInfo?.customer_name;
        this.user_phone = this.userInfo?.phone;
        this.user_password = this.userInfo?.password;
        try {
            this.key = this.userInfo?.customer_name?.split(' ').pop()[0]
        }
        catch (e) {

        }
        try {
            this.user_province = address[0];
            this.user_distrist = address[1];
            this.user_wards = address[2];
            this.user_address = address[3];
        } catch (e) {

        }


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
        handleShowPassword() {
            this.showPassword = !this.showPassword;
        },
        handleShowChangePassword() {
            this.showChangePassword = !this.showChangePassword;
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
        async handleIsInfo() {
            this.isInfo = !this.isInfo;
        },
        async handleChangeInfo() {


            const att = {
                'id': Cookies.get('SSID'),
                'customer_name': this.user_name,
                'phone': this.user_phone,
                'address': this.user_province + '$tach_ra$' + this.user_distrist + '$tach_ra$' + this.user_wards + this.user_address + '$tach_ra$' + this.user_phone
            }

            if (this.user_password) {
                att.password = this.user_password;
            }

            const save = await useChangeInfo(att);
            if (save?.success) {
                await this.getCustomerInfo();
                return alert("Đã lưu!");
            } else {
                return alert("Thất bại, có thể do số điện thoại trùng hoặc không thay đổi!");
            }
        },
        async handleOrderCancel(item) {
            const request = {
                ids: item?.order_id
            };
            const response = await useOrderCancel(request);
            if (response?.success) {
                this.tab = await {
                    '1': { text: 'Chờ Duyệt', value: [] },
                    '2': { text: 'Đang Giao', value: [] },
                    '3': { text: 'Đã Giao', value: [] },
                    '4': { text: 'Thất Bại', value: [] },
                    '-1': { text: 'Đã hủy', value: [] },
                }

                const data = await useCustomer();
                data?.data?.map((item, index) => {
                    this.tab[`${item?.status}`]?.value?.push(item);
                });

                return alert("Đã hủy đơn hàng thành công!");


            } else {
                return alert("Thất bại, vui lòng thử lại!");
            }
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
                    '-1': { text: 'Đã hủy', value: [] },
                }

                const data = await useCustomer();
                data?.data?.map((item, index) => {
                    this.tab[`${item?.status}`]?.value?.push(item);
                });
                this.isLoading = false;
            }
        },
        // =============================================== Get Customer Info =============================================== 
        async getCustomerInfo() {
            const id = Cookies.get('SSID');
            this.userInfo = await useCustomerInfo({ 'id': id });
        },
    },

    async setup() {
        const baseImageURL = (await useBaseURL()).value.baseURLImage
        return {
            baseImageURL
        }
    }
})
</script>