import axios from "axios";

export const rootUrl = "http://202.183.242.27";
export const testApi = axios.create({
    baseURL: `${rootUrl}/sep`,
    timeout: 120000
})

export const setTokenApi = (token:string) =>{
    testApi.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}