import React from 'react'
import { useMutation } from '@tanstack/react-query';
import authAxiosInstance from '../api/authAxiosInstance';
import { Navigate } from 'react-router-dom';
export default function useCheckout() {
  return useMutation({
    mutationFn: async (paymentMethod) => {
      return await authAxiosInstance.post('/Checkouts', { paymentMethod });
    },onSuccess: (response) => {
      console.log(response);
        if(response?.data?.url !==null){
            window.location.href = response.data.url;
    }else {window.location.href= '/'}
    }});}
