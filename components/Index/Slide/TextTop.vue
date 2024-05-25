<template>
    <div v-if="baseImageURL && data">
        <!-- ================================= DESKTOP ========================================= -->
        <div class="relative justify-center --- lg:flex md:flex hidden">
            <div class="absolute lg:top-28 top-5 left-2/4 -translate-x-2/4 z-50 text-center w-full">
                <p class="font-bold lg:text-3xl text-xl">{{ data?.subtitle }}</p>

                <p class="font-bold lg:text-4xl text-2xl">{{ data?.title }}</p>

                <div>
                    <p class="mt-3 text-lg" v-for="(item, index ) in data?.text?.split('$tach_ra$')" key="index">{{ item }}</p>
                </div>

                <NuxtLink to="/product/1169673124" class="inline-block mt-6 bg-black text-white rounded-3xl px-5 py-2 font-mono">
                    {{ data?.button }}
                </NuxtLink>
            </div>
            <figure>
                <img :src="baseImageURL+data?.image?.split('$tach_ra$')[0]" alt="">

            </figure>
        </div>
        <!-- ================================= MOBILE ========================================= -->
        <div class="relative justify-center --- lg:hidden md:hidden flex">
            <div class="absolute top-20 left-2/4 -translate-x-2/4 z-50 text-center w-full">
                <p class="font-bold text-xl w-full">{{ data?.subtitle }}</p>

                <p class="font-bold text-2xl">{{ data?.title }}</p>

                <div>
                    <p class="mt-5 text-lg" v-for="(item, index ) in data?.text?.split('$tach_ra$')">{{ item }}</p>
                </div>
                <NuxtLink to="/product/1169673124" class="inline-block mt-10 bg-black text-white rounded-3xl px-5 py-2 font-mono">
                    {{ data?.button }}
                </NuxtLink>
            </div>
            <figure class="w-full">
                <img class="w-full" :src="baseImageURL+data?.image?.split('$tach_ra$')[1]" alt="">
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