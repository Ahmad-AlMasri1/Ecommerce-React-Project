import React, { useState } from 'react'
import { Box , TextField, Typography , Button, CircularProgress} from '@mui/material'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { registerSchema } from '../../validations/RegisterSchema';
import axiosInstance from '../../api/axiosInstance';
export default function Register() {


          const[serverErrors,setServerErrors] = useState([]);
          const {register , handleSubmit , formState:{errors,isSubmitting} } = useForm(
            {
              resolver:yupResolver(registerSchema)
            }
          );
          const RegisterForm = async(data)=>{
            try{
              const response = await axiosInstance.post(`/auth/Account/Register`,data)
            }catch(err){
              setServerErrors(err.response.data.errors)
            }
          }

  return (
    <Box component="section" >
      <Typography component="h1" variant="h2">
          Register
      </Typography>
      {serverErrors?.length > 0 ? serverErrors.map((error)=>
      <Typography color="error">{error}</Typography>
        )   :''}
      <Box onSubmit={handleSubmit(RegisterForm)} component="form" sx={{marginTop:2 , display:'flex' , gap:4 , flexDirection:'column'}}>
          <TextField fullWidth {...register("UserName")} label="UserName" variant='outlined' error={errors.UserName} helperText={errors.UserName?.message}/>
          <TextField fullWidth {...register("Email")} label="Email" variant='outlined' error={errors.Email} helperText={errors.Email?.message}/>
          <TextField fullWidth {...register("Password")} label="Password" variant='outlined' error={errors.Password} helperText={errors.Password?.message}/>
          <TextField fullWidth {...register("FullName")} label="FullName" variant='outlined' error={errors.FullName} helperText={errors.FullName?.message}/>
          <TextField fullWidth {...register("PhoneNumber")} label="PhoneNumber" variant='outlined' error={errors.PhoneNumber} helperText={errors.PhoneNumber?.message}/>
          <Button variant="contained" type="submit" disabled={isSubmitting}>
            {isSubmitting? <CircularProgress /> :"Register"}
          </Button>
      </Box>
    </Box>
  )
}
