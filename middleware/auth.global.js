// middleware/auth.js
import Cookies from "js-cookie";
export default defineNuxtRouteMiddleware((to, from) => {
    const noAuth = [
        'login',
        'index',
        'products',
        'product',
        'posts',
        'about',
        'contact'
    ];

    const getLoginInfo = Cookies.get('isLogin');
    const isLogin = Number(getLoginInfo)

    if (isLogin && to.name == 'login')
        return navigateTo('/');
    if (!noAuth.includes(to.name))
        if (!isLogin)
            return navigateTo('/login');

});
