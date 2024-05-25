
export const useBaseURL = async () => {
    const dataBaseURL = {
        baseURL: "http://localhost:8008/api/",
        // baseURL:"https://admin.thegioidilac.shop/api/",

        baseURLImage: "http://localhost:8008/"
        // baseURLImage:"https://admin.thegioidilac.shop/api/",

    }
    return useState('dataBaseURL', () => dataBaseURL)
}