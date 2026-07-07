import React, { useState } from 'react'
import { Box , TextField, Typography , Button, CircularProgress} from '@mui/material'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { loginSchema } from '../../validations/LoginSchema';
import axiosInstance from '../../api/axiosInstance';
export default function Login() {


          const[serverErrors,setServerErrors] = useState([]);
          const {register , handleSubmit , formState:{errors,isSubmitting} } = useForm(
            {
              resolver:yupResolver(loginSchema)
            }
          );
          const LoginForm = async(data)=>{
            try{
              const response = await axiosInstance.post(`/auth/Account/Login`,data)
              localStorage.setItem("accessToken",response.data.accessToken)
            }catch(err){
              setServerErrors(err.response.data.errors)
            }
          }

  return (
    <Box component="section" >
      <Typography component="h1" variant="h2">
          Login
      </Typography>
      {serverErrors?.length > 0 ? serverErrors.map((error)=>
      <Typography color="error">{error}</Typography>
        )   :''}
      <Box onSubmit={handleSubmit(LoginForm)} component="form" sx={{marginTop:2 , display:'flex' , gap:4 , flexDirection:'column'}}>
         
          <TextField fullWidth {...register("Email")} label="Email" variant='outlined' error={errors.Email} helperText={errors.Email?.message}/>
          <TextField fullWidth {...register("Password")} label="Password" variant='outlined' error={errors.Password} helperText={errors.Password?.message}/>
          <Button variant="contained" type="submit" disabled={isSubmitting}>
            {isSubmitting? <CircularProgress /> :"Login"}
          </Button>
      </Box>
    </Box>
  )
}
