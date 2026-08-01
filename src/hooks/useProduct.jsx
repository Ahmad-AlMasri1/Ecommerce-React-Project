import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import axiosInstance from '../api/axiosInstance';
import i18n from '../i18next.jsx'
export default function useProduct() {
  const getProduct = async()=>{
            const response = await axiosInstance.get(`/Products`)
                
            return response.data;
            
        }
    
        const query = useQuery({
            queryKey:['product', i18n.language],
            queryFn:getProduct,
            staleTime:1000 *60 * 5
        })
    return query
}

