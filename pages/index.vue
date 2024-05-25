<template>
    <div>

        <!-- ================================== START ================================== -->
        <div class="lg:px-20 px-0" v-motion :initial="{
            opacity: 0,
            y: 100,
        }" :enter="{
            opacity: 1,
            y: 0,
        }" :leave="{
            y: -100,
            opacity: 0,
        }" v-if="!isLoading">
            <IndexSlide :dataSlide="dataIndexSlider" />

            <IndexOutstandingProduct :dataTab="dataIndexOutstandingProducts" />

            <IndexMonopolyProduct :dataIndexMonopolyProducts="dataIndexMonopolyProducts" />

            <IndexBigSlide :dataBigSlider="dataBigSlider" />

            <IndexSuggestedProducts :dataSuggestedProducts="dataSuggestedProducts" header="Gợi ý dành cho bạn" />
        </div>
        <!-- ================================== END ================================== -->

        <div v-else>
            <div class="absolute top-2/4 left-2/4 -translate-x-2/4">
                <v-icon name="vi-file-type-ionic" class="animate-spin" scale="5"></v-icon>
                <p class="text-center italic">Loading...</p>
            </div>
        </div>

    </div>
</template>
<script>
export default defineNuxtComponent({
    head() {
        return {
            title: "Trang chủ"
        }
    },
    data() {
        return {
            dataIndexOutstandingProducts: null,
            dataIndexMonopolyProducts: null,
            dataSuggestedProducts: null,
            dataIndexSlider: null,
            dataBigSlider: null,
            isLoading: true,
        }
    },
    async created() {
        const dataIndexSlider = (await useSlider()).value;
        this.dataIndexSlider = dataIndexSlider.listProducts.data.filter((item) => item.type != 'big-slider');
        this.dataBigSlider = dataIndexSlider.listProducts.data.filter((item) => item.type == 'big-slider');

        const dataIndexOutstandingProducts = (await useOutstandingProducts()).value;
        this.dataIndexOutstandingProducts = dataIndexOutstandingProducts.listOutstandingProducts.data

        const dataIndexMonopolyProducts = (await useMonopolyProducts()).value;
        this.dataIndexMonopolyProducts = dataIndexMonopolyProducts.listMonopolyProducts.data

        const dataSuggestedProducts = (await useSuggestedProducts()).value;
        this.dataSuggestedProducts = dataSuggestedProducts.listSuggestedProducts.data

        this.isLoading = false;
    }
})
</script>