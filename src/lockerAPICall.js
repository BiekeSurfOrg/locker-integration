import axios from "axios"

export function callLockedApi(lockerId){
    const URL = "https://lockerip:app-port/api/open/"
    const apiKey = "example Api key"

    console.log(URL+lockerId,"plus test" ,apiKey);
    
    axios.post(URL+lockerId,{},{
        headers:{
                "accept":"*/*",
                "X-API-KEY":apiKey
        }
    }).then((result)=>console.log(result))
}