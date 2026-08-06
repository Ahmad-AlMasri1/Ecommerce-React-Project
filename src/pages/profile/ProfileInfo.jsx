import React from 'react'
import usePersonalInfo from '../../hooks/usePersonalInfo';
import authAxiosInstance from '../../api/authAxiosInstance';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
export default function ProfileInfo() {
  const{data, isLoading, isError, error}  =  usePersonalInfo();
  const {t} = useTranslation();
  return (
    <>
    <Typography sx={{fontSize:'34px', fontWeight:400 , pb:2}}>{t('Personal Information')}</Typography>
    <Box sx={{boxShadow:4, display:'flex' , flexDirection:'column', justifyContent:'space-around', px:4 , alignItems:'start' , padding:'auto auto' , minWidth:'60vh', minHeight:'45vh' , borderRadius:2 , pb:3}}>
      
      <Box sx={{display:'flex' ,flexDirection:'column', gap:2}}>
        <Typography sx={{fontSize:'20px' , fontWeight:500}}>{t('Full Name')}</Typography>
        <Typography sx={{borderRadius:2, border:'2px solid' , minWidth:'40vh' , py:2 , px:2 , boxShadow:2}}>{data.fullName}</Typography>
        </Box>
      <Box sx={{display:'flex' ,flexDirection:'column', gap:2}}>
        <Typography sx={{fontSize:'20px' , fontWeight:500}}>{t('Email Address')}</Typography>
        <Typography sx={{borderRadius:2, border:'2px solid' , minWidth:'40vh' , py:2 , px:2 , boxShadow:2}}>{data.email}</Typography>
        </Box>
      <Box sx={{display:'flex' ,flexDirection:'column', gap:2}}>
        <Typography sx={{fontSize:'20px' , fontWeight:500}}>{t('Phone Number')}</Typography>
        <Typography sx={{borderRadius:2, border:'2px solid' , minWidth:'40vh' , py:2 , px:2 , boxShadow:2}}>{data.phoneNumber}</Typography>
        </Box>
    </Box>
    </>
  )
}
