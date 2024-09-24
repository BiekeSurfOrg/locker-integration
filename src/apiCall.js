import axios from "axios"

export function callLockedApi(locker){
    const apiKey = "example Api key"
    console.log(`https://lockerip:app-port/api/open/${locker}`, apiKey);
    
    axios.post(`https://lockerip:app-port/api/open/${locker}`,{},{
        headers:{
                "accept":"*/*",
                "X-API-KEY":apiKey
        }
    }).then((result)=>console.log(result))
}