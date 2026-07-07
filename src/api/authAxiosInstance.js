import axios from "axios";
const token = localStorage.getItem('accessToken');
const authAxiosInstance = axios.create({
    baseURL:`${import.meta.env.VITE_BURL}`,
    headers:{       "Authorization":`Bearer ${token}`,
                    "Accept-Language":"en"
    }
});
export default authAxiosInstance;