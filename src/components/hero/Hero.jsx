import React from 'react'
import { Box, Container, Typography , Button } from '@mui/material';
import useThemeStore from '../../store/useThemeStore';
import { useTranslation } from 'react-i18next';
export default function Hero() {
    const {mode, toggleMode} = useThemeStore();
    const { t } = useTranslation();
  return (
    <Box sx={{
        backgroundSize:'cover',
        backgroundPosition:'center',
        backgroundImage: `linear-gradient(#D3D3D380, #D3D3D380), url(${'https://i.ibb.co/xSRjCnCh/Hero.png'})`,
        backgroundRepeat: 'no-repeat',
        minHeight:'80vh',
    }}>
        <Container sx={{
            display:'flex',
            flexDirection:'column',
            gap:4,
            justifyContent:'space-between',
            alignItems:'center',
            py:'30vh',
            
        }}>
        <Typography variant='h1' noWrap sx={{fontSize:{xs:"32px",sm:"50px",md:"60px"},color:mode === 'dark' ? '#1A1B22' : '#000000',mb:4}}>
            {t('Upgrade Your Lifestyle')}
        </Typography>
        <Typography variant='p' sx={{fontSize:"16px",color:mode === 'dark' ? '#454652' : '#000000'}}>
           {t('Discover our new collection of premium essentials designed for the modern individual.')} 
        </Typography>
        <Button href='/products' variant='contained' sx={{backgroundColor:'#24389C',display:'flex' , px:'25px', py:'7px'}}>
          {t('Shop Now') } 
        </Button>
        </Container>
    
    </Box>
  )
}
