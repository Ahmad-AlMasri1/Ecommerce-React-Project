import React from 'react'
import { Box, Container, Typography , Button, Grid } from '@mui/material';
import useThemeStore from '../../store/useThemeStore';
import { useTranslation } from 'react-i18next';
export default function AboutUs() {
  const {mode, toggleMode} = useThemeStore();
    const { t } = useTranslation();
  return (
    <>
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
        <Typography variant='h1'  sx={{fontSize:{xs:"32px",sm:"50px",md:"60px"},color:mode === 'dark' ? '#1A1B22' : '#24389C',mb:4,textAlign:'center'}}>
            {t('Redefining Modern Commerce')}
        </Typography>
        <Typography variant='p' sx={{fontSize:"16px",color:mode === 'dark' ? '#454652' : '#000000',textAlign:'center'}}>
           {t('We believe in creating seamless, intuitive, and beautiful shopping experiences that empower both creators and consumers in the digital age.')} 
        </Typography>
        
        </Container>
    
    </Box>

    {/* Our Story */}
    <Container sx={{my:4}}>
    <Grid container spacing={3} >
        <Grid size={{xs:12 , md:6}} sx={{px:2}}>
            <Typography sx={{fontSize:'48px' , color:'#24389C',mb:4}}>{t('Our Story')}</Typography>
            <Typography variant='p' sx={{fontSize:"12px",color:mode === 'dark' ? '#ffffff' : '#454652',textAlign:'center'}}>
           {t("Founded in 2024, ShopModern began with a simple idea: that corporate commerce doesn't have to be clinical. We saw a gap between high-end design principles and everyday e-commerce utility. Our vision was to bridge that gap by building a platform that marries aesthetic elegance with uncompromised functionality.")} 
        </Typography>
        <Typography variant='p' sx={{fontSize:"12px",color:mode === 'dark' ? '#ffffff' : '#454652',textAlign:'center'}}>
           {t("What started as a small team of designers and engineers has grown into a global community dedicated to pushing the boundaries of what a modern storefront can be. We prioritize clean architecture, logical user flows, and an unwavering commitment to quality.")} 
        </Typography>
        </Grid>
        <Grid size={{xs:12 , md:6}} sx={{
        backgroundSize:'cover',
        backgroundPosition:'center',
        backgroundImage: `url(${'https://i.pinimg.com/736x/50/19/71/501971fd12100f0a1d6210a59851f25e.jpg'})`,
        backgroundRepeat: 'no-repeat',
        borderRadius:3,
        boxShadow:3,
        minHeight:'35vh',
        
    
    }}>
        </Grid>
        
    </Grid>    
    </Container>


    </>
  )
}
