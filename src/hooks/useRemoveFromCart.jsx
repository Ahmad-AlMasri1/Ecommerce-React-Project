import React from 'react'
import { useMutation } from '@tanstack/react-query';
import authAxiosInstance from '../api/authAxiosInstance';
import { useQueryClient } from '@tanstack/react-query';

export default function useRemoveFromCart() {
    const queryClient = useQueryClient();
    return useMutation(
        {
            mutationFn: async (cartItemId) => {
                return await authAxiosInstance.delete(`/Carts/${cartItemId}`);
            },
            onSuccess: () => {
                queryClient.invalidateQueries({ queryKey: ['cart'] });
            }
        }
    )
  
}
