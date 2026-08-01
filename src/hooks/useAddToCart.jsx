import React from 'react'
import { useMutation } from '@tanstack/react-query';
import authAxiosInstance from '../api/authAxiosInstance';
import { useQueryClient } from '@tanstack/react-query';
export default function useAddToCart() {
    const queryClient = useQueryClient();
    return useMutation(
        {
            mutationFn: async (values) => {
                return await authAxiosInstance.post(`/Carts`, {
                    ProductId: values.productId,
                    Count: values.count
                });
    },onSuccess: (data) => {
        queryClient.invalidateQueries({ queryKey: ['cart'] });
    }

}

)
}
