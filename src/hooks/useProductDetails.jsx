import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import i18n from '../i18next.jsx'
import axiosInstance from '../api/axiosInstance';
export default function useProductDetails(id) {
    const getProductDetails = async()=>{
        const response = await axiosInstance.get(`/Products/${id}`);
        return response.data;
    }
    const query = useQuery({
        querKey:['productDetails',i18n.language,id],
        queryFn:getProductDetails,
        staleTime:1000 *60 * 5
    })
  return (
    query
  )
}
