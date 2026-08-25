import React from 'react'
import { useQuery } from '@tanstack/react-query';
import authAxiosInstance from '../api/authAxiosInstance';
import i18n from '../i18next.jsx'
import useAuthStore from '../store/useAuthStore.jsx';
export default function useCartisEmpty() {
    const token = useAuthStore((state) => state.token);
    const getItems = async ()=>{
        const response = await authAxiosInstance.get(`/Carts`);
        return response.data;
    }

    const query = useQuery({
        queryKey: ['cart', i18n.language],
        queryFn: getItems,
        staleTime: 1000 * 60 * 5,
        enabled: token!==null,
    })
    if(token === null){
        return true;
    }
    if(query?.data?.cartTotal === 0){
        return true;
    }else return false;
  
}
