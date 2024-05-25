import { storeToRefs } from 'pinia'
import { useWebsiteStore } from '~/stores/website'

export const useSlider = async () => {
    const BASE_URL = (await (useBaseURL())).value.baseURL
    const websiteStore = useWebsiteStore()
    const { webData } = storeToRefs(websiteStore)
    let data = null;

    if (websiteStore.getWebData('listProducts') == null) {
        await fetch(BASE_URL + 'Banner')
            .then((response) => response.json())
            .then((response) => data = response);
        websiteStore.setWebData({ key: 'listProducts', value: data })
    }

    return useState('listProducts', () => webData)
}

export const useOutstandingProducts = async () => {
    const BASE_URL = (await (useBaseURL())).value.baseURL
    const websiteStore = useWebsiteStore()
    const { webData } = storeToRefs(websiteStore)
    let data = null;

    if (websiteStore.getWebData('listOutstandingProducts') == null) {
        await fetch(BASE_URL + 'Outstanding')
            .then((response) => response.json())
            .then((response) => data = response);
        websiteStore.setWebData({ key: 'listOutstandingProducts', value: data })
    }

    return useState('listOutstandingProducts', () => webData)
}

export const useMonopolyProducts = async () => {
    const BASE_URL = (await (useBaseURL())).value.baseURL
    const websiteStore = useWebsiteStore()
    const { webData } = storeToRefs(websiteStore)
    let data = null;

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            action: 'getProductType',
            type: 'HotSale'
        })
    }

    if (websiteStore.getWebData('listMonopolyProducts') == null) {
        await fetch(BASE_URL + 'Products', requestOptions)
            .then((response) => response.json())
            .then((response) => data = response);
        websiteStore.setWebData({ key: 'listMonopolyProducts', value: data })
    }

    return useState('listMonopolyProducts', () => webData)
}



export const useSuggestedProducts = async () => {
    const BASE_URL = (await (useBaseURL())).value.baseURL
    const websiteStore = useWebsiteStore()
    const { webData } = storeToRefs(websiteStore)
    let data = null;

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            action: 'getProductType',
            type: 'New'
        })
    }

    if (websiteStore.getWebData('listSuggestedProducts') == null) {
        await fetch(BASE_URL + 'Products', requestOptions)
            .then((response) => response.json())
            .then((response) => data = response);
        websiteStore.setWebData({ key: 'listSuggestedProducts', value: data })
    }

    return useState('listSuggestedProducts', () => webData)
}