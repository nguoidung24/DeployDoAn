<template>
    <div class="text-[12.5px]">
        <div v-if="isLoading" class="mb-5">
            <p class="px-2">Loading...</p>
        </div>

        <div v-if="!isLoading" class="mb-5 text-sm grid grid-cols-3 md:grid-cols-7 gap-x-2 gap-y-2 px-2">
            <span
                :class="`hover:cursor-pointer flex items-center justify-center gap-x-1 ${menuActive == -1 ? ' font-semibold ' : ''}`"
                @click="handleActiveMenu(-1)">
                <span :class="`${menuActive == -1 ? 'underline ' : ''}`">Tất cả</span>
                <span>{{ menuActive == -1 ? '🖐' : '✨' }}</span>
            </span>
            <span v-for="(item, index) in menu" :key="index" @click="handleActiveMenu(index)"
                :class="`border-l hover:cursor-pointer flex items-center justify-center gap-x-1 ${menuActive == index ? ' font-semibold ' : ''}`">
                <span :class="`${menuActive == index ? 'underline ' : ''}`">{{ item?.display_name }}</span>
                <span>{{ menuActive == index ? '👇' : '✊' }}</span>
            </span>

        </div>
        <div v-if="menuActive > -1 && menu?.length > 0" class="lg:col-span-full">
            <div v-if="!isLoading && data[menuActive]?.menu?.length > 0"
                class="grid grid-cols-3 md:grid-cols-7 gap-x-2 gap-y-2 px-2">

                <p v-for="(item, index) in data[menuActive]?.menu" :key="index"
                    @click="handleChangeFilters('category_id', item.category_id)"
                    :style="filters?.category_id == item.category_id ? 'border-color:rgba(0,0,0,.5); font-weight:bold; text-decoration: underline;' : ''"
                    :class="`hover:cursor-pointer border rounded-lg py-2 flex items-center justify-center font-lg gap-x-2`"
                    v-motion :initial="{
                        opacity: 0,
                        y: 100,
                    }" :enter="{
                        opacity: 1,
                        y: 0,
                    }" :leave="{
                        y: -100,
                        opacity: 0,
                    }" :delay="index * 50">
                    <img :src="baseImageURL + item.thumbnail" alt="" class="size-6 ms-auto">
                    <span class="me-auto">
                        {{ item.category_name }}
                    </span>
                </p>
            </div>
            <div class="text-center" v-if="!isLoading && !data[menuActive]?.menu?.length > 0">
                <p v-if="menuActive != -1" class="p-3">Chưa có danh mục - có thể chúng tôi sẽ ra mắt trong thời gian sắp
                    tới !</p>
            </div>
        </div>

    </div>
</template>
<script lang="js">
export default defineNuxtComponent({
    props: ['handleChangeFilters', 'filters'],
    data() {
        return {
            data: null,
            menuActive: -1,
            menu: null,
            isLoading: true,
        }
    },
    async created() {
        const data = (await useCategories()).value
        let thisData = data.listCategories?.data;
        if (!thisData?.length) {
            this.menuActive = -1;
        }
        this.menu = this.data = thisData;
        this.isLoading = false;
    },
    async setup() {
        const baseImageURL = (await useBaseURL()).value.baseURLImage;
        return {
            baseImageURL,
        }
    },
    methods: {
        handleActiveMenu(index) {
            this.menuActive = index;
            if (index == -1) {
                this.handleChangeFilters('category_id', 0)
            }
        }
    }
})
</script>