<template>
    <div>
        <div class='relative'>
            <img class="opacity-0 hidden md:block lg:block"
                src="/4desktop.png"
                alt="">
            <img class="opacity-0 block md:hidden lg:hidden"
                src="/4mobile.png"
                alt="">
            <figure v-for="(item, index) in dataSlide" :key="index" class=" absolute w-full top-0 left-0 overflow-hidden"
                style="background-color: #f4f4f4;">

                <img v-motion :initial="{
                    opacity: 0,
                    x: 500,
                }" :enter="{
                    opacity: 1,
                    x: 0,
                    transition: {
                        duration: 700,
                    }
                }" v-if="tabActive == index" :src="item.srcDesktop" alt="" class="hidden md:block lg:block">

                <img v-motion :initial="{
                    opacity: 0,
                    x: 500,
                }" :enter="{
                    opacity: 1,
                    x: 0,
                    transition: {
                        duration: 700,
                    }
                }" v-if="tabActive == index" :src="item.srcMobile" alt="" class="block mx-auto md:hidden lg:hidden">


                <p v-motion :initial="{
                    opacity: 0,
                    x: -500,
                }" :enter="{
                    opacity: 1,
                    x: 0,
                    transition: {
                        duration: 700,
                        delay: 300
                    }
                }" v-if="tabActive == index" class="hidden md:block lg:block">
                    <span
                        class="block text-center absolute lg:bottom-36 bottom-28 text-3xl lg:text-5xl font-bold -translate-x-2/4 left-2/4">
                        {{ item?.title }}
                    </span>
                    <span class="block text-center absolute lg:bottom-24 bottom-14 text-lg -translate-x-2/4 left-2/4">{{
                        item.text
                        }}</span>
                    <NuxtLink
                        class="block text-center absolute lg:bottom-10 bottom-2 bg-black text-white px-5 py-2 rounded-3xl font-mono text-lg -translate-x-2/4 left-2/4"
                        :to="item.buttonLink">
                        {{ item.button }}
                    </NuxtLink>

                </p>

                <p v-motion :initial="{
                    opacity: 0,
                    x: -500,
                }" :enter="{
                    opacity: 1,
                    x: 0,
                    transition: {
                        duration: 700,
                        delay: 300
                    }
                }" v-if="tabActive == index" class="block md:hidden lg:hidden">
                    <span
                        class="block w-full px-4 text-center absolute bottom-52  text-4xl font-bold -translate-x-2/4 left-2/4">
                        {{ item?.title }}
                    </span>
                    <span class="block text-center absolute bottom-28  text-base -translate-x-2/4 left-2/4">{{ item.text
                        }}</span>
                    <NuxtLink
                        class="block text-center absolute bottom-10 bg-black text-white px-5 py-2 rounded-3xl font-mono text-sm -translate-x-2/4 left-2/4"
                        :to="item.buttonLink">
                        {{ item.button }}
                    </NuxtLink>

                </p>
            </figure>

            <div class="absolute top-10 text-black w-full left-2/4 -translate-x-2/4 ">
                <p class="text-4xl block text-center font-bold pb-6">
                    Di Động
                </p>
                <Swiper :navigation="true" :modules="modules" :spaceBetween="10" :breakpoints="{
                    '0': {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    '670': {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    '1024': {
                        slidesPerView: 6,
                        spaceBetween: 10,
                    },
                }" class="lg:*:justify-center">
                    <SwiperSlide v-for="(item, index) in dataSlide" :key="index" class="text-center">
                        <button @click="slideTo(index)"
                            :class="(tabActive == index ? 'border-b-2 border-black' : ' hover:border-b-2  hover:text-gray-500 ') + '  text-center font-semibold px-2 pb-1'"
                            style="background-color: #f4f4f4;">{{
                                item?.name }}</button>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </div>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from 'swiper/modules';

import "swiper/css"
import 'swiper/css/navigation';

export default defineNuxtComponent({
    components: {
        Swiper,
        SwiperSlide
    },
    props: ['dataBigSlider'],
    data() {
        return {
            slideActive: 0,
            tabActive: 0,
            dataSlide: [],
            baseImageURL: '',
        }
    },
    async created() {
        this.baseImageURL = (await useBaseURL()).value.baseURLImage

        await this.dataBigSlider.map((item, index) => {
            this.dataSlide.push({
                name: item.title,
                srcDesktop: this.baseImageURL + item.image.split('$tach_ra$')[0],
                srcMobile: this.baseImageURL + item.image.split('$tach_ra$')[1],
                title: item.subtitle,
                text: item.text,
                button: item.button,
                buttonLink: item.button_link
            })
        })
    },
    setup() {
        return {
            modules: [Navigation],
        };
    },
    methods: {
        slideTo(index) {
            this.tabActive = index
        }
    }
})
</script>

<style>
@media (min-width: 0px) {

    /* các CSS hiệu lực khi màn hình từ 1200px trở đi*/
    .swiper-button-prev::after,
    .swiper-button-next::after {
        color: rgb(46, 44, 44) !important;
        font-size: 20px !important;
    }
}
</style>

<!-- 
// {
    //     name: "Galaxy S24 | S24+",
    //     srcDesktop: "https://images.samsung.com/is/image/samsung/assets/vn/2401/home/HOME_E3_MX-KV_1440x810_pc.jpg?$1440_810_JPG$",
    //     srcMobile: "https://images.samsung.com/is/image/samsung/assets/vn/2401/home/HOME_E3_MX-KV_720x1280_mo.jpg?$720_1280_JPG$",
    //     title: "Galaxy S24 Ultra",
    //     text: "Ưu đãi đến 5 triệu đồng. Thu cũ đổi mới hỗ trợ thêm đến 5 triệu đồng.",
    //     button: "Mua ngay",
    //     buttonLink: "/"
    // },
    // {
    //     name: "Galaxy Z Flip5",
    //     srcDesktop: "https://images.samsung.com/is/image/samsung/assets/vn/home/2024/HOME_B5_MX-KV_1440X810_pc_default.jpg?$1440_810_JPG$",
    //     srcMobile: "https://images.samsung.com/is/image/samsung/assets/vn/home/2024/HOME_B5_MX-KV_720X1280_mo_default.jpg?$720_1280_JPG$",
    //     title: "Galaxy S24 Ultra",
    //     text: "Ưu đãi đến 5 triệu đồng. Thu cũ đổi mới hỗ trợ thêm đến 5 triệu đồng.",
    //     button: "Mua ngay",
    //     buttonLink: "/"
    // },
    // {
    //     name: "Galaxy Z Fold5",
    //     srcDesktop: "https://images.samsung.com/is/image/samsung/assets/vn/2401/home/HOME_E1E2_MX-KV_1440x810_pc.jpg?$1440_810_JPG$",
    //     srcMobile: "https://images.samsung.com/is/image/samsung/assets/vn/2401/home/HOME_E1E2_MX-KV_720x1280_mo.jpg?$720_1280_JPG$",
    //     title: "Galaxy S24 Ultra",
    //     text: "Ưu đãi đến 5 triệu đồng. Thu cũ đổi mới hỗ trợ thêm đến 5 triệu đồng.",
    //     button: "Mua ngay",
    //     buttonLink: "/"
    // }, -->