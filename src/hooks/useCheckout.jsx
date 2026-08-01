import React from 'react'
import { useMutation } from '@tanstack/react-query';
import authAxiosInstance from '../api/authAxiosInstance';
export default function useCheckout() {
  return useMutation({
    mutationFn: async (paymentMethod) => {
      return await authAxiosInstance.post('/Checkouts', { paymentMethod });
    },onSuccess: (response) => {
        if(response?.data?.url){
            window.location.href = response.data.url;
    }
    }});}
