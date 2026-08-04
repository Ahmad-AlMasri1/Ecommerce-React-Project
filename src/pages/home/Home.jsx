import React from 'react'
import Categories from '../../components/categories/Categories'
import Hero from '../../components/hero/Hero'
import { Container ,Typography ,Box} from '@mui/material'
import Product from '../../components/product/Product'
export default function Home() {
  return (
    <>
    <Hero />
    <Container sx={{py:4}}>
    <Categories />
    <Container>
    <Typography variant='h2' color='primary' sx={{fontSize:'35px' , pb:3}}>
            Featured Products
    </Typography>
    <Product/>
    </Container>
    </Container>
    </>
  )
}
