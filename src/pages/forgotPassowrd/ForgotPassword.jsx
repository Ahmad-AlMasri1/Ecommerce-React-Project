import React, { useState } from 'react'
import { Box , TextField, Typography , Button, CircularProgress, Container} from '@mui/material'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { loginSchema } from '../../validations/LoginSchema';
import axiosInstance from '../../api/axiosInstance';
import useAuthStore from '../../store/useAuthStore';
import { Link, useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { useTranslation } from 'react-i18next';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import LockResetIcon from '@mui/icons-material/LockReset';
import { resetSchema } from '../../validations/ResetSchema';
import { forgotSchema } from '../../validations/ForgotSchema';
export default function ForgotPassword() {
  const setToken = useAuthStore((state) => state.setToken);
          const navigate = useNavigate();
          const { t } = useTranslation();
          const[serverErrors,setServerErrors] = useState([]);
          const {register , handleSubmit , formState:{errors,isSubmitting} } = useForm(
            {
              resolver:yupResolver(forgotSchema)
            }
          );
          const ForgotForm = async(data)=>{
            try{
              const response = await axiosInstance.post(`/auth/Account/SendCode`,data)
              setToken(response.data.accessToken);
              navigate('/reset');
            }catch(err){
              setServerErrors(err.response.data.message);
            }
          }

  return (
    
    <Container maxWidth="sm" sx={{height:'100vh' , mt:10}}> 
    <Card component="section" sx={{margin:'auto 0' , py:5}}>
      <CardContent sx={{display:'flex' , flexDirection:'column' ,alignItems:'center' , justifyContent:'space-between', gap:2 ,}}>
        <LockResetIcon sx={{fontSize:'90px', color:'#24389C'}}/>
      <Typography variant='h4' component="h1" sx={{mb:2}}>{t('Forgot Password')}</Typography>
      <Typography color='primary' sx={{fontSize:'14px' ,fontWeight:400, mt:-2}}>{t('Enter your email address and we\'ll send you an OTP to reset your password.')}</Typography>
      <TextField sx={{width:'90%'}} fullWidth {...register("email")} label={t('Email Address')} variant='outlined' error={errors.Email} helperText={errors.Email?.message}/>
      <Typography color='error'>{serverErrors}</Typography>
      <Box onSubmit={handleSubmit(ForgotForm)} component="form" sx={{marginTop:2 , display:'flex' , gap:4 , }}>
          <Button  variant="contained" type="submit" disabled={isSubmitting} sx={{backgroundColor:'#24389C', textTransform:'none' , py:1.5 , px:10}}>
            <Typography noWrap>{t('Send OTP')}</Typography><SendOutlinedIcon sx={{mx:1}}/>
          </Button>
      </Box>
      <Box sx={{display:'flex', gap:1}}>
          <Link to="/Login"><Typography color='primary'>{t('Back To Login')}</Typography></Link> 
      </Box>
      
    </CardContent>
    <CardActions>
      
    </CardActions>
    </Card>
    </Container>
  )
}
