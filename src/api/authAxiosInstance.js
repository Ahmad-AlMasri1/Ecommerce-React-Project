import axios from "axios";
import useAuthStore from "../store/useAuthStore";
import i18n from "../i18next.jsx";
const token = useAuthStore.getState().token;
const authAxiosInstance = axios.create({
    baseURL:`${import.meta.env.VITE_BURL}`,
    headers:{       
        "Authorization":`Bearer ${token}`,
        "Accept-Language":i18n.language,
    }
});

export default authAxiosInstance;