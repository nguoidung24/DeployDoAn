import { storeToRefs } from 'pinia'
import { useWebsiteStore } from '~/stores/website'

export const useCategories = async () => {
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
            action: 'getById',
            menu_id: '2'
        })
    };

    if (websiteStore.getWebData('listCategories') == null) {
        await fetch(BASE_URL + 'Menu', requestOptions)
            .then((response) => response.json())
            .then((response) => data = response);
        websiteStore.setWebData({ key: 'listCategories', value: data })
    }

    return useState('listCategories', () => webData)
}