import Cookie from "js-cookie";

export const useCustomer = async () => {
    const BASE_URL = (await (useBaseURL())).value.baseURL

    let data = null;

    const id = await Cookie.get('SSID');

    const formdata = new FormData();
    formdata.append("action", "getOrder");
    formdata.append("customer_id", id);

    const requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow"
    };

    await fetch(BASE_URL + "Customers", requestOptions)
        .then((response) => response.json())
        .then((result) => data = result)
        .catch((error) => console.error(error));
    return data;
}