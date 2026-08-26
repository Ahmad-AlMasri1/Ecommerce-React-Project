import React, { useState } from 'react'
import { Box , TextField, Typography , Button, CircularProgress, Container , OutlinedInput ,InputAdornment , IconButton , InputLabel ,FormControl } from '@mui/material'
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
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import i18n from '../../i18next';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import authAxiosInstance from '../../api/authAxiosInstance';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
export default function ResetPassword() {
  const setToken = useAuthStore((state) => state.setToken);
          const navigate = useNavigate();
          const { t } = useTranslation();
          const[serverErrors,setServerErrors] = useState([]);
          const {register , handleSubmit , formState:{errors,isSubmitting} } = useForm(
            {
              resolver:yupResolver(resetSchema)
            }
          );
          const ResetForm = async(data)=>{
            try{
              const response = await axiosInstance.patch('/auth/Account/ResetPassword',data);
              setToken(response.data.accessToken);
              navigate('/login');
            }catch(err){
              setServerErrors(err.response.data.message);
            }
          }
          const [showPassword , setShowPassword] = useState(false);
                      const handleClickShowPassword = () => setShowPassword((show) => !show);
                      const handleMouseDownPassword = (event) => {
                        event.preventDefault();
                      };
          
                      const handleMouseUpPassword = (event) => {
                        event.preventDefault();
                      };
                        const outlinedPasswordId = React.useId();

  return (
    
    <Container maxWidth="sm" sx={{height:'100vh' , mt:10}}> 
    <Card component="section" sx={{margin:'auto 0' , py:5}}>
      <CardContent sx={{display:'flex' , flexDirection:'column' ,alignItems:'center' , justifyContent:'space-between', gap:2 ,}}>
        <LockResetIcon sx={{fontSize:'90px', color:'#24389C'}}/>
      <Typography variant='h4' component="h1" sx={{mb:2}}>{t('Change Password')}</Typography>
      <Typography color='primary' sx={{fontSize:'14px' ,fontWeight:400, mt:-2}}>{t('Please enter your new password below to secure your account.')}</Typography>
      <TextField sx={{width:'85%'}} fullWidth {...register("code")} label={t('Code')} variant='outlined' error={errors.code} helperText={errors.code?.message}/>
      <FormControl sx={{ width:'85%'}} variant="outlined">
      
      <InputLabel htmlFor={`${outlinedPasswordId}-input`}>{t('New Password')}</InputLabel>
      <OutlinedInput
      id={`${outlinedPasswordId}-input`}
      endAdornment={
              <InputAdornment position="relative">
                <IconButton
                sx={{
                    position:'absolute',
                    mr:i18n.language === 'ar' ? '10px' : '0',
                    ml:i18n.language === 'en' ? '16px' : '0',
                    border:'2px solid',
                    p:'10px',
                    backgroundColor:showPassword?'#24389cb6':'#24389C'
                  }}
                  
                  aria-label={
                    showPassword ? 'hide the password' : 'display the password'
                  }
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              </InputAdornment>
            } fullWidth  type={showPassword ? 'text' : 'password'} {...register("newPassword")} label={t('NewPassword')}  variant='outlined' error={errors.Password} helperText={errors?.Password?.message}
            
            />
      
      </FormControl>
      


      
      
      
      
      <TextField sx={{width:'85%'}} fullWidth {...register("email")} label={t('Email Address')} variant='outlined' error={errors.email} helperText={errors.email?.message}/>
      <Typography color='error'>{serverErrors}</Typography>
      <Box onSubmit={handleSubmit(ResetForm)} component="form" sx={{marginTop:2 , display:'flex' , gap:3 , flexDirection:'column'}}>
          <Button  variant="contained" type="submit" disabled={isSubmitting} sx={{backgroundColor:'#24389C', textTransform:'none' , py:1.5 , px:10 , borderRadius:2}}>
            {t('Update Password')}{i18n.language === 'ar' ? <ArrowBackOutlinedIcon /> : <ArrowForwardIcon/>}
          </Button>
          <Button variant='outlined' sx={{ textTransform:'none' , py:1.5 , px:10 , borderRadius:2}} href='/'>
        {t('Cancel')}
        </Button>
      
      </Box>
      
    </CardContent>
    <CardActions>
      
    </CardActions>
    </Card>
    </Container>
  )
}
