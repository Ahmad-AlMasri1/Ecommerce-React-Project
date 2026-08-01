import React from 'react'
import { useQuery } from '@tanstack/react-query';
import authAxiosInstance from '../api/authAxiosInstance';
import i18n from '../i18next.jsx'
export default function useCart() {
    const getItems = async ()=>{
        const response = await authAxiosInstance.get(`/Carts`);
        return response.data;
    }

    const query = useQuery({
        queryKey: ['cart', i18n.language],
        queryFn: getItems,
        staleTime: 1000 * 60 * 5,
    })
    return query;
  
}
