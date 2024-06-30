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
                        Đăng nhập tài khoản
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
                           <!-- <button href="#"
                              class="text-sm font-medium text-gray-400 hover:underline dark:text-blue-500">
                              Quên mật khẩu?</button> -->
                        </div>
                        <button @click="(e) => handleLogin(e)"
                           class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                           Đăng Nhập
                        </button>
                        <button class="flex dark:text-gray-400 text-gray-700 justify-center gap-2 items-center w-full">
                           <span class="h-1 w-20 inline-block border-b dark:border-gray-400 border-gray-700"></span>
                           Hoặc
                           <span class="h-1 w-20 inline-block border-b dark:border-gray-400 border-gray-700"></span>
                        </button>
                        <NuxtLink
                           class="text-center hover:bg-gray-600 text-sm font-semibold bg-gray-500 text-white py-2 rounded-xl block"
                           to="/">
                           Trang Chủ 🏠
                        </NuxtLink>
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
                           <input @change="(e) => handleChangeInput(e)" v-model="rUserName" autocomplete="off"
                              type="text"
                              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="84+ 987654321">
                        </div>
                        <div>
                           <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                              Mật khẩu:
                           </label>
                           <input @change="(e) => handleChangeInput(e)" v-model="rPassword" autocomplete="off"
                              type="password" placeholder="••••••••••••••••••••"
                              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        </div>
                        <div>
                           <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                              Nhập lại mật khẩu:
                           </label>
                           <input @change="(e) => handleChangeInput(e)" v-model="rRPassword" autocomplete="off"
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

                        <button v-if="!isLoading" @click="handleRegister()"
                           class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                           Đăng Ký
                        </button>

                        <button v-if="isLoading"
                           class="w-full text-white bg-gray-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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


let rUserName = '';
let rPassword = '';
let rRPassword = '';
const isLoading = useState('loginIsLoading', () => false);

let isLoginForm = useState('isLoginForm', () => true);
const setCookies = (SSID, isLogin, customer_name, address, phone) => {
   const expiresDate = new Date();
   expiresDate.setDate(expiresDate.getDate() + 7);

   const options = {
      expires: expiresDate,
      secure: true,
      sameSite: 'strict'
   }


   Cookies.set('SSID', SSID, options)
   Cookies.set('isLogin', isLogin, options)
   Cookies.set('customer_name', customer_name, options)
   Cookies.set('address', address, options)
   Cookies.set('phone', phone, options)


}


const handleChangeInput = (e) => {
   userName = e.target.value.trim();
   password = e.target.value.trim();
}

const handleLogin = async (e) => {
   e.preventDefault();
   const isLogin = await useLogin(userName, password)
   console.log(isLogin)
   if (isLogin?.success) {
      setCookies(
         isLogin?.ssid,
         '1',
         isLogin?.customer_name,
         isLogin?.address,
         isLogin?.phone,

      )
      return navigateTo('/');
   }

   return alert('Tài khoản hoặc mật khẩu không chính xác')

}

const handleChangeForm = (value) => {
   isLoginForm.value = value;
}

const handleRegister = async () => {
   isLoading.value = true;
   if (!rUserName || !rPassword || !rRPassword) {
      alert("Bạn chưa nhập đủ thông tin!");
   }
   else if (rPassword != rRPassword) {
      alert("Mật khẩu không giống nhau!");

   } else {
      const register = await useRegiser(rUserName, rPassword);
      if (register?.success) {
         alert("Đăng ký thành công!")
      }
      else {
         alert("Không thành công,Có thể tên tài khoản đã tồn tại!")
      }

   }
   isLoading.value = false;
}

definePageMeta({
   layout: "no-layout",
})

</script>