<script setup lang="ts">
import { ref, watch } from 'vue'
import { useScroll } from '@vueuse/core'
import { Text3D } from "@tresjs/cientos";
import { BasicShadowMap, SRGBColorSpace, NoToneMapping } from 'three';

let textRotateZ = useState('textRotateZ', () => 0); // 1.575
let textRotateY = useState('textRotateY', () => 0);

let textPositionZ = useState('textPositionZ', () => 0);
let textPositionX = useState('textPositionX', () => 0);

let textColor = useState('textColor', () => '#ffff33');

let camera = useState('camera', () => 5);
let scrollY = useState('scrollY', () => 0);

let lightX = useState('lightX', () => 20);
let loopLightX_ = useState('loopLightX_', () => true);
let _loopLightX = useState('_loopLightX', () => true);

let displayAbout = useState('displayAbout', () => false);

onMounted(() => {
    _loopLightX.value = loopLightX_.value = true;
    const light = setInterval(() => {
        if (lightX.value > -20 && loopLightX_.value == true) {
            lightX.value -= 0.4;
        } else if (_loopLightX.value == true) {
            loopLightX_.value = false;
            lightX.value += 0.4;
            if (lightX.value >= 0) {
                lightX.value = 0;
                _loopLightX.value = false;
            }
        }
        else {
            clearInterval(light);
        }
    }, 20);
})

// ===============================================================

const { x: windowX, y: windowY } = useScroll(window)

const previousWindowY = ref(0)

watch(windowY, (newWindowY) => {
    scrollY.value = -newWindowY / 150;


    if (newWindowY > previousWindowY.value) {
        if (textRotateZ.value < 1.575) {
            if ((textRotateZ.value + newWindowY / 3000) < 1.575) {
                textRotateZ.value += newWindowY / 3000;
            } else {
                textRotateZ.value = 1.575;
            }
        }


    } else if (newWindowY < previousWindowY.value) {
        if (scrollY.value >= -4.6) {
            if ((textRotateZ.value - 0.046) > 0) {
                textRotateZ.value -= 0.046;

            } else {
                textRotateZ.value = 0;
            }
        }

    }
    previousWindowY.value = newWindowY;


    if (-newWindowY / 120 > -5.5) {
        textPositionZ.value = -newWindowY / 200;
    }


    if (-newWindowY / 120 > -5.5) {
        textPositionX.value = -newWindowY / 120;

    }

    if (-newWindowY / 120 > -5.5) {
        if (textRotateY.value < 12.5)
            textRotateY.value = newWindowY / 100;
        else
            textRotateY.value = 12.5;
    }


    if (scrollY.value <= -4.567) {
        textRotateZ.value = 1.575;
        textPositionZ.value = -3.265;
        textPositionX.value = -5.442;
        textRotateY.value = 6.530;
        displayAbout.value = true;
    } else {
        displayAbout.value = false;;

    }
    if (newWindowY == 0) {
        textRotateZ.value = 0;
        textPositionZ.value = 0;
        textPositionX.value = 0;
        textRotateY.value = 0;
    }
});

definePageMeta({
    layout: "no-layout",
});
const about = [
    {
        isTitle: true,
        content: "Giới thiệu về chúng tôi"
    },
    {
        content: "Chào mừng bạn đến với SAMSENG, nguồn cung cấp hàng đầu cho tất cả các sản phẩm điện tử. Chúng tôi cam kết mang đến cho bạn những sản phẩm điện tử tốt nhất, với trọng tâm là chất lượng, dịch vụ khách hàng và tính độc đáo."
    },
    {
        content: `Chúng tôi hy vọng bạn sẽ thích các sản phẩm của chúng tôi như chúng tôi thích cung cấp chúng cho bạn. Nếu bạn có bất kỳ câu hỏi hoặc nhận xét nào, xin đừng ngần ngại liên hệ với chúng tôi.`
    },
    {
        content: `Trân trọng!`
    },
    {
        content: `Nguyễn Văn Tùng, Người sáng lập`
    },
    {
        isTitle: true,
        content: `Sứ Mệnh Của Chúng Tôi`,
    },
    {
        content: `Sứ mệnh của chúng tôi là cung cấp các sản phẩm chất lượng cao mang lại sự hài lòng và tiện lợi cho cuộc sống của khách hàng. Chúng tôi mong muốn xây dựng mối quan hệ lâu dài với khách hàng bằng cách cung cấp dịch vụ khách hàng xuất sắc và các sản phẩm sáng tạo.`
    },
    {
        isTitle: true,
        content: `Địa chỉ:`
    },
    {
        content: `📍 Số 9 - Tiên Sơn - Tiên Cát - Việt Trì - Phú Thọ`
    },
    {
        content: `☎ +84 987 654 321`
    }
]
</script>

<template>
    <ClientOnly>
        <div style="background-color: black; overflow: hidden;">
            <div class="about-menu">
                <HeaderComponent />
            </div>
            <div class="text-white text-justify p-5">
                <div class="absolute top-0 left-0  w-screen h-screen">
                        <Heart />
                    </div>

                    <div v-for="(item, index) in about" :key="index" v-motion :initial="{
                        opacity: 0,
                        y: -100,
                    }" :enter="{
                        y: 0,
                        opacity: 1,

                    }" :delay="index * 100">
                        <p v-if="item.isTitle" :class="`mb-5 ${index != 0 ? ' mt-5 ' : ''} text-xl font-bold`">
                            {{ item.content }}
                        </p>
                        <p v-else class="mb-3">
                            {{ item.content }}
                        </p>
                    </div>
            </div>
            <div class="hidden lg:block">

                <div id="ok" class="h-[200vh] bg-black w-screen">

                </div>

                <div v-if="displayAbout"
                    class="fixed top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-white z-30 text-justify">

                    <div class="absolute top-0 left-0  w-screen h-screen">
                        <Heart />
                    </div>

                    <div v-for="(item, index) in about" :key="index" v-motion :initial="{
                        opacity: 0,
                        y: -100,
                    }" :enter="{
                        y: 0,
                        opacity: 1,

                    }" :delay="index * 100">
                        <p v-if="item.isTitle" :class="`mb-5 ${index != 0 ? ' mt-5 ' : ''} text-xl font-bold`">
                            {{ item.content }}
                        </p>
                        <p v-else class="mb-3">
                            {{ item.content }}
                        </p>
                    </div>

                </div>

                <div class="fixed top-0 left-0 w-screen h-screen" v-motion :initial="{
                    opacity: 0,
                    y: -100,
                }" :enter="{
                    y: 0,
                    opacity: 1,

                }" :duration="5000">
                    <TresCanvas :shadows="true" :shadow-map-type="BasicShadowMap" :tone-mapping="NoToneMapping"
                        :output-color-space="SRGBColorSpace" :alpha="false" window-size clear-color="black">
                        <TresPerspectiveCamera :position="[0, 0, camera]" />
                        <!-- <OrbitControls /> -->
                        <Suspense>
                            <Text3D :position="[textPositionX, 0, textPositionZ]"
                                :rotation="[0, textRotateY, textRotateZ]"
                                font="https://raw.githubusercontent.com/Tresjs/assets/main/fonts/FiraCodeRegular.json">
                                S A M S E N G
                                <TresMeshStandardMaterial :color="textColor" />
                            </Text3D>
                        </Suspense>
                        <TresDirectionalLight :args="['white', 3]" :position="[lightX, 1, 1]" />
                    </TresCanvas>
                </div>
            </div>
        </div>
    </ClientOnly>
</template>
<style>
.about-menu *:not(.form-search-lable, .form-search-lable *, .cart-counter) {
    color: #e6e60d !important;
    background-color: black !important;
}

.about-menu .cart-counter {
    color: white !important;
    background: red !important;
}
</style>


<!-- <div style="position: fixed; top: 0; right: 10px;color: white; z-index: 99;">
                <p style="padding: 0px 13px; border: 1px solid green;color: green; font-weight: 700;">
                <p> textPositionZ: {{ Number(textPositionZ).toFixed(3) }}</p>
                <p> textPositionX: {{ Number(textPositionX).toFixed(3) }}</p>
                <p> textRotateZ: {{ Number(textRotateZ).toFixed(3) }}</p>
                <p> textRotateY: {{ Number(textRotateY).toFixed(3) }}</p>
                </p>
            </div> -->