<template>
    <header class=" relative lg:text-base md:text-[13px] px-5" style="z-index: 20;">
        <nav class="flex justify-between">
            <div @click="goToHome()" class="w-[100px] md:w-[150px] flex items-center my-6 hover:cursor-pointer">
                <!-- <img src="https://i.postimg.cc/MZCBXb1K/logo.png" alt="LOGO" srcset=""> -->
                <!-- <img src="https://thegioidilac.shop/_nuxt/img/thegioidilac_logo.b7f9124.png" class="h-10" alt="LOGO" srcset=""> -->
                <svg id="e3Y54xRkUCc1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 120 32" shape-rendering="geometricPrecision" text-rendering="geometricPrecision">
                    <rect width="120" height="32" rx="0" ry="0" fill="none" />
                    <path
                        d="M0,11.651v-1.14h3.994v1.45c-.006256.38543.154521.754723.440912,1.012744s.670397.379541,1.053088.333256c.669959.090897,1.297756-.346909,1.444-1.007.106934-.364723.097848-.753668-.026-1.113C6.133,9.243,0.851,8.363,0.18,5.333c-.136609-.665628-.145094-1.351195-.025-2.02C0.567,0.88,2.705,0,5.359,0c2.113,0,5.025.492,5.025,3.754v1.062h-3.71v-.932c.022668-.371761-.118353-.734848-.386007-.993849s-.635177-.388019-1.005993-.353151c-.64894-.071455-1.243573.36853-1.365,1.01-.0417.258242-.03287.522123.026.777.437,1.734,6.081,2.667,6.7,5.8.154701.811974.163167,1.645049.025,2.46C10.307,15.068,8.091,16,5.412,16C2.6,16,0,14.99,0,11.651ZM48.392,11.6v-1.14h3.943v1.424c-.012538.382041.14216.750553.423639,1.009167s.661747.381615,1.041361.336833c.664129.099024,1.292656-.329577,1.443-.984.106887-.356191.098135-.737094-.025-1.088-.748-1.915-5.979-2.8-6.648-5.825-.13685-.656806-.145678-1.333849-.026-1.994.415-2.407,2.556-3.287,5.156-3.287c2.088,0,4.973.518,4.973,3.728v1.036h-3.684v-.906c.023769-.367129-.113086-.726482-.375045-.984795s-.623195-.390117-.989955-.361205c-.638328-.084644-1.229683.349604-1.34.984-.04213.258171-.033639.522072.025.777.412,1.734,6,2.641,6.623,5.747.154529.803239.162998,1.627756.025,2.434-.361,2.486-2.551,3.392-5.2,3.392-2.787.002-5.365-1.011-5.365-4.298Zm14.096,4.298c-.301439,0-.039756-8.579546,0-8.908v-6.55h3.762l6.886.026c-.004877.19035,0,3.418,0,3.418s-6.886-.13-6.886-.13s0,3.236,0,3.236s6.886,0,6.886,0v3.082h-6.886v2.821167c0,.285,6.886.106833,6.886.106833s0,3,0,3-6.886-.102-6.886-.102h-3.762Zm30.999-3.909c-.038244-.328234-.055613-.658565-.052-.989v-6.288c0-.259.025-.725.051-.985.335-2.795,2.577-3.675,5.231-3.675c2.629,0,4.947.88,5.206,3.676.030863.327374.039216.656481.025.985v.487h-3.762v-.824c.000611-.191166-.016461-.381979-.051-.57-.202922-.647842-.803121-1.088796-1.482-1.088796s-1.279078.440954-1.482,1.088796c-.043547.230637-.060658.465487-.051.7v6.834c-.004358.190371.004329.380816.026.57.184277.70029.850513,1.162542,1.571,1.09.70899.075483,1.362239-.391675,1.52-1.087.034684-.187918.043432-.379705.026-.57v-2.178h-1.52v-2.175h5.257v4.01c.003765.328775-.013605.657453-.052.984-.257,2.718-2.6,3.676-5.231,3.676s-4.973-.955-5.23-3.673v.002ZM41.049,15.378l-.1-13.825-2.58,13.825h-3.762L32.055,1.553l-.1,13.825h-3.713l.309-14.912h6.056l1.881,11.651L38.369,0.466h6.055l.335,14.912h-3.71Zm-19.79,0L19.249,1.553L17.187,15.378h-4.019L15.9,0.466h6.623l2.732,14.912h-3.996Zm62.977-.155L80.5,2.822l.206,12.4h-3.66v-14.756h5.514l3.5,12.013-.201-12.013h3.685v14.758l-5.308-.001Z"
                        transform="translate(7.999779 8)" />
                </svg>
            </div>
            <div class="flex items-center gap-3 font-semibold">
                <div
                    class="navLinks duration-500 absolute md:static md:w-auto w-full md:h-auto h-[85vh] bg-white flex md:items-center gap-[1.5vw] top-[100%] left-[-100%] px-5 md:py-0 py-5 ">
                    <ul class="flex md:flex-row flex-col md:items-center md:gap-[2vw] gap-8">
                        <li v-for="(item, index) in dataMenu" :key="index"
                            class="relative max-w-fit pr-3 md:pr-0 py-1 after:bg-gradient-to-r from-[#2b68e0] to-[#e710ea]  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                            <a @click="handleClickMenu(item.link)" class="hover:cursor-pointer">{{ item.text }}</a>
                        </li>
                    </ul>
                </div>
                <div class="flex items-center gap-2">
                    <!-- <NuxtLink to="/login"
                        class="hover:bg-clip-text hover:text-transparent bg-gradient-to-br from-[#2b68e0] to-[#e710ea] border-solid border-2 border-[#5356e3]  font-bold text-white px-5 py-2 rounded-full ">
                        Tài khoản</NuxtLink> -->
                    <!-- <ion-icon name="menu" onclick="onMenuToggle(this)" class="text-[30px] cursor-pointer md:hidden"></ion-icon> -->
                    <p class="flex items-center gap-6 ">
                        <button @click="handleSearch()">
                            <v-icon name="hi-search" />
                        </button>
                        <NuxtLink to="/cart" class="relative">
                            <v-icon name="md-shoppingcart" />
                            <span
                                class="absolute bg-red-600 text-white -right-3 -top-2 text-[13px] size-5 flex justify-center items-center rounded-full">
                                9+
                            </span>
                        </NuxtLink>
                        <NuxtLink to="/user">
                            <v-icon name="fa-user" scale="1.1" />
                        </NuxtLink>
                    </p>
                    <button class="lg:hidden md:hidden" @click="onMenuToggle(this)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor"
                            class="bi bi-list" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
        <input type="checkbox" class="size-0 opacity-0 scale-0 fixed top-0 left-0" id="handleSearch"
            @change="handleSearch()" />
        <label v-if="isSearch" for="handleSearch" class="fixed top-0 pt-[20vh] left-0 w-screen h-screen bg-[#000000c9]">

            <div class="max-w-md mx-auto" v-motion :initial="{
                opacity: 0,
                y: 100,
            }" :enter="{
                opacity: 1,
                y: 0,
                transition: {
                    type: 'spring',
                    stiffness: '100',
                    delay: 100,
                },
            }">
                <div class="relative">
                    <p
                        class="text-center text-white font-semibold text-2xl w-full absolute -top-full left-2/4 -translate-x-2/4">
                        Samseng Sẽ Giúp Bạn Tìm Kiếm
                    </p>
                    <div class="absolute inset-y-0 start-0 flex items-center ps-5 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input v-model="searchValue" type="search" id="default-search"
                        class="block w-[96%] mx-auto p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Bạn cần tìm gì..." required />
                    <button @click="handleToSearch()"
                        class="text-white absolute end-[calc(4%)] bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Tìm
                    </button>
                </div>
            </div>

        </label>
    </header>
</template>

<script lang="js">
const dataMenu = [
    {
        text: "Trang chủ",
        link: "/",
    },
    {
        text: "Sản phẩm",
        link: "/products",
    },
    {
        text: "Về chúng tôi",
        link: "/",
    },
    {
        text: "Liên hệ với chúng tôi",
        link: "/",
    }
]
export default defineNuxtComponent({
    data() {
        return {
            isSearch: false,
            searchValue: "",
            dataMenu
        }
    },
    methods: {
        onMenuToggle(e) {
            // e.name = e.name === "menu" ? "close" : "menu";
            const navlinks = document.querySelector(".navLinks");
            navlinks.classList.toggle("left-[0%]");
        },
        goToHome() {
            this.$router.push("/");
        },
        handleSearch() {
            this.isSearch = !this.isSearch;
        },
        handleToSearch() {
            this.$router.push(`/products?search=${this.searchValue}`);
        },
        handleClickMenu(link) {
            this.onMenuToggle();
            this.$router.push(link);
        }

    },

})
</script>