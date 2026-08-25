import React from 'react'
import { Box, Container, Typography , Button, Grid } from '@mui/material';
import useThemeStore from '../../store/useThemeStore';
import { useTranslation } from 'react-i18next';
import SpaOutlinedIcon from '@mui/icons-material/SpaOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import Avatar from '@mui/material/Avatar';
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
    {/* Core Values */}
    <Container>
        <Typography sx={{fontSize:'48px' , color:'#24389C',mb:1,textAlign:'center'}}>{t('Core Values')}</Typography>
        <Typography  sx={{fontSize:"16px",color:mode === 'dark' ? '#ffffff' : '#454652',textAlign:'center'}}>{t('The principles that guide our every decision.')}</Typography>

        <Grid container spacing={2} sx={{my:2 , justifyContent:'center'}} >
            <Grid size={{xs:6 , sm:4}} sx={{display:'flex' , flexDirection:'column' , gap:2 , borderRadius:3 , boxShadow:3 , backgroundColor: mode === 'light' ? '#F4F2FC' : '#1A1B22',p:3 , border:'1px solid rgba(197, 197, 212, 0.30)',
                backgroundImage: mode === 'light' 
        ? 'radial-gradient(circle at top right, rgba(63, 81, 181, 0.20) 20%, transparent 60%)'
        : 'radial-gradient(circle at top right, rgba(63, 81, 181, 0.20) 15%, transparent 50%)',       
            }}>
                <SpaOutlinedIcon sx={{color:'#24389C'}}/>
                <Typography sx={{fontSize:{xs:'12px',md:'20px'}, fontWeight:500}}>{t('Sustainability')}</Typography>
                <Typography sx={{fontSize:{xs:'10px',md:'14px'}, fontWeight:400}}>{t("We are committed to reducing our footprint. From eco-friendly packaging to sustainable sourcing, we prioritize the planet in our operations.")}</Typography>
            </Grid>
            <Grid size={{xs:6 , sm:4}} sx={{display:'flex' , flexDirection:'column' , gap:2 , borderRadius:3 , boxShadow:3 , backgroundColor: mode === 'light' ? '#F4F2FC' : '#1A1B22',p:3 , border:'1px solid rgba(197, 197, 212, 0.30)',
           backgroundImage: mode === 'light' 
        ? 'radial-gradient(circle at top right, rgba(253, 192, 3, 0.20) 20%, transparent 60%)'
        : 'radial-gradient(circle at top right, rgba(253, 192, 3, 0.20) 15%, transparent 50%)',
            }}>
                <VerifiedOutlinedIcon sx={{color:'#785900'}}/>
                <Typography sx={{fontSize:{xs:'12px',md:'20px'}, fontWeight:500}}>{t('Uncompromising Quality')}</Typography>
                <Typography sx={{fontSize:{xs:'10px',md:'14px'}, fontWeight:400}}>{t("We believe in building things that last. Every component, every line of code, and every product interaction is crafted with meticulous attention to detail.")}</Typography>
            </Grid>
            <Grid size={{xs:6 , sm:4}} sx={{display:'flex' , flexDirection:'column' , gap:2 , borderRadius:3 , boxShadow:3 , backgroundColor: mode === 'light' ? '#F4F2FC' : '#1A1B22',p:3 , border:'1px solid rgba(197, 197, 212, 0.30)',
                backgroundImage: mode === 'light' 
        ? 'radial-gradient(circle at top right, rgba(143, 71, 0, 0.20) 20%, transparent 60%)'
        : 'radial-gradient(circle at top right, rgba(143, 71, 0, 0.20) 15%, transparent 50%)',
            }}>
                <GroupsOutlinedIcon sx={{color:'#6C3400'}}/>
                <Typography sx={{fontSize:{xs:'12px',md:'20px'}, fontWeight:500}}>{t('Customer First')}</Typography>
                <Typography sx={{fontSize:{xs:'10px',md:'14px'}, fontWeight:400}}>{t("Our design philosophy centers entirely around the user. We strive to create frictionless, intuitive experiences that anticipate and resolve needs.")}</Typography>
            </Grid>
        </Grid>
    
    
    </Container>
    {/* Meet The Team */}
    <Container sx={{my:4}}>
        <Typography sx={{fontSize:'48px' , color:'#24389C',mb:1,textAlign:'center'}}>{t('Meet the Team')}</Typography>
        <Typography  sx={{fontSize:"16px",color:mode === 'dark' ? '#ffffff' : '#454652',textAlign:'center'}}>{t('The minds behind the modern experience.')}</Typography>

        <Grid container spacing={2} sx={{my:2 , justifyContent:'center'}} >
            <Grid size={{xs:6,sm:4,md:3}} sx={{display:'flex',justifyContent:'center',flexDirection:'column' , alignItems:'center'}}>
                <Avatar
                    variant="square"
                    src="https://i.pinimg.com/736x/c7/3b/d9/c73bd9b26311039e7b3f879481263f88.jpg"
                    sx={{ width: 120, height: 120, borderRadius:3 , mb:2 , boxShadow:3 , border:'4px solid #EFEDF6'}}
                    />
                <Typography sx={{fontSize:'20px' ,mb:1,textAlign:'center'}}>Elena Rostova</Typography>
                <Typography  sx={{fontSize:"16px",color:mode === 'dark' ? '#ffffff' : '#454652',textAlign:'center'}}>{t('Head of Design')}</Typography>
    
            </Grid>
            <Grid size={{xs:6,sm:4,md:3}} sx={{display:'flex',justifyContent:'center',flexDirection:'column' , alignItems:'center'}}>
                <Avatar
                    variant="square"
                    src="https://i.pinimg.com/736x/c7/6e/05/c76e054ccdcdfc4370a1a86cbae7ec01.jpg"
                    sx={{ width: 120, height: 120, borderRadius:3 , mb:2 , boxShadow:3 , border:'4px solid #EFEDF6'}}
                    />
                <Typography sx={{fontSize:'20px' ,mb:1,textAlign:'center'}}>Marcus Chen</Typography>
                <Typography  sx={{fontSize:"16px",color:mode === 'dark' ? '#ffffff' : '#454652',textAlign:'center'}}>{t('Founder & CEO')}</Typography>
    
            </Grid>
            <Grid size={{xs:6,sm:4,md:3}} sx={{display:'flex',justifyContent:'center',flexDirection:'column' , alignItems:'center'}}>
                <Avatar
                    variant="square"
                    src="https://i.pinimg.com/736x/05/57/5d/05575d63e8eddbc332b63864b8f2f4b4.jpg"
                    sx={{ width: 120, height: 120, borderRadius:3 , mb:2 , boxShadow:3 , border:'4px solid #EFEDF6'}}
                    />
                <Typography sx={{fontSize:'20px' ,mb:1,textAlign:'center'}}>Sarah Jenkins</Typography>
                <Typography  sx={{fontSize:"16px",color:mode === 'dark' ? '#ffffff' : '#454652',textAlign:'center'}}>{t('Lead Engineer')}</Typography>
    
            </Grid>
            <Grid size={{xs:6,sm:4,md:3}} sx={{display:'flex',justifyContent:'center',flexDirection:'column' , alignItems:'center'}}>
                <Avatar
                    variant="square"
                    src="https://i.pinimg.com/736x/ce/ad/94/cead941fca1ea8075e01f564f1eedf98.jpg"
                    sx={{ width: 120, height: 120, borderRadius:3 , mb:2 , boxShadow:3 , border:'4px solid #EFEDF6'}}
                    />
                <Typography sx={{fontSize:'20px' ,mb:1,textAlign:'center'}}>David Al-Sayed</Typography>
                <Typography  sx={{fontSize:"16px",color:mode === 'dark' ? '#ffffff' : '#454652',textAlign:'center'}}>{t('Marketing Director')}</Typography>
    
            </Grid>
        </Grid>
    
    
    </Container>       
    </>
  )
}
