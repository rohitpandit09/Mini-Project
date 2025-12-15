const API_KEY = "3292c3616a9549b795f532e781687b80"

const convertedData = async () =>{
    let response = fetch(API_KEY);
    console.log(response);
    let data = (await response).json();
    console.log(data);
}