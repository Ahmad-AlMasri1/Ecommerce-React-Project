import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import axiosInstance from '../api/axiosInstance';
export default function useProductDetails(id) {
    const getProductDetails = async()=>{
        const response = await axiosInstance.get(`/Products/${id}`);
        return response.data;
    }
    const query = useQuery({
        querKey:['productDetails','en',id],
        queryFn:getProductDetails,
        staleTime:1000 *60 * 5
    })
  return (
    query
  )
}
