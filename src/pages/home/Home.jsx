import React from 'react'
import Categories from '../../components/categories/Categories'
import Hero from '../../components/hero/Hero'
import { Container ,Typography ,Box} from '@mui/material'
import Product from '../../components/product/Product'
import useThemeStore from '../../store/useThemeStore'
import OurFeatures from '../../components/ourFeatures/OurFeatures'
export default function Home() {
  const {mode, toggleMode} = useThemeStore();
  return (
    <>
    <Hero />
    <Box sx={{py:4}}>
    <Categories />
    <Box sx={{backgroundColor: mode === 'light' ? '#F4F2FC' : 'black', color: mode === 'light' ? '#000' : '#fff' , py:4}}>
    <Container>
    <Typography variant='h2' color='primary' sx={{fontSize:'35px' , pb:3}}>
            Featured Products
    </Typography>
    <Product/>
    </Container>
    </Box>
    <OurFeatures/>
    </Box>
    </>
  )
}
