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
</script>

<template>
    <ClientOnly>
        <div style="height: 500vh;background-color: black; overflow: hidden;">
            <div class="about-menu">
                <HeaderComponent />
            </div>
            <!-- <div style="position: fixed; top: 0; right: 10px;color: white; z-index: 99;">
                <p style="padding: 0px 13px; border: 1px solid green;color: green; font-weight: 700;">
                <p> textPositionZ: {{ Number(textPositionZ).toFixed(3) }}</p>
                <p> textPositionX: {{ Number(textPositionX).toFixed(3) }}</p>
                <p> textRotateZ: {{ Number(textRotateZ).toFixed(3) }}</p>
                <p> textRotateY: {{ Number(textRotateY).toFixed(3) }}</p>
                </p>
            </div> -->
            <div class="fixed top-0 lef-0 w-screen h-screen" v-motion :initial="{
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
                        <Text3D :position="[textPositionX, 0, textPositionZ]" :rotation="[0, textRotateY, textRotateZ]"
                            font="https://raw.githubusercontent.com/Tresjs/assets/main/fonts/FiraCodeRegular.json">
                            S A M S E N G
                            <TresMeshStandardMaterial :color="textColor" />
                        </Text3D>
                    </Suspense>
                    <TresDirectionalLight :args="['white', 3]" :position="[lightX, 1, 1]" />
                </TresCanvas>
            </div>
        </div>
    </ClientOnly>
</template>
<style>
.about-menu *:not(.form-search-lable, #default-search,  .cart-counter, .form-search-button) {
    background-color: transparent !important;
    color: #e6e60d !important;
}


.about-menu .cart-counter {
    color: white !important;
    background: red !important;
}
</style>
