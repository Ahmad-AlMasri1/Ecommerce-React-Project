import axios from 'axios'
import React, { useEffect } from 'react'
import { get } from 'react-hook-form';
import authAxiosInstance from '../../api/authAxiosInstance';
import useCart from '../../hooks/useCart';
import { CircularProgress, Container, TableBody, TableCell, TableContainer, Typography } from '@mui/material';
import { Box, Table, TableHead, TableRow, Button } from '@mui/material';
import useAddToCart from '../../hooks/useAddToCart';
import useRemoveFromCart from '../../hooks/useRemoveFromCart';
import useUpdateCartItem from '../../hooks/useUpdateCartItem';
import IconButton from '@mui/material/IconButton';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import useThemeStore from '../../store/useThemeStore';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { useTranslation } from 'react-i18next';
import useClearCart from '../../hooks/useClearCart';
export default function Cart() {
  const {mutate : updateItem , isPending: isUpdatePending} = useUpdateCartItem();
  const{data, isLoading, isError, error} = useCart();
  const {mutate : removeItem , isPending: isRemovePending} = useRemoveFromCart();
  
  const {mutate : clearItems , isPending: isClearPending} = useClearCart();
  const navigate = useNavigate();
  const {mode, toggleMode} = useThemeStore();
  const {t} = useTranslation();
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
    <Container sx={{py:4,minHeight:'100vh'}}>
      <Typography component="h1" variant="h3">
       {t('Cart')} 
      </Typography>
            <Box sx={{boxShadow:4 , py:4 , px:3 , my:3 , borderRadius:2 , minHeight:{xs:400,md:700}}}>
            {data.items.map((item)=><Box key={item.id} sx={{my:3, }}>
              

                <Box sx={{backgroundColor: mode === 'light' ? '#F4F2FC' : '#1A1B22' ,display:'flex' , flexDirection:'column' , borderRadius:1 , p:2,gap:3,boxShadow:5, border:'1px solid #C5C5D4'}}>
                    <Box sx={{display:'flex' , justifyContent:'space-between'}}>
                      <Typography>{item.productName}</Typography>
                      <Typography>{(item.price * item.count)}$</Typography>
                    </Box>
                    <Box sx={{display:'flex' , justifyContent:'space-between'}}>
                        <Box sx={{border:'2px solid', boxShadow:2 , borderRadius:3 , backgroundColor: mode === 'light' ? 'white' : 'gray'}}>
                          <IconButton disabled={isUpdatePending}>
                            <RemoveIcon onClick={() => handleUpdate( item.productId,'-' )}/>
                          </IconButton>                           
                          {item.count}
                          <IconButton disabled={isUpdatePending} >
                            <AddIcon onClick={() => handleUpdate( item.productId,'+' )}/>
                          </IconButton>
                        </Box>
                          
                        <IconButton  disabled={isRemovePending} onClick={() => removeItem(item.productId)}>
                          <DeleteForeverOutlinedIcon />
                        </IconButton>
                    </Box>
                    
                </Box>

              </Box>
           )}
            </Box>
  

      <Box sx={{display:'flex' , gap:3,}}>
        {data.cartTotal > 0 ? 
        <Button variant="contained" onClick={() =>navigate('/checkout')} sx={{
          boxShadow:2,
          display:'flex',
          gap:1,
          justifyContent:{md:'start'},
          py:1.5,
          px:{xs:2,sm:5},
            backgroundColor:"#3F51B5",
            color:'#CACFFF',
          '&:hover':{
            backgroundColor: mode === 'light' ? 'white' : 'gray',
            color: mode === 'light' ? '#1A1B22' : 'white'
          }
        }}>
          <Typography sx={{fontSize:{xs:'11.5px',sm:'16px'},fontWeight:500, textTransform:'none'}}>{t('Proceed to Checkout')}</Typography>
        </Button> : ''}
        
        <Button variant="outlined" onClick={() =>navigate('/')} sx={{
          boxShadow:2,
          display:'flex',
          gap:1,
          justifyContent:{md:'start'},
          py:1.5,
          px:{xs:2,sm:5},
          '&:hover':{
            backgroundColor:"#3F51B5",
            color:'#CACFFF',
          }
        }}>
          <Typography sx={{fontSize:{xs:'11.5px',sm:'16px'},fontWeight:500 , textTransform:'none'}}>{t('Continue Shopping')}</Typography>
        </Button>
        <Button variant="outlined" disabled={isClearPending} href='/' onClick={() => clearItems(data?.items)} sx={{
          boxShadow:2,
          display:'flex',
          gap:1,
          justifyContent:{md:'start'},
          py:1.5,
          px:{xs:2,sm:5},
          backgroundColor:"red",
          color:'black',
          '&:hover':{
            
            color:'#CACFFF',
          }
        }}>
          <Typography sx={{fontSize:{xs:'11.5px',sm:'16px'},fontWeight:500 , textTransform:'none'}}>{t('Clear Cart')}</Typography>
        </Button>
      </Box>
    </Container>
  )
}
