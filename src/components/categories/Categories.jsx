import { Box, CircularProgress, Typography ,Container ,Grid  } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios'
import React from 'react'
import useCategories from '../../hooks/useCategories';
import useThemeStore from '../../store/useThemeStore';
import { useTranslation } from 'react-i18next';
export default function Categories() {
    const {isLoading,isError,data,error} = useCategories();
    const {mode, toggleMode} = useThemeStore();
    const { t } = useTranslation();
    if(isLoading)return <CircularProgress/>

    if(isError)return <Typography color='red'>{error}</Typography>
    const cat = data.response.data.map((Categories)=>
            Categories
        )
        console.log(cat);
  return (
    <Container sx={{py:4}}>
        <Typography variant='h2' color='primary' sx={{fontSize:'35px' , pb:3}}>{t('Explore Categories')}</Typography>
        <Grid container spacing={3}>
            <Grid size={8}
                sx={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), #FBF8FFCC), url(${'https://i.pinimg.com/1200x/eb/d8/4a/ebd84aee9bd1feddce359d9803236f4b.jpg'})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        borderRadius:3.5,
                        minHeight: '45vh',
                        boxShadow:4,
                        '&:hover':{
                            transform:'scale(1.05)',
                            transition:'transform 0.7s ease-in-out',
                        }
                    }}
            >
                <Typography variant='h3'  sx={{fontSize:'30px',mt:'40vh', px:2,color:(mode === 'dark' ? '#000' : '#000')}}>{t(cat[3].name)}</Typography>
            </Grid>
            <Grid size={4} sx={{display:'flex' , flexDirection: 'column' , gap:3}}>
                <Grid size={12}
                sx={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), #FBF8FFCC), url(${'https://i.pinimg.com/1200x/b9/32/e7/b932e766aab3028d8cb16b01a43145de.jpg'})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        borderRadius:3.5,
                        minHeight: '22.5vh',
                        boxShadow:4,
                        '&:hover':{
                            transform:'scale(1.1)',
                            transition:'transform 0.7s ease-in-out',
                        }
                    }}
            >
                <Typography variant='h3'  sx={{fontSize:'15px',mt:'17vh', px:2,color:(mode === 'dark' ? '#000' : '#000')}}>{t(cat[2].name)}</Typography>
            </Grid>
            <Grid size={12}
                sx={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), #FBF8FFCC), url(${'https://i.pinimg.com/1200x/6d/dd/64/6ddd64c3de47d48cc81a06236c50e2d6.jpg'})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        borderRadius:3.5,
                        minHeight: '22.5vh',
                        boxShadow:4,
                        '&:hover':{
                            transform:'scale(1.1)',
                            transition:'transform 0.7s ease-in-out',
                        }
                    }}
            >
                <Typography variant='h3'  sx={{fontSize:'15px',mt:'17vh', px:2,color:(mode === 'dark' ? '#000' : '#000')}}>{t(cat[1].name)}</Typography>
            </Grid>
            </Grid>
        </Grid>
    
    </Container>
    
  )
}
