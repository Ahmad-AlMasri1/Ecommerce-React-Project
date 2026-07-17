import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import axiosInstance from '../api/axiosInstance';
export default function useProduct() {
  const getProduct = async()=>{
            const response = await axiosInstance.get(`/Products`)
                
            return response.data;
            
        }
    
        const query = useQuery({
            querKey:['product'],
            queryFn:getProduct,
            staleTime:1000 *60 * 5
        })
    return query
}

