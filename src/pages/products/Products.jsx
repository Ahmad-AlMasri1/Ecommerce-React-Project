import React, { useState } from 'react'
import Product from '../../components/product/Product'
import { Box, Container, Typography , MenuItem , Select , InputLabel , FormControl, TextField, Button, Grid } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { useQuery } from '@tanstack/react-query'
import axiosInstance from '../../api/axiosInstance'
import i18n from '../../i18next'
import useProduct from '../../hooks/useProduct'
import useThemeStore from '../../store/useThemeStore'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
export default function Products() {
  const {t} = useTranslation();
  const [sortBy,setSortBy]= useState('name');
  const [order,setOrder]= useState('true');
  const [min,setMin]= useState('');
  const [max,setMax]= useState('');
  const [byCategory,setByCategory]= useState('all');
  const {data , refetch} = useProduct({sortBy , order , min , max , byCategory})
   const {mode, toggleMode} = useThemeStore();   
  return (
    <Container  sx={{display:'flex' , gap:10 , py:5 , alignItems:'start' , minHeight:'90vh', flexDirection:{xs:'column', md:'row' } , alignItems:{xs:'center', md:'start' }}}>
    
    <Grid container spacing={4}>
    <Grid size={{xs:12,md:6,lg:5}} sx={{display:'flex' , flexDirection:'column' , gap:2 , backgroundColor: mode === 'light' ? '#FBF8FF' : 'black' , borderRadius:2 , px:5,}}>
      <Typography variant='h5' component='h1' sx={{my:4}}>{t('Filters')}</Typography>

        <Box sx={{display:'flex' , justifyContent:'space-between' , gap:2}}>
          <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">{t('Sort By')}</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={sortBy}
                label="Type"
                onChange={(e)=>{
                  setSortBy(e.target.value); 
                }}
              >
                <MenuItem value={'name'}>{t('Name')}</MenuItem>
                <MenuItem value={'rate'}>{t('Rate')}</MenuItem>
                <MenuItem value={'price'}>{t('Price')}</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">{t('Order')}</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={order}
                label="Type"
                onChange={(e)=>{
                  setOrder(e.target.value);
                }}
              >
                <MenuItem value={'true'}>{t('Ascending')}</MenuItem>
                <MenuItem value={'false'}>{t('Descending')}</MenuItem>
              </Select>
            </FormControl>
      </Box> 
      <Box sx={{display:'flex' , justifyContent:'space-between' , gap:2 , flexDirection:'column'}}>
                <Typography sx={{fontSize:'16px',fontWeight:400}}>{t('Price Range')}</Typography>
                <Box sx={{display:'flex' , justifyContent:'space-between' , gap:2 , alignItems:'center' }}>
                <TextField fullWidth  label={t("Min Price")} variant='outlined'
                
                type='number'
                slotProps={{
                  htmlInput:{
                    min:0,
                    max:max,
                    step:1,
                  }
                }}
                value={min}
                  onChange={(e)=>{
                  setMin(e.target.value);
                }}
                />
                <Typography sx={{fontSize:'16px',fontWeight:400}}>-</Typography>
                <TextField fullWidth  label={t("Max Price")} variant='outlined'
                value={max}
                  onChange={(e)=>{
                  setMax(e.target.value);
                }}
                type='number'
                slotProps={{
                  htmlInput:{
                    min:min === '' ? 0 : min,
                    step:1,
                  }
                }}
                />
             </Box>
          </Box>
          <Box>
            <FormControl>
              <FormLabel sx={{fontSize:'20px', fontWeight:600 , color:mode === 'dark' ? 'white':'black'}}>{t('Categories')}</FormLabel>
              <RadioGroup
                name="controlled-radio-buttons-group"
                value={byCategory}
                onChange={(e) => setByCategory(e.target.value) }
              >
                <FormControlLabel value={'all'} control={<Radio />} label={t("All")} />
                <FormControlLabel value={'3'} control={<Radio />} label={t('cat9')} />
                <FormControlLabel value={'5'} control={<Radio />} label={t('Mobiles')} />
                <FormControlLabel value={'6'} control={<Radio />} label={t('Clothes')} />
                <FormControlLabel value={'7'} control={<Radio />} label={t('Electronics')} />
              </RadioGroup>
            </FormControl>

          </Box>
          <Button onClick={refetch} variant='outlined' sx={{textTransform:'none' , my:4 ,py:1.5 , px:10 , fontSize:'16px', color:'#24389C', border:'1px solid #24389C'}}>{t('Apply Filters')}</Button>
    </Grid>
    <Grid size={{xs:12,md:6,lg:7}}>
      <Typography sx={{fontSize:{xs:'40px', md:'50px'}}} noWrap>{t('Showing Products')}</Typography>
      <Product sortBy={sortBy}  order={order}  min={min}  max={max} byCategory={byCategory}/>
    </Grid>
    </Grid>
    </Container>
  )
}
