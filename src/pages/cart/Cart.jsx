import axios from 'axios'
import React, { useEffect } from 'react'
import { get } from 'react-hook-form';
import authAxiosInstance from '../../api/authAxiosInstance';
import useCart from '../../hooks/useCart';
import { CircularProgress, TableBody, TableCell, TableContainer, Typography } from '@mui/material';
import { Box, Table, TableHead, TableRow, Button } from '@mui/material';
import useAddToCart from '../../hooks/useAddToCart';
import useRemoveFromCart from '../../hooks/useRemoveFromCart';
export default function Cart() {
  
  const{data, isLoading, isError, error} = useCart();
  const {mutate : removeItem , isPending} = useRemoveFromCart();
  if(isLoading){
    return <CircularProgress/>
  }
  if(isError){
    return <div>Error: {error.message}</div>
  }
  

  return (
    <Box component="section">
      <Typography component="h1" variant="h3">
        Cart
      </Typography>
      <TableContainer>

        <Table>
          <TableHead>
            <TableCell>
              Product Name
            </TableCell>
            <TableCell>
              Price
            </TableCell>
            <TableCell>
              Quantity
            </TableCell>
            <TableCell>
              Total
            </TableCell>
            <TableCell>
              Actions
            </TableCell>
          </TableHead>

          <TableBody>
            {data.items.map((item)=><TableRow key={item.id}>
              <TableCell>{item.productName}</TableCell>
              <TableCell>{item.price}$</TableCell>
              <TableCell>{item.count}</TableCell>
              <TableCell>{(item.price * item.count)}$</TableCell>
              <TableCell>
                <Button variant="contained" color="error" disabled={isPending} onClick={() => removeItem(item.productId)}>
                  Remove
                </Button>
              </TableCell>
            </TableRow>)}
            
          </TableBody>
        </Table>

      </TableContainer>
    </Box>
  )
}
