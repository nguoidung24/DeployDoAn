import { storeToRefs } from 'pinia'
import { useWebsiteStore } from '~/stores/website'
import Cookie from "js-cookie";

export const useGetCart = async () => {
    const BASE_URL = (await (useBaseURL())).value.baseURL
    const websiteStore = useWebsiteStore()
    const { webData } = storeToRefs(websiteStore)


    let data = null;
    const id = await Cookie.get('SSID');

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            action: 'getCart',
            customer_id: id
        })
    };

    await fetch(BASE_URL + 'Order', requestOptions)
        .then((response) => response.json())
        .then((response) => data = response);
    websiteStore.setWebData({ key: 'listCart', value: data })

    return useState('listCart', () => webData)

}

export const useChangeCart = async (att) => {
    const BASE_URL = (await (useBaseURL())).value.baseURL

    const formdata = new FormData();
    formdata.append("action", "create");
    formdata.append("customer_id", "1");
    formdata.append("product_id", "4");
    formdata.append("price", "114000000");
    formdata.append("quantity", "1");
    formdata.append("status", "0");
    formdata.append("payment_date", "");

    const requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow"
    };

    await fetch(BASE_URL + "Order", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
}