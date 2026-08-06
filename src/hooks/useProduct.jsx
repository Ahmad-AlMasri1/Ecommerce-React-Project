import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import axiosInstance from '../api/axiosInstance';
import i18n from '../i18next.jsx'
export default function useProduct({sortBy , order , min , max}) {
  const getProduct = async()=>{
            const response = await axiosInstance.get(`/Products?page=1&limit=5&sortBy=${sortBy}&ascending=${order}&minPrice=${min}&maxPrice=${max}`)
                
            return response.data;
            
        }
    
        const query = useQuery({
            queryKey:['product', i18n.language],
            queryFn:getProduct,
            staleTime:1000 *60 * 5
        })
    return query
}

