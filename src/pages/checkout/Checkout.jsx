import React, { useState } from 'react'
import useCart from '../../hooks/useCart'
import { Box, Button, CircularProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from '@mui/material'
import IconButton from '@mui/material/IconButton';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import isPending from '../../hooks/useUpdateCartItem';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import useCheckout from '../../hooks/useCheckout';
export default function Checkout() {
    const [paymentMethod, setPaymentMethod] = useState('');
    const { mutate: checkout } = useCheckout();
    const {isLoading,error,data,isError}=useCart();
    if(isLoading){
        return <CircularProgress/>
    }
    if(isError){
        return <div>Error: {error.message}</div>
    }
    
  return (
    <>
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
            </TableRow>
          </TableHead>

          <TableBody>
            {data.items.map((item)=><TableRow key={item.id}>
              <TableCell>{item.productName}</TableCell>
              <TableCell>{item.price}$</TableCell>

              <TableCell>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  {item.count}
                </Box>
              </TableCell>
              <TableCell>{(item.price * item.count)}$</TableCell>
            </TableRow>)}
            
          </TableBody>
        </Table>

      </TableContainer>
      </Box>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Payment Method</InputLabel>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={paymentMethod}
            label="Payment Method"
            onChange={(e) => setPaymentMethod(e.target.value)}
        >
            <MenuItem value={'Cash'}>Cash</MenuItem>
            <MenuItem value={'Visa'}>Visa</MenuItem>
        </Select>
       </FormControl>
       <Button variant="contained" onClick={() => checkout(paymentMethod)} disabled={!paymentMethod}>
        Pay Now
      </Button>
    </>
  )
}
