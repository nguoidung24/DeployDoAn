import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
    FaFlag,
    FaUser,
    MdShoppingcart,
    HiSearch,
    MdKeyboarddoublearrowleftTwotone,
    ViFileTypeIonic,
    FaRegularStar,
    IoStar,

} from "oh-vue-icons/icons";

addIcons(FaFlag,
    FaUser,
    MdShoppingcart,
    HiSearch,
    MdKeyboarddoublearrowleftTwotone,
    ViFileTypeIonic,
    FaRegularStar,
    IoStar,
);

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component("v-icon", OhVueIcon);
});