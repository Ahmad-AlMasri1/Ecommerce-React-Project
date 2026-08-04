import React from 'react'
import Categories from '../../components/categories/Categories'
import Hero from '../../components/hero/Hero'
import { Container } from '@mui/material'
export default function Home() {
  return (
    <>
    <Hero />
    <Container>
    <Categories />
    </Container>
    </>
  )
}
