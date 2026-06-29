import React from 'react'
import { Box , TextField, Typography , Button} from '@mui/material'
import { useForm } from 'react-hook-form';
import axios from 'axios';
export default function Register() {

          const {register , handleSubmit} = useForm();
          const RegisterForm = async(data)=>{
            try{
              const response = await axios.post(`${import.meta.env.VITE_BURL}/auth/Account/Register`,data)
            }catch(err){
              console.log(err);
            }
          }

  return (
    <Box component="section" >
      <Typography component="h1" variant="h2">
          Register
      </Typography>

      <Box onSubmit={handleSubmit(RegisterForm)} component="form" sx={{marginTop:2 , display:'flex' , gap:4 , flexDirection:'column'}}>
          <TextField fullWidth {...register("User Name")} label="User Name" variant='outlined' />
          <TextField fullWidth {...register("Email")} label="Email" variant='outlined' />
          <TextField fullWidth {...register("Password")} label="Password" variant='outlined' />
          <TextField fullWidth {...register("Full Name")} label="Full Name" variant='outlined' />
          <TextField fullWidth {...register("Phone Number")} label="Phone Number" variant='outlined' />
          <Button variant="contained" type="submit">
            Register
          </Button>
      </Box>
    </Box>
  )
}
