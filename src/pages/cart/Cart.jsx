import axios from 'axios'
import React, { useEffect } from 'react'
import { get } from 'react-hook-form';
import authAxiosInstance from '../../api/authAxiosInstance';
import useCart from '../../hooks/useCart';
import { CircularProgress, TableBody, TableCell, TableContainer, Typography } from '@mui/material';
import { Box, Table, TableHead, TableRow, Button } from '@mui/material';
import useAddToCart from '../../hooks/useAddToCart';
import useRemoveFromCart from '../../hooks/useRemoveFromCart';
import useUpdateCartItem from '../../hooks/useUpdateCartItem';
import IconButton from '@mui/material/IconButton';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
export default function Cart() {
  const {mutate : updateItem , isPending: isUpdatePending} = useUpdateCartItem();
  const{data, isLoading, isError, error} = useCart();
  const {mutate : removeItem , isPending: isRemovePending} = useRemoveFromCart();
  const navigate = useNavigate();
  const handleUpdate = (productId, action) => {
    if (action === '+') {
      updateItem({ productId, count: data.items.find(item => item.productId === productId).count + 1 });
    } else if (action === '-') {
      const currentCount = data.items.find(item => item.productId === productId).count;
      if (currentCount > 1) {
        updateItem({ productId, count: currentCount - 1 });
      } else {
        removeItem(productId);
      }
    }
  };
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
            <TableRow>
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
            </TableRow>
          </TableHead>
          <TableBody>
            {data.items.map((item)=><TableRow key={item.id}>
              <TableCell>{item.productName}</TableCell>
              <TableCell>{item.price}$</TableCell>

              <TableCell>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <IconButton disabled={isUpdatePending} >
                    <AddIcon onClick={() => handleUpdate( item.productId,'+' )}/>
                  </IconButton>
                  {item.count}
                  <IconButton disabled={isUpdatePending}>
                    <RemoveIcon onClick={() => handleUpdate( item.productId,'-' )}/>
                  </IconButton>
                </Box>
              </TableCell>
              <TableCell>{(item.price * item.count)}$</TableCell>
              <TableCell>
                <Button variant="contained" color="error" disabled={isRemovePending} onClick={() => removeItem(item.productId)}>
                  Remove
                </Button>
              </TableCell>
            </TableRow>)}
            
          </TableBody>
        </Table>

      </TableContainer>
      <Box>
        <Button variant="contained" onClick={() =>navigate('/checkout')}>
          Proceed to Checkout
        </Button>
        <Button variant="outlined" onClick={() =>navigate('/')}>
          Continue Shopping
        </Button>
      </Box>
    </Box>
  )
}
