<template>
    <div>
        <div class="" v-motion :initial="{
            opacity: 0,
            y: 100,
        }" :enter="{
            opacity: 1,
            y: 0,
        }" :leave="{
            y: -100,
            opacity: 0,
        }" v-if="!isLoading && dataProduct.length != 0">
            <section class="text-gray-700 body-font overflow-hidden bg-white">
                <div class="container px-5 pb-3 pt-16 mx-auto">
                    <div class="lg:w-4/5 mx-auto flex flex-wrap justify-center">
                        <div class="lg:w-2/4 ">
                            <div class="lg:px-32 px-10 w-full relative">
                                <figure class="pb-24 w-full">
                                    <img v-if="dataProduct[tabActive]?.images?.length" alt="ecommerce"
                                        class="h-80 mx-auto object-cover object-center rounded"
                                        :src="baseImageURL + dataProduct[tabActive]?.images[imageActicve]">
                                </figure>
                                <div class="mt-3 product absolute -bottom-0 w-full left-0">
                                    <Swiper :navigation="true" :modules="modules" :spaceBetween="10" :breakpoints="{
                                        '0': {
                                            slidesPerView: 4,
                                            spaceBetween: 10,
                                        },
                                        '640': {
                                            slidesPerView: 4,
                                            spaceBetween: 10,
                                        },
                                        '768': {
                                            slidesPerView: 4,
                                            spaceBetween: 20,
                                        },
                                        '1024': {
                                            slidesPerView: 5,
                                            spaceBetween: 20,
                                        },
                                    }">
                                        <SwiperSlide v-if="dataProduct[tabActive]?.images?.length"
                                            v-for="(item, index) in dataProduct[tabActive]?.images" :key="index">
                                            <button @click="slideTo(index)"
                                                :class="(imageActicve == index ? 'border rounded border-gray-700  ' : ' hover:border  hover:text-gray-500') + ' w-full flex justify-center'">
                                                <img class="h-20 py-2" :src="baseImageURL + item" alt="">
                                            </button>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>

                        </div>
                        <div class="lg:w-2/4 w-full lg:pl-10 lg:pb-6 mt-6 lg:mt-0">
                            <h2 class="text-sm title-font text-gray-500 uppercase tracking-widest">
                                {{ dataProduct[tabActive]?.category?.category_name }}</h2>
                            <h1 class="text-gray-900 mt-3 text-3xl title-font font-medium mb-1">
                                {{ dataProduct[tabActive]?.product_name }}</h1>
                            <div class="flex mt-3 mb-4">
                                <span class="flex items-center">
                                    <span v-for="(item, index) in [0, 0, 0, 0, 0]" :key="index">
                                        <svg :fill="index < dataProduct[tabActive]?.rating ? 'currentColor' : 'none'"
                                            stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                            <path
                                                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
                                            </path>
                                        </svg>
                                    </span>
                                    <span class="text-gray-600 ml-3">{{ dataProduct[tabActive].total_rating }}
                                        Reviews</span>
                                </span>
                            </div>
                            <p class="mt-2">Đã bán: {{ dataProduct[tabActive]?.sold }}</p>
                            <p class="mt-1">Trạng thái: {{ Number(dataProduct[tabActive]?.quantity) > 0 ? 'Còn hàng' :
                                'Hết hàng' }}
                            </p>

                            <p class="leading-relaxed text-justify"> </p>
                            <div class=" mt-2 mb-5 pb-3 items-center border-b-2 border-gray-200">
                                <div class="flex w-full">
                                    <span class="mr-3">Màu sắc: </span>

                                    <button v-for="(item, index) in dataProduct" :key="index"
                                        :style="`background-color: ${item.color.code};`" @click="tabTo(index)"
                                        class="border-2 relative border-gray-300 me-4 rounded-full w-5 h-5">
                                        <span v-if="index == tabActive"
                                            class="absolute -bottom-3 -translate-y-full left-2/4 -translate-x-2/4"
                                            name="md-arrowdropup-twotone" color="black" scale="0.9">
                                            <svg width="5" height="5" viewBox="0 -4.5 20 20" version="1.1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000">
                                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round"
                                                    stroke-linejoin="round"></g>
                                                <g id="SVGRepo_iconCarrier">
                                                    <title>arrow_up [#337]</title>
                                                    <desc>Created with Sketch.</desc>
                                                    <defs> </defs>
                                                    <g id="Page-1" stroke="none" stroke-width="1" fill="none"
                                                        fill-rule="evenodd">
                                                        <g id="Dribbble-Light-Preview"
                                                            transform="translate(-260.000000, -6684.000000)"
                                                            fill="#000000">
                                                            <g id="icons" transform="translate(56.000000, 160.000000)">
                                                                <path
                                                                    d="M223.707692,6534.63378 L223.707692,6534.63378 C224.097436,6534.22888 224.097436,6533.57338 223.707692,6533.16951 L215.444127,6524.60657 C214.66364,6523.79781 213.397472,6523.79781 212.616986,6524.60657 L204.29246,6533.23165 C203.906714,6533.6324 203.901717,6534.27962 204.282467,6534.68555 C204.671211,6535.10081 205.31179,6535.10495 205.70653,6534.69695 L213.323521,6526.80297 C213.714264,6526.39807 214.346848,6526.39807 214.737591,6526.80297 L222.294621,6534.63378 C222.684365,6535.03868 223.317949,6535.03868 223.707692,6534.63378"
                                                                    id="arrow_up-[#337]"> </path>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                        </span>
                                        <span v-if="index == tabActive"
                                            class="absolute -top-3 rotate-180 translate-y-full left-2/4 -translate-x-2/4"
                                            name="md-arrowdropup-twotone" color="black" scale="0.9">
                                            <svg width="5" height="5" viewBox="0 -4.5 20 20" version="1.1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000">
                                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round"
                                                    stroke-linejoin="round"></g>
                                                <g id="SVGRepo_iconCarrier">
                                                    <title>arrow_up [#337]</title>
                                                    <desc>Created with Sketch.</desc>
                                                    <defs> </defs>
                                                    <g id="Page-1" stroke="none" stroke-width="1" fill="none"
                                                        fill-rule="evenodd">
                                                        <g id="Dribbble-Light-Preview"
                                                            transform="translate(-260.000000, -6684.000000)"
                                                            fill="#000000">
                                                            <g id="icons" transform="translate(56.000000, 160.000000)">
                                                                <path
                                                                    d="M223.707692,6534.63378 L223.707692,6534.63378 C224.097436,6534.22888 224.097436,6533.57338 223.707692,6533.16951 L215.444127,6524.60657 C214.66364,6523.79781 213.397472,6523.79781 212.616986,6524.60657 L204.29246,6533.23165 C203.906714,6533.6324 203.901717,6534.27962 204.282467,6534.68555 C204.671211,6535.10081 205.31179,6535.10495 205.70653,6534.69695 L213.323521,6526.80297 C213.714264,6526.39807 214.346848,6526.39807 214.737591,6526.80297 L222.294621,6534.63378 C222.684365,6535.03868 223.317949,6535.03868 223.707692,6534.63378"
                                                                    id="arrow_up-[#337]"> </path>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                        </span>
                                        <span v-if="index == tabActive"
                                            class="absolute top-2/4 -translate-y-2/4 rotate-90 -left-1/4 -translate-x-2/4"
                                            name="md-arrowdropup-twotone" color="black" scale="0.9">
                                            <svg width="5" height="5" viewBox="0 -4.5 20 20" version="1.1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000">
                                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round"
                                                    stroke-linejoin="round"></g>
                                                <g id="SVGRepo_iconCarrier">
                                                    <title>arrow_up [#337]</title>
                                                    <desc>Created with Sketch.</desc>
                                                    <defs> </defs>
                                                    <g id="Page-1" stroke="none" stroke-width="1" fill="none"
                                                        fill-rule="evenodd">
                                                        <g id="Dribbble-Light-Preview"
                                                            transform="translate(-260.000000, -6684.000000)"
                                                            fill="#000000">
                                                            <g id="icons" transform="translate(56.000000, 160.000000)">
                                                                <path
                                                                    d="M223.707692,6534.63378 L223.707692,6534.63378 C224.097436,6534.22888 224.097436,6533.57338 223.707692,6533.16951 L215.444127,6524.60657 C214.66364,6523.79781 213.397472,6523.79781 212.616986,6524.60657 L204.29246,6533.23165 C203.906714,6533.6324 203.901717,6534.27962 204.282467,6534.68555 C204.671211,6535.10081 205.31179,6535.10495 205.70653,6534.69695 L213.323521,6526.80297 C213.714264,6526.39807 214.346848,6526.39807 214.737591,6526.80297 L222.294621,6534.63378 C222.684365,6535.03868 223.317949,6535.03868 223.707692,6534.63378"
                                                                    id="arrow_up-[#337]"> </path>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                        </span>
                                        <span v-if="index == tabActive"
                                            class="absolute  top-2/4 -translate-y-2/4 rotate-[270deg] -right-1/4 translate-x-2/4"
                                            name="md-arrowdropup-twotone" color="black" scale="0.9">
                                            <svg width="5" height="5" viewBox="0 -4.5 20 20" version="1.1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000">
                                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round"
                                                    stroke-linejoin="round"></g>
                                                <g id="SVGRepo_iconCarrier">
                                                    <title>arrow_up [#337]</title>
                                                    <desc>Created with Sketch.</desc>
                                                    <defs> </defs>
                                                    <g id="Page-1" stroke="none" stroke-width="1" fill="none"
                                                        fill-rule="evenodd">
                                                        <g id="Dribbble-Light-Preview"
                                                            transform="translate(-260.000000, -6684.000000)"
                                                            fill="#000000">
                                                            <g id="icons" transform="translate(56.000000, 160.000000)">
                                                                <path
                                                                    d="M223.707692,6534.63378 L223.707692,6534.63378 C224.097436,6534.22888 224.097436,6533.57338 223.707692,6533.16951 L215.444127,6524.60657 C214.66364,6523.79781 213.397472,6523.79781 212.616986,6524.60657 L204.29246,6533.23165 C203.906714,6533.6324 203.901717,6534.27962 204.282467,6534.68555 C204.671211,6535.10081 205.31179,6535.10495 205.70653,6534.69695 L213.323521,6526.80297 C213.714264,6526.39807 214.346848,6526.39807 214.737591,6526.80297 L222.294621,6534.63378 C222.684365,6535.03868 223.317949,6535.03868 223.707692,6534.63378"
                                                                    id="arrow_up-[#337]"> </path>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                        </span>
                                    </button>

                                </div>
                                <div class="w-full">
                                    <p class="mb-5 font-semibold mt-3">Quyền lợi tại Samseng.shop</p>
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
                                </div>
                            </div>

                            <div class="flex  justify-between">
                                <span class="title-font font-medium italic text-2xl text-gray-900">
                                    <p v-if="Number(dataProduct[tabActive]?.discount) != 0"
                                        class="text-gray-500 text-base"><del>{{
                                            Number(dataProduct[tabActive]?.price).toLocaleString()
                                        }}</del><sup>vnđ</sup></p>
                                    <p class="text-lg text-gray-500">Chỉ còn: <span class="text-red-600 font-bold">{{
                                        (Number(dataProduct[tabActive]?.price) -
                                            Number(dataProduct[tabActive]?.price) *
                                            Number(dataProduct[tabActive]?.discount) / 100).toLocaleString()
                                    }}<sup>vnđ</sup></span></p>
                                </span>
                                <p>
                                    <button v-if="Number(dataProduct[tabActive]?.quantity) > 0"
                                        @click="addToCart(dataProduct[tabActive])"
                                        class="flex ml-auto text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-green-700 rounded">
                                        Thêm vào giỏ hàng 🛒
                                    </button>
                                    <button disabled v-if="Number(dataProduct[tabActive]?.quantity) <= 0"
                                        class="flex ml-auto text-white bg-gray-500 border-0 py-2 px-6 focus:outline-none rounded">
                                        Hết hàng
                                    </button>
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <main class="w-full gap-x-5 grid lg:grid-cols-5 grid-cols-1 lg:px-48 px-5 min-h-screen">
                <section v-if="dataPost" class="col-span-full">
                    <div v-html="dataPost?.content" class="no-tailwind">
                    </div>
                </section>
            </main>
        </div>
        <div v-if="isLoading" class='text-center'>
            loading...
        </div>
        <div v-if="!isLoading && dataProduct.length == 0" class="text-center">
            Không có sản phẩm này - <NuxtLink to="/" class="text-blue-500">Trang Chủ</NuxtLink>
        </div>
    </div>
</template>

<style>
@media (min-width: 0px) {

    /* các CSS hiệu lực khi màn hình từ 1200px trở đi*/
    .product .swiper-button-prev::after,
    .product .swiper-button-next::after {
        color: rgb(0, 0, 0) !important;
        font-size: 15px !important;
        font-weight: bold !important;
        background-color: white !important;
        padding: 10px 5px !important;
        border-radius: 5px !important;
    }
}
</style>
<script lang="js">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from 'swiper/modules';

import "swiper/css"
import 'swiper/css/navigation';

import Cookie from 'js-cookie'

export default defineNuxtComponent({
    components: {
        Swiper,
        SwiperSlide,
        Navigation
    },
    data() {
        return {
            tabActive: 0,
            imageActicve: 0,
            dataProduct: null,
            isLoading: true,
            baseImageURL: '/',
            dataPost: null,
            post_id: null,
        }
    },
    async created() {
        const id = await this.$route.query.id;
        const data = (await useProduct(id)).value;
        this.dataProduct = data.data;

        this.post_id = this.dataProduct[this.tabActive]?.post_id;
        if (this.post_id) {
            this.dataPost = await usePost(this.post_id);
        }

        this.isLoading = false;


    },

    async setup() {
        const baseImageURL = (await useBaseURL()).value.baseURLImage
        return {
            modules: [Navigation],
            baseImageURL
        };
    },
    methods: {
        slideTo(value) {
            return this.imageActicve = value;
        },
        tabTo(value) {
            this.imageActicve = 0;
            return this.tabActive = value;
        },
        async addToCart(product) {
            const customer_id = Cookie.get('SSID');
            if (customer_id) {
                let action = 'create';
                const request = {
                    action: action,
                    customer_id: customer_id,
                    price: product?.price,
                    product_id: product?.product_id,
                    quantity: 1,
                    status: 0,
                    payment_date: ''
                }
                useChangeCart(request);

                const data = (await useGetCart()).value
                alert('Thêm vào giỏ hàng thành công')
            }else{
                this.$router.push('/login')
            }
        }
    }
})
</script>
