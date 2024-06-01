export const useProduct = async (id) => {
    const BASE_URL = (await (useBaseURL())).value.baseURL
    let data = null;

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            action: 'getByGroupId',
            groupId: id
        })
    }

    await fetch(BASE_URL + 'Products', requestOptions)
        .then((response) => response.json())
        .then((response) => data = response);

    return useState(`product_${id}`, () => data)
}

export const useProducts = async (listFilter, page = 1) => {
    const BASE_URL = (await (useBaseURL())).value.baseURL
    let data = null;
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            action: 'listProducts',
            page: page,
            limit: 8,
            ...listFilter
        })
    }

    await fetch(BASE_URL + 'Products', requestOptions)
        .then((response) => response.json())
        .then((response) => data = response);

    return data;
}

export const usePost = async (post_id) => {
    const BASE_URL = (await (useBaseURL())).value.baseURL
    let data = null;
    await fetch(BASE_URL + `Post?post_id=${post_id}`)
        .then((response) => response.json())
        .then((response) => data = response);

    return data;
}