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

//allFeContentAPI - get -- display
export const allFeContentAPI = async(reqHeader) => {
    return await commonAPI("GET", `${SERVER_URL}/all-contents`,"",reqHeader)
}

//update
export const updateContentAPI = async(cid,reqBody,reqHeader) => {
    return await commonAPI("PUT", `${SERVER_URL}/featuredexplore/${cid}/update`,reqBody,reqHeader)
}

//delete - done !!
export const deleteContentAPI = async(cid,reqHeader) => {
    return await commonAPI("DELETE", `${SERVER_URL}/featuredexplore/${cid}/delete`,{},reqHeader)
}
