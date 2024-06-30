
export const useLogin = async (userName, password) => {
    const BASE_URL = (await (useBaseURL())).value.baseURL
    
    let data = null;

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'phone': userName,
            'password': password
        })
    };

    await fetch(BASE_URL + 'customer-login', requestOptions)
        .then((response) => response.json())
        .then((response) => data = response);

    return data;
}

export const useRegiser = async (userName, password) => {
    const BASE_URL = (await (useBaseURL())).value.baseURL
    
    let data = null;

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'phone': userName,
            'password': password
        })
    };

    await fetch(BASE_URL + 'customer-register', requestOptions)
        .then((response) => response.json())
        .then((response) => data = response);

    return data;
}