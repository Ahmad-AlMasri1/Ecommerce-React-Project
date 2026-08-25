import React from 'react'
import { useQuery } from '@tanstack/react-query';
import authAxiosInstance from '../api/authAxiosInstance';
import i18n from '../i18next.jsx'
import useAuthStore from '../store/useAuthStore.jsx';
export default function useCartTotal() {
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
        return 0;
    }
    if(query?.data?.items?.length === 0){
        return 0;
    }else return query?.data?.items?.length;
}
