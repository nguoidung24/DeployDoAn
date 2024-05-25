
export const useLogin = async (userName, password) => {
    const BASE_URL = (await (useBaseURL())).value.baseURL
    return true;
    
    let data = null;

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({

        })
    };

    await fetch(BASE_URL + 'Customers', requestOptions)
        .then((response) => response.json())
        .then((response) => data = response);

    return data;
}