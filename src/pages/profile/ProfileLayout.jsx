import React from 'react'
import { Box, Button, Container, Typography } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import usePersonalInfo from '../../hooks/usePersonalInfo'
import { useTranslation } from 'react-i18next'
import useAuthStore from '../../store/useAuthStore'
import PersonIcon from '@mui/icons-material/Person';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
export default function ProfileLayout() {
  const{data, isLoading, isError, error}  =  usePersonalInfo();
  const {t} = useTranslation();
  const Logout = useAuthStore((state) => state.Logout);
  return (
    <Container sx={{pt:5 , display:'flex' , gap:5 , minHeight:'90vh'}}>
      <Box sx={{display:'flex' , flexDirection:'column', gap:4 , width:'100'}}>
        <Box sx={{borderRadius:2 , backgroundColor:'#CACFFF' , pb:3,pt:2 , px:3 , display:'flex' , flexDirection:'column', boxShadow:4}}>
          <Typography sx={{color:'#1A1B22' , fontSize:'20px' , fontWeight:500}}>{data.fullName}</Typography>
          <Typography  sx={{color:'#454652'}}>{data.email}</Typography>
        </Box>
      <Button 
        variant='outlined'
        sx={{
          boxShadow:2,
          display:'flex',
          gap:1,
          justifyContent:'start',
          py:1.5,
          px:5,
          '&:hover':{
            backgroundColor:"#3F51B5",
            color:'#CACFFF',
          }
        }}
      component={Link} to="">
        <PersonIcon/>
        {t('Personal Info')}
      </Button>
      <Button 
      variant='outlined'
        sx={{
          boxShadow:2,
          display:'flex',
          gap:1,
          justifyContent:'start',
          py:1.5,
          px:5,
          '&:hover':{
            backgroundColor:"#3F51B5",
            color:'#CACFFF',
          }
        }} component={Link}   to="orders">
         <ReceiptLongOutlinedIcon/> 
        {t('Order History')}
      </Button>
      <Button 
      onClick={Logout}
      variant='outlined'
        sx={{
          boxShadow:2,
          display:'flex',
          gap:1,
          justifyContent:'start',
          py:1.5,
          px:5,
          '&:hover':{
            backgroundColor:"#3F51B5",
            color:'#CACFFF',
          }
        }} component={Link}   to="/login">
          <LogoutOutlinedIcon />
        {t('Sign Out')}
      </Button>
      </Box>
      <Box>
        <Outlet />
      </Box>
      
    </Container>
  )
}
