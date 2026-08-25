import React, { useState } from 'react'
import useCart from '../../hooks/useCart'
import { Box, Button, CircularProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography , Container ,FormLabel,RadioGroup , FormControlLabel ,Radio ,Grid } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import isPending from '../../hooks/useUpdateCartItem';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import useCheckout from '../../hooks/useCheckout';
import useThemeStore from '../../store/useThemeStore';
import { useTranslation } from 'react-i18next';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
export default function Checkout() {
    const [paymentMethod, setPaymentMethod] = useState('');
    const { mutate: checkout } = useCheckout();
    const {isLoading,error,data,isError}=useCart();
    const {mode, toggleMode} = useThemeStore();
    const navigate = useNavigate();
    const {t} = useTranslation();
    if(isLoading){
        return <CircularProgress/>
    }
    if(isError){
        return <div>Error: {error.message}</div>
    }
    let total = 0;
     {data.items.map((item)=>total+=item.totalPrice)}
  return (
    
        <Box component="section">
      <Container sx={{py:4,minHeight:'100vh'}}>
      <Typography component="h1" variant="h3">
        Checkout
      </Typography>
      
      <Grid container spacing={2}>
        <Grid size={{xs:12,sm:7}}>
          <Box>
            {data.items.map((item)=><Box key={item.id} sx={{my:3, }}>

                <Box sx={{backgroundColor: mode === 'light' ? '#F4F2FC' : '#1A1B22' ,display:'flex' , flexDirection:'column' , borderRadius:1 , p:2,gap:3,boxShadow:5, border:'1px solid #C5C5D4',}}>
                    <Box sx={{display:'flex' , justifyContent:'space-between'}}>
                      <Typography>{item.productName}</Typography>
                      <Typography>${(item.price * item.count)}</Typography>
                    </Box>
                    <Box sx={{display:'flex' , justifyContent:'space-between'}}>
                        <Box  sx={{border:'2px solid', boxShadow:2 , borderRadius:3 , backgroundColor: mode === 'light' ? 'white' : 'gray' , px:2 , py:1}}>
                              <Typography>{t('Quantity')} : {item.count} </Typography>   
                          </Box>                       
                    </Box>
                    
                </Box>

              </Box>
           )}</Box>
        </Grid>
          <Grid size={{xs:12,sm:5}}>
            <Box  sx={{backgroundColor: mode === 'light' ? '#F4F2FC' : '#1A1B22' ,display:'flex' , flexDirection:'column' , borderRadius:1 , p:2,gap:3,boxShadow:5, border:'1px solid #C5C5D4' , mt:3}}>
                <Typography sx={{fontSize:'20px',fontWeight:500}}>{t('Order Summary')}</Typography>
                <Box sx={{display:'flex' , justifyContent:'space-between' , borderTop:'1px solid #454652' , pt:2}}><Typography>{t('Subtotal')}</Typography> ${total}</Box> 
                <Box sx={{display:'flex' , justifyContent:'space-between' , borderBottom:'1px solid #454652' , pb:2}}><Typography>{t('Shipping')}</Typography> $20</Box> 
                <Box sx={{display:'flex' , justifyContent:'space-between' , pb:2 }}><Typography sx={{fontSize:'16px',fontWeight:500}}>{t('Total')}</Typography> <Typography sx={{fontSize:'20px' , fontWeight:600}}>${total + 20}</Typography></Box> 
                <Button sx={{
                    boxShadow:2,
                    display:'flex',
                    gap:1,
                    py:1.5,
                    px:{xs:2,sm:5},
                    backgroundColor:"#3F51B5",
                    '&:hover':{
                      color:'#CACFFF',
                    }
                  }} variant="contained" onClick={() => checkout(paymentMethod)} disabled={!paymentMethod}>
                  {t('Place Order')} <LockOutlinedIcon/>
                </Button>

              </Box>
           </Grid>
        </Grid>
      <FormControl fullWidth sx={{backgroundColor: mode === 'light' ? '#F4F2FC' : '#1A1B22' ,display:'flex' , flexDirection:'column' , borderRadius:1 , p:2,gap:3,boxShadow:5, border:'1px solid #C5C5D4',px:4,mt:4}}>
        <FormLabel sx={{fontSize:'20px',fontWeight:500}}>{t('Payment Method')}</FormLabel>
        <RadioGroup
          
          name="controlled-radio-buttons-group"
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
        >
          <FormControlLabel sx={{borderRadius:1 , p:2,gap:3,boxShadow:2, border:'1px solid #C5C5D4', mb:2}} value={'Visa'}control={<Radio  sx={{color:'#24389C' ,'&.Mui-checked':{color:'#24389C' }}} />} label={<Box sx={{display:'flex', gap:2 }}><CreditCardIcon />{ t('Credit / Debit Card') }</Box>} />
          <FormControlLabel sx={{borderRadius:1 , p:2,gap:3,boxShadow:2, border:'1px solid #C5C5D4'}} value={'Cash'} control={<Radio sx={{color:'#24389C' ,'&.Mui-checked':{color:'#24389C'}}} />} label={<Box sx={{display:'flex', gap:2 }}><LocalShippingOutlinedIcon />{ t('Cash on Delivery') }</Box>} />
        </RadioGroup>
       </FormControl>
      
      
    </Container>
      </Box>
      
    
  )
}
