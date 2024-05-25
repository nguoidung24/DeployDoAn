<template>
    <div>
        <p v-if="header" class="m-14 mb-5 text-center font-bold  text-4xl"
            style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
            {{ header }}
        </p>

        <div :class="`grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-x-5 gap-y-4 lg:px-0 px-3`">
            <div v-for="(item, index) in dataSuggestedProducts" key="index">
                <div class="mt-5 h-full" v-motion :initial="{
                    opacity: 0,
                    x: -100
                }" :visible-once="{
                    opacity: 1,
                    x: 0,
                    transition: {
                        duration: 500,
                        type: 'tween',
                        ease: 'easeOut',
                    }

                }" :delay="index * 100">
                    <div class=" rounded-2xl h-full overflow-hidden shadow-lg py-2">
                        <figure class="mt-2">
                            <img class="h-40 mx-auto" :src="baseImageURL + item.thumbnail"
                                alt="Sunset in the mountains">
                        </figure>

                        <div class="px-6 py-4 h-f">
                            <div class="font-bold text-lg text-center mb-2">{{ item?.product_name }}</div>
                            <p class="text-center text-gray-500 uppercase mb-3">{{item?.category?.category_name}}</p>
                            <p class="text-gray-700 text-sm flex gap-2 justify-center font-sans items-center">
                                <span class="font-semibold">Màu sắc:</span>
                                <span class="bg-gray-200 px-2 rounded-3xl" :style="`color:${item?.color?.code}`">
                                    {{ item?.color?.value }}
                                </span>
                            </p>
                            <p class="text-gray-700 mt-2 text-sm flex gap-2 justify-center font-sans items-center">
                                <span class="font-semibold">Đã bán:</span>
                                <span>
                                    {{ item?.sold }}
                                </span>
                            </p>
                            <p class="text-gray-700 mt-2 text-sm flex gap-2 justify-center font-sans items-center">
                                <span v-for="(i, j) in [0, 0, 0, 0, 0]" :key="j">
                                    <v-icon v-if="item.rating > j" name="io-star" scale="0.9" color="#d5c927"></v-icon>
                                    <v-icon v-else name="fa-regular-star" scale="0.9" color="#d5c927"></v-icon>
                                </span>
                                <span>
                                    ({{ item?.total_rating }})
                                </span>
                            </p>
                            <p class="text-center py-3 font-semibold"
                                style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
                                <del class="font-normal text-sm text-gray-500 italic">{{
                                    (Number(item.price)).toLocaleString() }}</del><sup
                                    class="font-normal text-sm text-gray-500 italic">đ</sup>
                                &nbsp;
                                <span class="text-red-700">
                                    {{ (Number(item.price) - Number(item.price) * Number(item.discount) /
                                        100).toLocaleString() }}<sup>đ</sup>
                                </span>
                            </p>
                            <!-- THAY PRODUCT_ID THÀNH GROUP_ID 25/5/2024 -->
                            <div class="px-3 text-center pb-4">
                                <NuxtLink :to="`/product?id=${item.group_id}`"
                                    class="font-mono inline-block px-5 mx-auto bg-black text-white text-[14px] py-1 rounded-3xl">
                                    Xem ngay
                                </NuxtLink to="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
export default defineNuxtComponent({
    props: ['dataSuggestedProducts', 'header'],
    created() {
        // console.log(this.dataSuggestedProducts)
    },
    async setup() {
        const baseImageURL = (await useBaseURL()).value.baseURLImage
        return {
            baseImageURL,
        }
    },

})
</script>