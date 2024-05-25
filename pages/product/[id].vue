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
                <div class="container px-5 py-20 mx-auto">
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
                        <div class="lg:w-2/4 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 class="text-sm title-font text-gray-500 tracking-widest">
                                {{ dataProduct[tabActive]?.category?.category_name }}</h2>
                            <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
                                {{ dataProduct[tabActive]?.product_name }}</h1>
                            <div class="flex mb-4">
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
                            <p class="leading-relaxed text-justify">Fam locavore kickstarter distillery. Mixtape
                                chillwave tumeric
                                sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw
                                denim
                                forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin
                                listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
                            <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                                <div class="flex">
                                    <span class="mr-3">Màu sắc: </span>

                                    <button v-for="(item, index) in dataProduct" :key="index"
                                        :style="`background-color: ${item.color.code};`" @click="tabTo(index)"
                                        class="border-2 relative border-gray-300 me-4 rounded-full w-6 h-6">
                                        <v-icon v-if="index == tabActive"
                                            class="absolute -bottom-full -translate-y-1/4 left-2/4 -translate-x-2/4"
                                            name="md-arrowdropup-twotone" color="black" scale="0.9"></v-icon>
                                        <v-icon v-if="index == tabActive"
                                            class="absolute -top-full rotate-180 translate-y-1/4 left-2/4 -translate-x-2/4"
                                            name="md-arrowdropup-twotone" color="black" scale="0.9"></v-icon>
                                        <v-icon v-if="index == tabActive"
                                            class="absolute top-2/4 -translate-y-2/4 rotate-90 -left-2/4 -translate-x-1/4"
                                            name="md-arrowdropup-twotone" color="black" scale="0.9"></v-icon>
                                        <v-icon v-if="index == tabActive"
                                            class="absolute  top-2/4 -translate-y-2/4 rotate-[270deg] -right-2/4 translate-x-1/4"
                                            name="md-arrowdropup-twotone" color="black" scale="0.9"></v-icon>
                                    </button>

                                </div>
                                <div class="flex ml-6 items-center">

                                </div>
                            </div>
                            <div class="flex justify-between">
                                <span class="title-font font-medium italic text-2xl text-gray-900">
                                    <p class="text-gray-500 text-base"><del>{{ Number(dataProduct[tabActive]?.price).toLocaleString() }}</del><sup>vnđ</sup></p>
                                    <p class="text-lg text-gray-500">Chỉ còn: <span class="text-red-600 font-bold">{{ Number(dataProduct[tabActive]?.price).toLocaleString() }}<sup>vnđ</sup></span></p>
                                </span>
                                <p>
                                    <button
                                        class="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                                        Thêm vào giỏ hàng
                                    </button>
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <main class="w-full gap-x-5 grid lg:grid-cols-5 grid-cols-1 lg:px-32 px-5 min-h-screen">
                <section class="col-span-2">
                    <h3 style="text-align: center;"><span style="font-size: 18pt;"><strong>Cấu h&igrave;nh Điện thoại
                                Tecno
                                Spark Go 2024</strong></span></h3>
                    <br>
                    <table style="border-collapse: collapse; width: 100%; height: 176.344px; border-width: 0px;"
                        border="1">
                        <colgroup>
                            <col style="width: 50%;">
                            <col style="width: 50%;">
                        </colgroup>
                        <tbody>
                            <tr style="height: 22.3906px;">
                                <td style="height: 22.3906px; border-width: 0px;">M&agrave;n h&igrave;nh:</td>
                                <td style="height: 22.3906px; border-width: 0px;"><span class="comma">IPS
                                        LCD</span><span class="comma">6.56"</span><span class="">HD+</span></td>
                            </tr>
                            <tr style="height: 22.3906px;">
                                <td style="height: 22.3906px; background-color: rgb(206, 212, 217); border-width: 0px;">
                                    Hệ
                                    điều h&agrave;nh:</td>
                                <td style="height: 22.3906px; background-color: rgb(206, 212, 217); border-width: 0px;">
                                    Android 13 (Go Edition)</td>
                            </tr>
                            <tr style="height: 22.3906px;">
                                <td style="height: 22.3906px; border-width: 0px;">Camera trước:</td>
                                <td style="height: 22.3906px; border-width: 0px;">8 MP</td>
                            </tr>
                            <tr style="height: 22.3906px; background-color: rgb(206, 212, 217);">
                                <td style="height: 22.3906px; border-width: 0px;">Chip:</td>
                                <td style="height: 22.3906px; border-width: 0px;">Unisoc T606</td>
                            </tr>
                            <tr style="height: 22.3906px;">
                                <td style="height: 22.3906px; border-width: 0px;">RAM:</td>
                                <td style="height: 22.3906px; border-width: 0px;">3 GB</td>
                            </tr>
                            <tr style="height: 54.3906px; background-color: rgb(206, 212, 217);">
                                <td style="height: 54.3906px; border-width: 0px;">
                                    <p class="lileft">Dung lượng lưu trữ:</p>
                                </td>
                                <td style="height: 54.3906px; border-width: 0px;">64 GB</td>
                            </tr>
                            <tr style="height: 10px;">
                                <td style="height: 10px; border-width: 0px;">
                                    <p class="lileft">Pin, Sạc:</p>
                                </td>
                                <td style="height: 10px; border-width: 0px;"><span class="comma">5000 mAh</span><span
                                        class="">10 W</span></td>
                            </tr>
                        </tbody>
                    </table>
                </section>
                <section class="col-span-3">
                    <div class="no-tailwind">
                        <h3>L&agrave; biểu tượng của sự vượt trội tr&ecirc;n thị trường di động,&nbsp;<a
                                title="Tham khảo điện thoại vivo V30e 5G 8GB tại Thegioididong.com"
                                href="https://www.thegioididong.com/dtdd/vivo-v30e-8gb" target="_blank"
                                rel="noopener">vivo
                                V30e 8GB</a>&nbsp;kết hợp tuyệt vời giữa thiết kế đẹp mắt v&agrave; c&ocirc;ng nghệ
                            ti&ecirc;n tiến. Với gam m&agrave;u cuốn h&uacute;t, m&agrave;n h&igrave;nh sắc n&eacute;t,
                            hiệu
                            suất mạnh mẽ, pin bền bỉ v&agrave; hệ thống camera h&agrave;ng đầu, sản phẩm n&agrave;y mang
                            lại
                            trải nghiệm điện thoại ho&agrave;n hảo cho mọi người trong thời đại số.</h3>
                        <h3>Thiết kế tối giản đậm chất hiện đại</h3>
                        <p>vivo V30e 5G ch&uacute; trọng v&agrave;o sự đơn giản v&agrave; tinh tế th&ocirc;ng qua hai
                            t&ocirc;ng m&agrave;u chủ đạo. M&agrave;u trắng &aacute;p dụng c&ocirc;ng nghệ phủ "Dreamy
                            Cloud", tạo hiệu ứng m&agrave;u sắc đa chiều giống như &aacute;nh nắng chiếu qua m&acirc;y,
                            mang
                            lại cảm gi&aacute;c mới mẻ v&agrave; tươi mới. M&agrave;u n&acirc;u lấy cảm hứng từ thời
                            trang
                            v&agrave; đồng hồ đắt gi&aacute;, &aacute;p dụng quy tr&igrave;nh phủ m&agrave;u gradient
                            v&agrave; hoa văn kẻ sọc tinh tế, thể hiện sự sang trọng v&agrave; c&aacute; t&iacute;nh của
                            người sử dụng.</p>
                        <p>
                            <a class="preventdefault"
                                href="https://cdn.tgdd.vn/Products/Images/42/323567/vivo-v30e-8gb-060524-105747.jpg"><img
                                    class="lazyloaded" title="vivo V30e 5G 8GB - M&agrave;u sắc"
                                    src="https://cdn.tgdd.vn/Products/Images/42/323567/vivo-v30e-8gb-060524-105747.jpg"
                                    alt="vivo V30e 5G 8GB - M&agrave;u sắc"
                                    data-src="https://cdn.tgdd.vn/Products/Images/42/323567/vivo-v30e-8gb-060524-105747.jpg" /></a>
                        </p>
                        <p>Hệ thống camera sau được thiết kế độc đ&aacute;o, lấy cảm hứng từ c&aacute;c d&ograve;ng đồng
                            hồ
                            cao cấp, mỗi chi tiết như v&agrave;nh bezel đều được chăm ch&uacute;t tỉ mỉ, tạo n&ecirc;n
                            một
                            sản phẩm với vẻ đẹp tinh tế.</p>
                        <p>
                            <a class="preventdefault"
                                href="https://cdn.tgdd.vn/Products/Images/42/323567/vivo-v30e-8gb-060524-105744.jpg"><img
                                    class="lazyloaded" title="vivo V30e 5G 8GB - Camera"
                                    src="https://cdn.tgdd.vn/Products/Images/42/323567/vivo-v30e-8gb-060524-105744.jpg"
                                    alt="vivo V30e 5G 8GB - Camera"
                                    data-src="https://cdn.tgdd.vn/Products/Images/42/323567/vivo-v30e-8gb-060524-105744.jpg" /></a>
                        </p>
                        <p>Thiết bị chỉ c&oacute; độ d&agrave;y 7.75 mm v&agrave; nặng khoảng 188 g cho phi&ecirc;n bản
                            m&agrave;u n&acirc;u, điều n&agrave;y nhấn mạnh sự mảnh mai v&agrave; thuận tiện trong việc
                            sử
                            dụng l&acirc;u d&agrave;i m&agrave; kh&ocirc;ng g&acirc;y mệt mỏi cho người d&ugrave;ng.</p>
                        <p>
                            <a class="preventdefault"
                                href="https://cdn.tgdd.vn/Products/Images/42/323567/vivo-v30e-8gb-060524-105749.jpg"><img
                                    class="lazyloaded" title="vivo V30e 5G 8GB - Mỏng nhẹ"
                                    src="https://cdn.tgdd.vn/Products/Images/42/323567/vivo-v30e-8gb-060524-105749.jpg"
                                    alt="vivo V30e 5G 8GB - Mỏng nhẹ"
                                    data-src="https://cdn.tgdd.vn/Products/Images/42/323567/vivo-v30e-8gb-060524-105749.jpg" /></a>
                        </p>
                        <p>vivo V30e 5G t&iacute;ch hợp thuật to&aacute;n Wet-Hand Touch, cho ph&eacute;p trải nghiệm
                            mượt
                            m&agrave; ngay cả khi tay ướt. Thuật to&aacute;n n&agrave;y nhận diện ch&iacute;nh
                            x&aacute;c
                            c&aacute;c thao t&aacute;c tr&ecirc;n m&agrave;n h&igrave;nh trong điều kiện ẩm ướt như khi
                            bạn
                            vừa rửa tay. Đồng thời, ti&ecirc;u chuẩn IP64 bảo vệ thiết bị khỏi nước bắn v&agrave; bụi
                            bẩn,
                            gi&uacute;p bạn thoải m&aacute;i sử dụng&nbsp;<a
                                title="Tham khảo điện thoại kinh doanh tại Thegioididong.com"
                                href="https://www.thegioididong.com/dtdd" target="_blank" rel="noopener">điện
                                thoại</a>&nbsp;trong điều kiện mưa nhỏ hoặc ẩm ướt m&agrave; kh&ocirc;ng cần lo lắng.
                        </p>
                        <p>
                            <a class="preventdefault"
                                href="https://cdn.tgdd.vn/Products/Images/42/323567/vivo-v30e-8gb-060524-105740.jpg"><img
                                    class="lazyloaded" title="vivo V30e 5G 8GB - Chống nước"
                                    src="https://cdn.tgdd.vn/Products/Images/42/323567/vivo-v30e-8gb-060524-105740.jpg"
                                    alt="vivo V30e 5G 8GB - Chống nước"
                                    data-src="https://cdn.tgdd.vn/Products/Images/42/323567/vivo-v30e-8gb-060524-105740.jpg" /></a>
                        </p>
                        <h3>M&agrave;n h&igrave;nh AMOLED, hiển thị m&agrave;u sắc trung thực</h3>
                        <p>M&agrave;n h&igrave;nh của vivo V30e 5G được trang bị c&ocirc;ng nghệ tấm nền AMOLED
                            ti&ecirc;n
                            tiến, với k&iacute;ch thước lớn 6.78 inch v&agrave; hỗ trợ độ ph&acirc;n giải Full HD+, mang
                            đến
                            h&igrave;nh ảnh sắc n&eacute;t v&agrave; chi tiết. Với khả năng hiển thị tới 1.07 tỷ
                            m&agrave;u
                            v&agrave; hỗ trợ dải m&agrave;u DCI P3, m&agrave;n h&igrave;nh n&agrave;y t&aacute;i tạo
                            m&agrave;u sắc một c&aacute;ch ch&iacute;nh x&aacute;c v&agrave; sống động, tạo ra trải
                            nghiệm
                            gần như thực tế cho người d&ugrave;ng.</p>
                    </div>

                </section>
            </main>
        </div>
        <div v-if="isLoading" class='text-center'>
            loading.......
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
            baseImageURL: '/'
        }
    },
    async created() {
        const id = await this.$route.params.id;
        const data = (await useProduct(id)).value;
        this.dataProduct = data.data;
        this.isLoading = false;

        console.log(data.data);
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
        }
    }
})
</script>
