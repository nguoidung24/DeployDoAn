<template>
    <div class="text-[12.5px]">
        <div class="lg:col-span-full">

            <div v-if="data" class="grid grid-cols-3 md:grid-cols-7 gap-x-2 gap-y-2 px-2">
                <p :style="filters?.category_id == undefined || filters?.category_id == 0 ? 'border-color:rgba(0,0,0,.5); font-weight:bold; text-decoration: underline;' : ''"
                    @click="handleChangeFilters('category_id', 0)"
                    class="hover:cursor-pointer border rounded-lg py-2 flex items-center justify-center font-lg gap-x-2">
                    <svg fill="#000000" viewBox="0 0 32 32" width="20" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <title>border-all</title>
                            <path
                                d="M29 2.25h-26c-0.414 0-0.75 0.336-0.75 0.75v0 26c0 0.414 0.336 0.75 0.75 0.75h26c0.414-0 0.75-0.336 0.75-0.75v0-26c-0-0.414-0.336-0.75-0.75-0.75v0zM28.25 15.25h-11.5v-11.5h11.5zM15.25 3.75v11.5h-11.5v-11.5zM3.75 16.75h11.5v11.5h-11.5zM16.75 28.25v-11.5h11.5v11.5z">
                            </path>
                        </g>
                    </svg> <span>
                        Tất cả
                    </span>
                </p>
                <p v-for="(item, index) in data" :key="index"
                    @click="handleChangeFilters('category_id', item.category_id)"
                    :style="filters?.category_id == item.category_id ? 'border-color:rgba(0,0,0,.5); font-weight:bold; text-decoration: underline;' : ''"
                    :class="`hover:cursor-pointer border rounded-lg py-2 flex items-center justify-center font-lg gap-x-2`">
                    <img :src="baseImageURL + item.thumbnail" alt="" class="size-6 ms-auto">
                    <span class="me-auto">
                        {{ item.category_name }}
                    </span>
                </p>
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
        }
    },
    async created() {
        const data = (await useCategories()).value
        this.data = data.listCategories?.data[0]?.menu
    },
    async setup() {
        const baseImageURL = (await useBaseURL()).value.baseURLImage;
        return {
            baseImageURL,
        }
    }
})
</script>