import { defineStore } from 'pinia'

export const useWebsiteStore = defineStore('website', {
    state: () => ({
        webData: {
            "testData": "test_data"
        },
    }),
    actions: {
        setWebData({ key, value }) {
            let tmp = {};
            tmp[key] = value;
            this.webData = Object.assign({}, this.webData, tmp);
        },
        getWebData(key) {
            if (key in this.webData)
                return this.webData[key];
            else 
                return null;
        }
    }
})
