<template>
    <div v-if="baseImageURL && data">
        <!-- ================================= DESKTOP ========================================= -->
        <div class="relative justify-center --- lg:flex md:flex hidden">
            <div class="absolute top-2/4 lg:left-16 left-5 -translate-y-2/4 z-50 text-left lg:max-w-80 max-w-56">
                <p class="font-bold lg:text-5xl text-3xl">{{ data?.title }}</p>

                <div class="mt-8">
                    <p class=" lg:text-xl text-lg" v-for="(item, index) in data?.text?.split('$tach_ra$')">{{ item }}
                    </p>
                </div>
                <NuxtLink to="/product?id=1" class="inline-block mt-8 bg-black text-white rounded-3xl px-5 py-2 font-mono">
                    {{ data?.button }}
                </NuxtLink>
            </div>
            <figure>
                <img :src="baseImageURL + data?.image?.split('$tach_ra$')[0]" alt="">
            </figure>
        </div>
        <!-- ================================= MOBILE ========================================= -->

        <div class="relative justify-center --- lg:hidden md:hidden flex">
            <div class="absolute top-16 left-2/4 -translate-x-2/4 z-50 text-center w-full">
                <p class="font-bold text-4xl">{{ data?.title }}</p>

                <div class="mt-8">
                    <p class=" text-lg " v-for="(item, index) in data?.text?.split('$tach_ra$')">{{ item }}</p>
                </div>

                <NuxtLink to="/product?id=1" class="inline-block mt-8 bg-black text-white rounded-3xl px-5 py-2 font-mono">
                    {{ data?.button }}
                </NuxtLink>

            </div>
            <figure class="w-full">
                <img class="w-full" :src="baseImageURL + data?.image?.split('$tach_ra$')[1]" alt="">
            </figure>
        </div>
    </div>
</template>
<script>
export default defineNuxtComponent({
    props: ['data','baseImageURL'],
    created() {
    },

})
</script>