import axios from "axios"

export function callLockedApi(lockerId) {
    const URL = "http://10.11.12.235/api/open/"
    const apiKey = "azk_42163e54-49d8-49b3-89c6-96a734e73daa"

    console.log(URL + lockerId, "plus test", apiKey);

    axios.post(URL + lockerId, {}, {
        headers: {
            "accept": "*/*",
            "X-API-KEY": apiKey
        }
    }).then((result) => console.log(result))
}