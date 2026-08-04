import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import axiosInstance from '../api/axiosInstance';
import i18n from '../i18next.jsx'
export default function useCategories() {
  const getCategories = async()=>{
            const response = await axiosInstance.get(`/Categories`)
                
            return response.data;
            
        }
    
        const query = useQuery({
            queryKey:['categories', i18n.language],
            queryFn:getCategories,
            staleTime:1000 *60 * 5
        })
    return query
}

