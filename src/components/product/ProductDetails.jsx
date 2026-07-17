import React from 'react'
import { useParams } from 'react-router-dom';
import useProductDetails from '../../hooks/useProductDetails';
import { Box, Typography } from '@mui/material';
export default function ProductDetails() {
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
    </Box>
  )
}
