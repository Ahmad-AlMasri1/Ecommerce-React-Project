import React from 'react'
import Categories from '../../components/categories/Categories'
import Hero from '../../components/hero/Hero'
import { Container ,Typography ,Box} from '@mui/material'
import Product from '../../components/product/Product'
import useThemeStore from '../../store/useThemeStore'
import OurFeatures from '../../components/ourFeatures/OurFeatures'
import { useTranslation } from 'react-i18next'
export default function Home() {
  const {mode, toggleMode} = useThemeStore();
  const {t} = useTranslation();
  return (
    <>
    <Hero />
    <Box sx={{py:4}}>
    <Categories />
    <Box sx={{backgroundColor:'#24389C' , my:'40px', py:'32px' , display:'flex' ,justifyContent:'space-between' , px:{xs:'40px',lg:'180px'} , flexDirection:{xs:'column' ,md:'row'} , alignItems:'center' , gap:4}}>
      <Box sx={{display:'flex', flexDirection:'column' , gap:'12px' }}>
        <Typography sx={{color:'#6C5000',backgroundColor:'#FDC003',borderRadius:4 , px:'12px' , py:'4px',fontWeight:600,width: 'fit-content'}}>{t('LIMITED TIME')}</Typography>
        <Typography sx={{color:'#FFF' , fontSize:{xs:'40px',sm:'48px'} , fontWeight:400}}>{t('Save up to 50%')}</Typography>
        <Typography sx={{color:'#BAC3FF',fontSize:{xs:'12px',sm:'16px'} ,}}>{t('On selected premium essentials. Don\'t miss out on these exclusive deals.')}</Typography>
      </Box>
      <Box sx={{display:'flex' , justifyContent:'space-between' , gap:4 }}>
        <Box sx={{borderRadius:1 , border:'1px solid rgba(251, 248, 255, 0.30)' ,backgroundColor:'rgba(251, 248, 255, 0.20)' , backdropFilter:'blur(6px)',p:'16px',height: 'fit-content'}}>
          <Typography sx={{color:'#FFDF9E' , fontSize:{xs:'12px',sm:'16px'} , fontWeight:700}}>{t('20% OFF')}</Typography>
          <Typography sx={{color:'#FFF' , fontSize:{xs:'12px',sm:'16px'} , fontWeight:500}}>{t('Winter Essentials')}</Typography>
          <Typography sx={{color:'#BAC3FF' , fontSize:{xs:'8px',sm:'12px'} , fontWeight:400}}>{t('Valid until Dec 31st')}</Typography>
        </Box>
        <Box sx={{borderRadius:1 , border:'1px solid rgba(251, 248, 255, 0.30)' ,backgroundColor:'rgba(251, 248, 255, 0.20)' , backdropFilter:'blur(6px)',p:'16px',height: 'fit-content'}}>
          <Typography sx={{color:'#FFDF9E' , fontSize:{xs:'10px',sm:'14px'} , fontWeight:700}}>{t('BUY 1 GET 1')}</Typography>
          <Typography sx={{color:'#FFF' , fontSize:{xs:'12px',sm:'16px'} , fontWeight:500}}>{t('All Accessories')}</Typography>
          <Typography sx={{color:'#BAC3FF' , fontSize:{xs:'8px',sm:'12px'} , fontWeight:400}}>{t('Valid until Jan 15th')}</Typography>
        </Box>
      </Box>
    </Box> 
    <Box sx={{backgroundColor: mode === 'light' ? '#F4F2FC' : 'black', color: mode === 'light' ? '#000' : '#fff' , py:4}}>
    <Container>
    <Typography variant='h2' color='primary' sx={{fontSize:'35px' , pb:3}}>
            Featured Products
    </Typography>
    <Product sortBy={'name'}  order={'true'}  min={''}  max={''}/>
    </Container>
    </Box>
    <OurFeatures/>
    </Box>
    </>
  )
}
