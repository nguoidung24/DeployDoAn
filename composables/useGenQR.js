export const useGenQR = async (request) => {
    let data = null;


    const raw = JSON.stringify({
        "accountNo": "030073415930",
        "accountName": "NGUYEN VAN TUNG",
        "acqId": "970403",
        "addInfo": request.addInfo,
        "amount": request.amount,
        "template": "compact"
    });

    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: raw,
        redirect: "follow"
    };

    await fetch("https://api.vietqr.io/v2/generate", requestOptions)
        .then((response) => response.json())
        .then((result) => data = result)
        .catch((error) => console.error(error));

    return data;
}