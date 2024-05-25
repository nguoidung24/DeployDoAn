<template>
    <div class="">
        <section class="text-gray-700 body-font overflow-hidden bg-white">
            <div class="container px-5 py-24 mx-auto">
                <div class="lg:w-4/5 mx-auto flex flex-wrap">
                    <div class="lg:w-2/4 ">
                        <div class="lg:px-32 px-10 relative">
                            <figure class="pb-24">
                                <img alt="ecommerce" class="w-full mx-auto object-cover object-center rounded"
                                    :src="dataTab[tabActive]">
                            </figure>
                            <div class="mt-3 product absolute -bottom-0 w-full left-0">
                                <Swiper :navigation="true" :modules="modules" :spaceBetween="10" slidesPerView="5">
                                    <SwiperSlide v-for="(item, index) in dataTab" :key="index">
                                        <button @click="slideTo(index)"
                                            :class="(tabActive == index ? 'border border-black  ' : ' hover:border  hover:text-gray-500') + ' w-full flex justify-center'">
                                            <img class="h-20 py-2" :src="item" alt="">
                                        </button>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>

                    </div>
                    <div class="lg:w-2/4 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 class="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
                        <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">Ai Phôn Pờ Rồ Mắc</h1>
                        <div class="flex mb-4">
                            <span class="flex items-center">
                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round"
                                    stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
                                    </path>
                                </svg>
                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round"
                                    stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
                                    </path>
                                </svg>
                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round"
                                    stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
                                    </path>
                                </svg>
                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round"
                                    stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
                                    </path>
                                </svg>
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                    <path
                                        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
                                    </path>
                                </svg>
                                <span class="text-gray-600 ml-3">4 Reviews</span>
                            </span>
                        </div>
                        <p class="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                            sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim
                            forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin
                            listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
                        <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                            <div class="flex">
                                <span class="mr-3">Màu sắc: </span>
                                <button
                                    class="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                                <button
                                    class="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                                <button
                                    class="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>
                            </div>
                            <div class="flex ml-6 items-center">

                            </div>
                        </div>
                        <div class="flex">
                            <span class="title-font font-medium text-2xl text-gray-900">$58.00</span>
                            <button
                                class="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                                Thêm vào giỏ hàng
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <main class="w-full lg:px-28 px-5 min-h-screen">

        </main>
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
export default defineNuxtComponent({
    components: {
        Swiper,
        SwiperSlide,
        Navigation
    },
    data() {
        return {
            dataTab: [
                'https://admin.thegioidilac.shop/image/product/samsung.png',
                'https://admin.thegioidilac.shop/image/product/1707125393.png',
                'https://admin.thegioidilac.shop/image/product/1714655790.png',
                'https://admin.thegioidilac.shop/image/product/samsung.png',
                'https://admin.thegioidilac.shop/image/product/samsung.png',
                'https://admin.thegioidilac.shop/image/product/samsung.png',
                'https://admin.thegioidilac.shop/image/product/samsung.png',
                'https://admin.thegioidilac.shop/image/product/samsung.png',
                'https://admin.thegioidilac.shop/image/product/samsung.png',
                'https://admin.thegioidilac.shop/image/product/samsung.png',
                'https://admin.thegioidilac.shop/image/product/samsung.png',
                'https://admin.thegioidilac.shop/image/product/samsung.png',
                'https://admin.thegioidilac.shop/image/product/samsung.png',
                'https://admin.thegioidilac.shop/image/product/samsung.png',
                'https://admin.thegioidilac.shop/image/product/samsung.png',
                'https://admin.thegioidilac.shop/image/product/samsung.png',
                'https://admin.thegioidilac.shop/image/product/samsung.png',
                'https://admin.thegioidilac.shop/image/product/samsung.png',
                'https://admin.thegioidilac.shop/image/product/samsung.png',
                'https://admin.thegioidilac.shop/image/product/samsung.png',
            ],
            tabActive: 0
        }
    },
    setup() {
        return {
            modules: [Navigation],
        };
    },
    methods: {
        slideTo(value) {
            return this.tabActive = value;
        }
    }
})
</script>
