<template>
    <div>
        <div v-if="dataSlide != null">
            <Swiper :hashNavigation="{
                watchState: true,
            }" :pagination="{
            clickable: true,
        }" :autoplay="{
            delay: 4848
        }" :modules="modules" @slideChange="onSlideChange" class="slider_1">
                <SwiperSlide v-for="(item, index) in dataSlide">
                    <IndexSlideTextTop v-if="item.type == 'text-top'" :baseImageURL="baseImageURL" :data="item" />
                    <IndexSlideVideo v-if="item.type == 'video'" :baseImageURL="baseImageURL" :data="item" />
                    <IndexSlideTextLeft v-if="item.type == 'text-left'" :baseImageURL="baseImageURL" :data="item" />
                </SwiperSlide>
            </Swiper>
        </div>
        <!-- <div v-else class="min-h-screen">
        </div> -->
    </div>
</template>

<style>
.slider_1 .swiper-pagination {
    position: absolute !important;
    width: fit-content !important;
    left: 50% !important;
    transform: translateX(-50%) !important;
    border: 1px solid #747474 !important;
    padding: 0px 10px 2px 10px !important;
    border-radius: 30px;
}

.slider_1 .swiper-pagination span {
    margin: 0 10px !important;
}

.slider_1 .swiper-pagination-bullet-active {
    background-color: #535353 !important;
}
</style>
<!-- ============================================ JAVA SCRIPT ===================================================== -->
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Autoplay } from 'swiper/modules';

import "swiper/css"
import 'swiper/css/pagination';


export default defineNuxtComponent({
    components: {
        Swiper,
        SwiperSlide
    },
    props: ['dataSlide'],
    data() {
        return {
            slideActive: 0,
            baseImageURL: ''
        }
    },
    async created(){    
        this.baseImageURL = (await useBaseURL()).value.baseURLImage
    },
    setup() {
        return {
            modules: [Pagination, Autoplay],
        };
    },
    mounted() {
        this.onSlideChange(0);
    },

    methods: {
        onSlideChange(swiper) {
            // this.slideActive = swiper.activeIndex;
            // console.log(this.slideActive);

            const videos = document.querySelectorAll('video');
            videos.forEach(video => {
                video.currentTime = 0;
                video.play();
            });
            videos.forEach(video => {
                video.addEventListener('ended', () => {
                    video.play();
                });
            });
        }
    }
})
</script>