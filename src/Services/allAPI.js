import commonAPI from "./commonAPI";
import SERVER_URL from "./server_url";

export const registerAPI = async(reqBody) => {
    return await commonAPI("POST", `${SERVER_URL}/register`,reqBody)
}

export const loginAPI = async(reqBody) => {
    return await commonAPI("POST",`${SERVER_URL}/login`,reqBody)
}

export const addContentAPI = async(reqBody,reqHeader) => {
    //add
    return await commonAPI("POST",`${SERVER_URL}/featuredexplore/add`,reqBody,reqHeader)
}

// export const allContentAPI = async() => {
//     //display
//     return await commonAPI("GET",`${SERVER_URL}/get-all-contents`,"")
// }

//allFeContentAPI - get -- display
export const allFeContentAPI = async(reqHeader) => {
    return await commonAPI("GET", `${SERVER_URL}/all-contents`,"",reqHeader)
}