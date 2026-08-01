import axios from "axios";
import i18n from "../i18next.jsx";
const axiosInstance = axios.create({
    baseURL:`${import.meta.env.VITE_BURL}`,
    
});
axiosInstance.interceptors.request.use((config)=>{
    console.log(config);
    config.headers["Accept-Language"]=i18n.language; 
    return config;
})
export default axiosInstance;