import React from 'react'
import { Box, Container, Typography , Button } from '@mui/material';
import useThemeStore from '../../store/useThemeStore';
import { useTranslation } from 'react-i18next';
export default function AboutUs() {
  const {mode, toggleMode} = useThemeStore();
    const { t } = useTranslation();
  return (
    <Box sx={{
        backgroundSize:'cover',
        backgroundPosition:'center',
        backgroundImage: `linear-gradient(#D3D3D380, #D3D3D380), url(${'https://i.pinimg.com/736x/35/47/48/354748471cbad482eccf036d1db1a86c.jpg'})`,
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
        <Typography variant='h1' noWrap sx={{fontSize:{xs:"32px",sm:"50px",md:"60px"},color:mode === 'dark' ? '#1A1B22' : '#24389C',mb:4,textAlign:'center'}}>
            {t('Redefining Modern Commerce')}
        </Typography>
        <Typography variant='p' sx={{fontSize:"16px",color:mode === 'dark' ? '#454652' : '#000000',textAlign:'center'}}>
           {t('We believe in creating seamless, intuitive, and beautiful shopping experiences that empower both creators and consumers in the digital age.')} 
        </Typography>
        
        </Container>
    
    </Box>
  )
}
