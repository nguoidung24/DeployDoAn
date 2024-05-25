<template>
    <div>
        <p class="m-14 mb-5 text-center font-bold  text-4xl">
            Sản Phẩm Nổi Bật
        </p>
        <div class="relative bg-gray-50 rounded-2xl pt-6" v-if="dataTab != null">
            <div class="font-semibold w-full text-lg text-center  lg:px-10 px-3" style="z-index: 99999;">
                <Swiper :navigation="true" :modules="modules" :spaceBetween="10" :breakpoints="{
                    '0': {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    '640': {
                        slidesPerView: 4,
                        spaceBetween: 5,
                    },
                    '1024': {
                        slidesPerView: 9,
                        spaceBetween: 5,
                    },
                }" class="Outstanding *:lg:justify-center" style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">
                    <SwiperSlide v-for="(item, index) in dataTab" :key="index">
                        <button @click="slideTo(index)"
                            :class="tabActive == index ? 'border-b-2 border-black' : ' hover:border-b-2  hover:text-gray-500'">{{
                                item?.name }}</button>
                    </SwiperSlide>
                </Swiper>

            </div>
            <div v-for="(item, index) in dataTab" :key="index">
                <div v-if="tabActive == index" v-motion :initial="{
                    opacity: 0,
                    y: 100,
                }" :enter="{
                    opacity: 1,
                    y: 0,
                }" :leave="{
                    y: -100,
                    opacity: 0,
                }" class="relative grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 p-6 gap-3 mb-2">
                    <div class='rounded-3xl text-black text-center overflow-hidden'>
                        <figure class="relative">
                            <img :src=" baseImageURL + item?.big_image" alt="">

                            <div class="w-full h-full peer/a absolute top-0 left-0">
                            </div>

                            <NuxtLink to="/"
                                class="absolute font-mono -bottom-full peer/btn peer-hover/a:bottom-10 hover:bottom-10 left-2/4 bg-black text-white lg:px-10 px-5 rounded-3xl lg:w-fit lg:text-base w-[70%] text-[13px] text-center duration-500 py-3 -translate-x-2/4">
                                {{ item?.button }}
                            </NuxtLink>
                            <p
                                class="absolute bottom-10 left-2/4 peer-hover/a:-bottom-full hover:-bottom-full peer-hover/btn:-bottom-full  -translate-x-2/4 font-bold text-xl transition-all duration-200">
                                {{ item?.big_text }}
                            </p>
                        </figure>
                    </div>
                    <div class='rounded-3xl grid grid-cols-2 gap-3 grid-rows-2'>
                        <div v-for="(value, key) in item?.small_image?.split('$tach_ra$')" :key="key"
                            class="w-full h-full rounded-3xl  overflow-hidden">
                            <figure class="relative">
                                <img :src="baseImageURL + value" alt="">
                                <div class="w-full h-full peer/a absolute top-0 left-0">
                                </div>
                                <NuxtLink to="/"
                                    class="absolute font-mono -bottom-full peer/btn peer-hover/a:bottom-10 hover:bottom-10 left-2/4 bg-black text-white  px-5 rounded-3xl lg:w-fit  w-[70%] text-[13px] text-center duration-500 py-3 -translate-x-2/4">
                                    {{ item?.button }}
                                </NuxtLink>
                                <p
                                    class="absolute z-0 lg:bottom-10 transition-all duration-200 peer-hover/a:-bottom-full hover:-bottom-full peer-hover/btn:-bottom-full bottom-2 text-center font-bold lg:text-sm md:text-sm text-[12.5px] w-full lg:px-16 md:px-7 px-5 left-2/4 -translate-x-2/4">
                                    {{ item?.smaill_text.split('$tach_ra$')[key] }}
                                </p>
                            </figure>
                        </div>
                    </div>
                </div>
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
    props: ['dataTab'],
    data() {
        return {
            slideActive: 0,
            tabActive: 0
        }
    },
    created() {

    },
    async setup() {
        const baseImageURL = (await useBaseURL()).value.baseURLImage
        return {
            modules: [Navigation],
            baseImageURL
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

    .Outstanding .swiper-button-prev::after,
    .Outstanding .swiper-button-next::after {
        color: rgb(54, 52, 52) !important;
        font-size: 10px !important;
    }
}
</style>
