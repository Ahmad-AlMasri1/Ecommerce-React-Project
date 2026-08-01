import React from 'react'
import { useMutation } from '@tanstack/react-query';
import authAxiosInstance from '../api/authAxiosInstance';
import { useQueryClient } from '@tanstack/react-query';
export default function useUpdateCartItem() {
    
    const queryClient = useQueryClient();
  
      return useMutation({

    mutationFn: async ({productId,count}) => {
        await authAxiosInstance.patch(`/Carts/${productId}`, {count})

    },onSuccess: () => {
        
        queryClient.invalidateQueries({ queryKey: ['cart'] });
    }
});

}