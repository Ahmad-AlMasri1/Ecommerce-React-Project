import React from 'react'
import { Container, Typography , Box , Grid} from '@mui/material'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import { useTranslation } from 'react-i18next';
export default function OurFeatures() {
  const { t } = useTranslation();
  return (
    <Grid container sx={{py:8 , display:'flex' , flexDirection:{xs:'column',md:'row'} , alignItems:'center' , gap:{xs:5, md:0}}}>
      <Grid size={4} sx={{ display:'flex' , flexDirection : 'column' , gap:1 ,  alignItems:'center' ,
        '&:hover':{
          opacity:0.8
        }
      }}>
          <LocalShippingOutlinedIcon sx={{mb:3,borderRadius:3 , backgroundColor:'#3F51B5' , width:'50px' , height:'55px' , padding:'10px' }} color='primary'/>
          <Typography variant='h5' component='h2' sx={{fontWeight:500}} noWrap>{t('Free Shipping')}</Typography>
          <Typography sx={{fontSize:'14px' , fontWeight:400}} color='primary' noWrap>{t('On all orders over $100')}</Typography>
      </Grid>
       <Grid size={4} sx={{ display:'flex' , flexDirection : 'column' , gap:1 ,  alignItems:'center' ,borderLeft: {md:'1px solid #C5C5D4'} , borderRight: {md:'1px solid #C5C5D4'} ,
        '&:hover':{
          opacity:0.8
        }
       }}>
          <VerifiedUserOutlinedIcon sx={{mb:3,borderRadius:3 , backgroundColor:'#3F51B5' , width:'50px' , height:'55px' , padding:'10px' }} color='primary'/>
          <Typography variant='h5' component='h2' sx={{fontWeight:500}} noWrap>{t('Secure Payment')}</Typography>
          <Typography sx={{fontSize:'14px' , fontWeight:400}} color='primary' noWrap>{t('100% secure checkout')}</Typography>
      </Grid>
       <Grid size={4} sx={{ display:'flex' , flexDirection : 'column' , gap:1 ,  alignItems:'center' ,
        '&:hover':{
          opacity:0.8
        }
       }}>
        <SupportAgentOutlinedIcon sx={{mb:3,borderRadius:3 , backgroundColor:'#3F51B5' , width:'50px' , height:'55px' , padding:'10px' }} color='primary'/>
        <Typography variant='h5' component='h2' sx={{fontWeight:500}} noWrap>{t('24/7 Support')}</Typography>
        <Typography sx={{fontSize:'14px' , fontWeight:400}} color='primary' noWrap>{t('Dedicated customer service')}</Typography>
      </Grid>
        
    </Grid>
  )
}
