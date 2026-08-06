import React from 'react'
import { useQuery } from '@tanstack/react-query';
import authAxiosInstance from '../api/authAxiosInstance';
import axiosInstance from '../api/axiosInstance.js';
import i18n from '../i18next.jsx'
import { Typography } from '@mui/material';
export default function usePersonalInfo() {
    
    const getItems = async ()=>{
        try{
        const response = await authAxiosInstance.get(`/Profile`);
        return response.data;
        }catch(error){
            return <Typography color='error'>{error}</Typography>
        }
    }

    const query = useQuery({
        queryKey: ['info'],
        queryFn: getItems,
        staleTime: 1000 * 60 * 5,
    })
    return query;
  
}
