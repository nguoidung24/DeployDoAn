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
    formdata.append("action", att["action"]);
    formdata.append("customer_id", att["customer_id"]);
    formdata.append("product_id", att["product_id"]);
    formdata.append("price", att["price"]);
    formdata.append("quantity", att["quantity"]);
    formdata.append("status", att["status"]);
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


export const useDeleteCart = async (att) => {
    const BASE_URL = (await (useBaseURL())).value.baseURL

    const formdata = new FormData();
    formdata.append("action", "delete");
    formdata.append("pid", att.product_id);
    formdata.append("cid", att.customer_id);
    formdata.append("sid", "0");

    const requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow"
    };

    fetch(BASE_URL + "Order", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
}



export const useRating = async (att) => {
    const BASE_URL = (await (useBaseURL())).value.baseURL

    const formdata = new FormData();
    formdata.append("action", "updateStar");
    formdata.append("product_id", att.product_id);
    formdata.append("order_id", att.order_id);
    formdata.append("star", att.star);

    const requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow"
    };

    await fetch(BASE_URL + "Products", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
}

export const useCheckOut = async (request) => {
    const BASE_URL = (await (useBaseURL())).value.baseURL

    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify( request),
        redirect: "follow"
    };


    await fetch(BASE_URL + "Order", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
}



export const useOrderCancel = async (att) => {
    const BASE_URL = (await (useBaseURL())).value.baseURL

    let data = null;

    const requestOptions = {
        method: "POST",
        body: JSON.stringify(att),
        redirect: "follow",
        headers: {
            "Content-Type": "application/json"
        }
    };

    await fetch(BASE_URL + "order-cancel", requestOptions)
        .then((response) => response.json())
        .then((result) => data = result)
        .catch((error) => console.error(error));
    return data;
}

