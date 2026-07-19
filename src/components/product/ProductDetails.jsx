import React from 'react'
import { useParams } from 'react-router-dom';
import useProductDetails from '../../hooks/useProductDetails';
import { Box, Typography , Button} from '@mui/material';
import useAddToCart from '../../hooks/useAddToCart';
export default function ProductDetails() {
    const {mutate : addToCart} = useAddToCart();
    const {id} = useParams();
    const {data,isLoading,isError,error} = useProductDetails(id);
    if(isLoading){
        return <div>Loading...</div>
    }
    if(isError){
        return <div>Error: {error.message}</div>
    }
  return (
    <Box>
      <Typography variant="h4">{data.response.name}</Typography>
      <Typography variant="body2">{data.response.description}</Typography>

      <Button onClick={() => {addToCart({ productId: data.response.id , count: 1 })}}>Add to Cart</Button>
    </Box>
  )
}
