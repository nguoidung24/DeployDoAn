<template>
   <div class="min-h-screen bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <ClientOnly>
         <section class="bg-gray-50 dark:bg-gray-900">
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
               <NuxtLink style="letter-spacing: 8px; font-weight: 888;" to="/"
                  class="flex items-center mb-6 text-4xl font-semibold text-gray-900 dark:text-white">
                  SAMSENG
               </NuxtLink>
               <div v-if="isLoginForm" v-motion-roll-visible-top
                  class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                  <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                     <h1
                        class="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Đăng nhập tài khoản của bạn
                     </h1>
                     <div class="space-y-4 md:space-y-6" action="#">
                        <div>
                           <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                              Số điện thoại:
                           </label>
                           <input @change="(e) => handleChangeInput(e)" v-model="userName" autocomplete="off"
                              type="text"
                              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="84+ 987654321">
                        </div>
                        <div>
                           <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                              Mật khẩu:
                           </label>
                           <input @change="(e) => handleChangeInput(e)" v-model="password" autocomplete="off"
                              type="password" placeholder="••••••••••••••••••••"
                              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        </div>
                        <div class="flex items-center justify-between">
                           <div class="flex items-start">
                              <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                 Bạn chưa có tài khoản?
                                 <a href="#" @click="handleChangeForm(false)"
                                    class="font-medium text-blue-600 hover:underline dark:text-blue-500">
                                    Đăng ký
                                 </a>
                              </p>
                           </div>
                           <button href="#"
                              class="text-sm font-medium text-gray-400 hover:underline dark:text-blue-500">
                              Quên mật khẩu?</button>
                        </div>
                        <button @click="(e) => handleLogin(e)"
                           class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                           Đăng Nhập
                        </button>

                     </div>
                  </div>
               </div>

               <div v-if="!isLoginForm" v-motion-roll-visible-top
                  class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                  <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                     <h1
                        class="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Đăng ký tài mới
                     </h1>
                     <div class="space-y-4 md:space-y-6" action="#">
                        <div>
                           <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                              Số điện thoại:
                           </label>
                           <input @change="(e) => handleChangeInput(e)" v-model="userName" autocomplete="off"
                              type="text"
                              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="84+ 987654321">
                        </div>
                        <div>
                           <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                              Mật khẩu:
                           </label>
                           <input @change="(e) => handleChangeInput(e)" v-model="password" autocomplete="off"
                              type="password" placeholder="••••••••••••••••••••"
                              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        </div>
                        <div>
                           <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                              Nhập lại mật khẩu:
                           </label>
                           <input @change="(e) => handleChangeInput(e)" v-model="password" autocomplete="off"
                              type="password" placeholder="••••••••••••••••••••"
                              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        </div>
                        <div class="flex items-center justify-between">
                           <div class="flex items-start">
                              <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                 Bạn đã có tài khoản?
                                 <a @click="handleChangeForm(true)" href="#"
                                    class="font-medium text-blue-600 hover:underline dark:text-blue-500">
                                    Đăng nhập
                                 </a>
                              </p>
                           </div>

                        </div>
                        <button
                           class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                           Đăng Ký
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </section>

      </ClientOnly>
   </div>
</template>
<script setup>
import Cookies from "js-cookie";

let userName = '';
let password = '';
let isLoginForm = useState('isLoginForm', () => true);
const setCookies = (SSID, isLogin) => {
   const expiresDate = new Date();
   expiresDate.setDate(expiresDate.getDate() + 7);

   const options = {
      expires: expiresDate,
      secure: true,
      sameSite: 'strict'
   }


   Cookies.set('SSID', SSID, options)
   Cookies.set('isLogin', isLogin, options)

}


const handleChangeInput = (e) => {
   userName = e.target.value.trim();
   password = e.target.value.trim();
}
const handleLogin = (e) => {
   e.preventDefault();
   if (userName == '1' && password == '1') {
      setCookies('1', '1')
      return navigateTo('/');
   }
   return alert('Tài khoản hoặc mật khẩu không chính xác')

}

const handleChangeForm = (value) => {
   isLoginForm.value = value;
}

definePageMeta({
   layout: "no-layout",
})

</script>