import { Box, CircularProgress, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios'
import React from 'react'
import useCategories from '../../hooks/useCategories';
export default function Categories() {
    const {isLoading,isError,data,error} = useCategories();
    
    if(isLoading)return <CircularProgress/>

    if(isError)return <Typography color='red'>{error}</Typography>

  return (
    <>
        {data.response.data.map((Categories)=>
            <Box>
                <Typography>{Categories.name}</Typography>
            </Box>
        )}
    </>
    
  )
}
