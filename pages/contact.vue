<script setup lang="js">
const
    last_name = useState('contactLastName', () => ''),
    first_name = useState('contactFirstName', () => ''),
    mail = useState('contactMail', () => ''),
    content = useState('contactContent', () => '');

const handleSubmitForm = async () => {
    const request = {
        content: content.value,
        last_name: last_name.value,
        first_name: first_name.value,
        email: mail.value
    };
    const response = await useSubmitContact(request);
    if(response?.status == 'Success'){
        alert('Đã gửi liên hệ của bạn!');
    }else{
        alert('Có lỗi xảy ra, vui lòng gửi lại!');
    }
}
definePageMeta({
    layout: "no-layout",
});
</script>
<template>
    <ClientOnly>
        <div class="contact-page">
            <div class="contact-page-svg lg:block hidden">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                    y="0px" width="100%" height="100%" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMax slice">
                    <defs>
                        <linearGradient id="bg">
                            <stop offset="0%" style="stop-color:rgba(130, 158, 249, 0.06)"></stop>
                            <stop offset="50%" style="stop-color:rgba(76, 190, 255, 0.6)"></stop>
                            <stop offset="100%" style="stop-color:rgba(115, 209, 72, 0.2)"></stop>
                        </linearGradient>
                        <path id="wave" fill="url(#bg)"
                            d="M-363.852,502.589c0,0,236.988-41.997,505.475,0
	                            s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z" />
                    </defs>
                    <g>
                        <use xlink:href='#wave' opacity=".3">
                            <animateTransform attributeName="transform" attributeType="XML" type="translate" dur="10s"
                                calcMode="spline" values="270 230; -334 180; 270 230" keyTimes="0; .5; 1"
                                keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0" repeatCount="indefinite" />
                        </use>
                        <use xlink:href='#wave' opacity=".6">
                            <animateTransform attributeName="transform" attributeType="XML" type="translate" dur="8s"
                                calcMode="spline" values="-270 230;243 220;-270 230" keyTimes="0; .6; 1"
                                keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0" repeatCount="indefinite" />
                        </use>
                        <use xlink:href='#wave' opacty=".9">
                            <animateTransform attributeName="transform" attributeType="XML" type="translate" dur="6s"
                                calcMode="spline" values="0 230;-140 200;0 230" keyTimes="0; .4; 1"
                                keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0" repeatCount="indefinite" />
                        </use>
                    </g>
                </svg>
            </div>


            <div class="bg-black min-h-screen">
                <div class="contact-menu text-blue-300">
                    <HeaderComponent />
                </div>
                <div class="max-w-screen-lg mx-auto p-5" v-motion :initial="{
                    opacity: 0,
                    y: 100,
                }" :enter="{
                    opacity: 1,
                    y: 0,
                }">
                    <div
                        class="grid  bg-gray-900 grid-cols-1 md:grid-cols-12 border shadow-md shadow-blue-400 border-blue-500 rounded-xl overflow-hidden">
                        <div class="bg-gray-900 md:col-span-4 p-10 text-blue-300">
                            <h3 class="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
                                <span class="text-lg mb-2">Đây là cách mà bạn có thể liên hệ với</span>
                                <span class="text-indigo-600">
                                    SAMSENG
                                </span>
                            </h3>
                            <p class="mt-4 leading-7 text-gray-200">
                                <iframe class="w-full h-60 rounded-xl"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1851.7198448456334!2d105.39851914764023!3d21.31242642362426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31348d4ebf6c9a5b%3A0xabb9e949be7982d0!2zVHLGsOG7nW5nIMSQ4bqhaSBI4buNYyBDw7RuZyBOZ2hp4buHcCBWaeG7h3QgVHLDrA!5e1!3m2!1szh-TW!2s!4v1717933798321!5m2!1szh-TW!2s"
                                    width="600" height="450" style="border:0;" loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </p>

                            <div class="flex items-center mt-5">
                                <span class="size-6">📍</span>
                                <span class="text-sm">Số 9, Tiên Sơn, Tiên Cát, Việt Trì, Phú Thọ.</span>
                            </div>
                            <div class="flex items-center mt-5">
                                <span class="size-6">☎</span>
                                <span class="text-sm">+84 987 654 321</span>
                            </div>
                            <div class="flex items-center mt-5">
                                <span class="size-6">⌚</span>
                                <span class="text-sm">24/7</span>
                            </div>

                        </div>
                        <div class="md:col-span-8 p-10 bg-gray-800">
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                                        for="grid-first-name">
                                        Họ
                                    </label>
                                    <input v-model="first_name"
                                        class="appearance-none block w-full bg-blue-200 placeholder:italic placeholder:text-sm placeholder:text-gray-800 border-none text-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        id="grid-first-name" type="text" placeholder="Nguyễn Văn">
                                </div>
                                <div class="w-full md:w-1/2 px-3">
                                    <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                                        for="grid-last-name">
                                        Tên
                                    </label>
                                    <input v-model="last_name"
                                        class="appearance-none block w-full bg-blue-200 placeholder:italic placeholder:text-sm placeholder:text-gray-800 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="grid-last-name" type="text" placeholder="Anh">
                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full px-3">
                                    <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                                        for="grid-password">
                                        Email
                                    </label>
                                    <input v-model="mail"
                                        class="appearance-none block w-full bg-blue-200 placeholder:italic placeholder:text-sm placeholder:text-gray-800 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="grid-email" type="text" placeholder="mailcuaban@gmail.com">
                                </div>
                            </div>

                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full px-3">
                                    <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                                        for="grid-password">
                                        Nội dung
                                    </label>
                                    <textarea rows="10" placeholder="Nội dung bạn muốn gửi cho SAMSENG"
                                        v-model="content"
                                        class="appearance-none block w-full bg-blue-200 placeholder:italic placeholder:text-sm placeholder:text-gray-800 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"></textarea>
                                </div>
                                <div class="flex justify-between w-full px-3">
                                    <div>

                                    </div>
                                    <button @click="handleSubmitForm()"
                                        class="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                                        type="button">
                                        Gửi cho SAMSENG
                                    </button>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    </ClientOnly>
</template>
<style>
.contact-menu *:not(.form-search-lable, .form-search-lable *, .cart-counter) {
    color: rgb(124, 169, 241) !important;
    background-color: black !important;
}

.contact-menu .cart-counter {
    color: white !important;
    background: red !important;
}

.contact-page .contact-page-svg svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 150%;
    height: 100%;
    box-sizing: border-box;
    display: block;
    background-color: transparent !important;
}
</style>