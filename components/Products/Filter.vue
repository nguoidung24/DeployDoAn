<template>
    <form class="">
        <div class=" border-gray-200 pb-4">
            <fieldset>
                <legend class="w-full px-2">
                    <button type="button" class="flex w-full items-center justify-between p-2 text-gray-400 hover"
                        aria-controls="filter-section-0" aria-expanded="false">
                        <span class="text-base font-semibold text-gray-900">Theo giá</span>
                    </button>
                </legend>
                <div class="px-4 pb-2 pt-4" id="filter-section-0">
                    <div class="space-y-3">
                        <div class="flex items-center">
                            <input @change="handleChange('sort', 0)" :checked="data['sort'] == undefined"
                                :id="`sort-0-0-0`" type="radio"
                                class="size-[18px] rounded-full border-gray-300 text-indigo-600 focus:ring-indigo-500">
                            <label :for="`sort-0-0-0`"
                                :class="(data['sort'] == undefined ? 'font-bold underline italic ' : ' ') + ` ml-3 text-sm hover:cursor-pointer`">
                                Không chọn
                            </label>
                        </div>


                        <div class="flex items-center" v-for="(value, key) in [
                            {
                                id: 1,
                                text: 'Tăng dần',
                                value: 'asc'
                            },
                            {
                                id: 2,
                                text: 'Giảm dần',
                                value: 'desc'
                            }
                        ]" :key="key">
                            <input @change="handleChange('sort', value.value)" :checked="data['sort'] == value.value"
                                :id="`sort-${index}-${value.id}`" :name="`color[]`" type="radio"
                                class="size-[18px] rounded-full border-gray-300 text-indigo-600 focus:ring-indigo-500">
                            <label :for="`sort-${index}-${value.id}`"
                                :class="(data['sort'] == value.value ? 'font-bold underline italic ' : ' ') + ` ml-3 text-sm hover:cursor-pointer`">
                                {{ value.text }}
                            </label>
                        </div>
                    </div>
                </div>
            </fieldset>
        </div>
        <div class=" border-gray-200 pb-4">
            <fieldset>
                <legend class="w-full px-2">
                    <button type="button" class="flex w-full items-center justify-between p-2 text-gray-400 hover"
                        aria-controls="filter-section-0" aria-expanded="false">
                        <span class="text-base font-semibold text-gray-900">Màu Sắc</span>
                    </button>
                </legend>
                <div class="px-4 pb-2 pt-4" id="filter-section-0">
                    <div class="space-y-3">
                        <div class="flex items-center">
                            <input @change="handleChange('color_id', 0)" :checked="data['color_id'] == undefined"
                                :id="`color-0`" type="radio"
                                class="size-[18px] rounded-full border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                :style="`background-color: rgba(0,0,0,.05); border-color:gray`">
                            <label :for="`color-0`"
                                :class="(data['color_id'] == undefined ? 'font-bold underline italic ' : ' ') + ` ml-3 text-sm hover:cursor-pointer`">
                                Không chọn
                            </label>
                        </div>


                        <div class="flex items-center" v-for="(value, key) in dataColors" :key="key">
                            <input @change="handleChange('color_id', value.color_id)"
                                :checked="data['color_id'] == value.color_id" :id="`color-${index}-${value.color_id}`"
                                name="color[]" type="radio"
                                class="size-[18px] rounded-full border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                :style="`background-color: ${value.code}; border-color:gray`">
                            <label :for="`color-${index}-${value.color_id}`"
                                :class="(data['color_id'] == value.color_id ? 'font-bold underline italic ' : ' ') + ` ml-3 text-sm hover:cursor-pointer`">
                                {{ value.name }}
                            </label>
                        </div>
                    </div>
                </div>
            </fieldset>
        </div>
        <div class="border-t border-gray-200 pb-4 pt-4">
            <fieldset>
                <legend class="w-full px-2">
                    <button type="button" class="flex w-full items-center justify-between p-2 text-gray-400 hover"
                        aria-controls="filter-section-1" aria-expanded="false">
                        <span class="text-base font-semibold text-gray-900">Khoảng giá</span>
                    </button>
                </legend>
                <div class="px-4 pb-2 pt-4" id="filter-section-1">
                    <div class="space-y-3">
                        <div class="flex items-center" >
                            <input :id="`prices-0-0-0`" :checked="data['range'] == 0 || data['range'] == undefined"
                                @change="handleChange('range', 0)" name="range[]" value="new-arrivals"
                                type="radio"
                                class="size-[18px] rounded-full border-gray-300 text-indigo-600 focus:ring-indigo-500">
                            <label :for="`prices-0-0-0`"
                                :class="(data['range'] == 0 || data['range'] == undefined ? 'font-bold underline italic ' : ' ') + ` ml-3 text-sm hover:cursor-pointer`">
                                Không chọn
                                </label>
                        </div>
                        <div class="flex items-center" v-for="(value, key) in dataPrices" :key="key">
                            <input :id="`prices-${index}-${key}`" :checked="data['range'] == value.value"
                                @change="handleChange('range', value.value)" name="range[]" value="new-arrivals"
                                type="radio"
                                class="size-[18px] rounded-full border-gray-300 text-indigo-600 focus:ring-indigo-500">
                            <label :for="`prices-${index}-${key}`"
                                :class="(data['range'] == value.value ? 'font-bold underline italic ' : ' ') + ` ml-3 text-sm hover:cursor-pointer`">
                                {{ value.text }}
                                </label>
                        </div>
                    </div>
                </div>
            </fieldset>
        </div>


        
        <div class="border-t border-gray-200 pb-4 pt-4">
            <fieldset>
                <legend class="w-full px-2">
                    <button type="button" class="flex w-full items-center justify-between p-2 text-gray-400 hover"
                        aria-controls="filter-section-1" aria-expanded="false">
                        <span class="text-base font-semibold text-gray-900">Đánh giá</span>
                    </button>
                </legend>
                <div class="px-4 pb-2 pt-4" id="filter-section-1">
                    <div class="space-y-3">
                        <div class="flex items-center" >
                            <input :id="`rating-0-0-0`" :checked="data['rating'] == 0 || data['rating'] == undefined"
                                @change="handleChange('rating', value)" name="rating[]" value="new-arrivals"
                                type="radio"
                                class="size-[18px] rounded-full border-gray-300 text-indigo-600 focus:ring-indigo-500">
                            <label :for="`rating-0-0-0`"
                                :class="(data['rating'] == 0 || data['rating'] == undefined ? 'font-bold underline italic ' : ' ') + ` ml-3 text-sm hover:cursor-pointer`">
                                Không chọn
                            </label>
                        </div>
                        <div class="flex items-center" v-for="(value, key) in dataRating" :key="key">
                            <input :id="`rating-0-${value}`" :checked="data['rating'] == value"
                                @change="handleChange('rating', value)" name="rating[]" value="new-arrivals"
                                type="radio"
                                class="size-[18px] rounded-full border-gray-300 text-indigo-600 focus:ring-indigo-500">
                            <label :for="`rating-0-${value}`"
                                :class="(data['rating'] == value ? 'font-bold underline italic ' : ' ') + ` ml-3 text-sm hover:cursor-pointer`">
                                <span v-for="(i, j) in [0,0,0,0,0]" :key="j">
                                    <v-icon v-if="j < value" name="io-star" color="#e1e115"></v-icon>
                                    <v-icon v-if="j >= value" name="fa-regular-star" color="#e1e115"></v-icon>
                                </span>
                            </label>
                        </div>
                    </div>
                </div>
            </fieldset>
        </div>


    </form>
</template>
<script lang="js">
const dataColors = [
    { color_id: "1", code: '#000', name: 'Black' },
    { color_id: "2", code: 'blue', name: 'Blue' },
    { color_id: "3", code: '#fff', name: 'White' },
    { color_id: "4", code: 'yellow', name: 'Yellow' },
    { color_id: "5", code: 'gray', name: 'Gray' },
    { color_id: "6", code: 'green', name: 'Green' },
    { color_id: "7", code: 'brown', name: 'Brown' },
    { color_id: "8", code: 'Pink', name: 'Pink' },
    { color_id: "9", code: 'Orange', name: 'Orange' },
]

const dataPrices = [
    {
        text: "Dưới 5 triệu",
        value: "0->5000000"
    },
    {
        text: "Từ 5 triệu đến 10 triệu",
        value: "5000000->10000000"
    },
    {
        text: "Từ 10 triệu đến 20 triệu",
        value: "10000000->20000000"
    },
    {
        text: "Từ 20 triệu đến 50 triệu",
        value: "30000000->50000000"
    },
    {
        text: "Trên 50 triệu",
        value: "50000000->9999999999999999999999999999"
    },
]


const dataRating = [1,2,3,4,5];

export default defineNuxtComponent({
    props: ['index', 'handleChangeFilters', 'data'],
    data() {
        return {
            dataColors,
            dataPrices,
            dataRating
        }
    },
    methods: {
        handleChange(key, value) {
            this.handleChangeFilters(key, value)
        }
    },
    created() {
    }
})
</script>