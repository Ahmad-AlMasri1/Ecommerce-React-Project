import React from 'react'
import useProducts from '../../hooks/useProducts'
import { Box, Card, CardMedia, Typography , CardContent , Grid} from '@mui/material'
export default function Product() {
    const {data, isLoading, isError,error} = useProducts();
    
    if(isLoading){
        return <h1>Loading...</h1>
    }
    if(isError){
        return <h1>{error.message}</h1>
    }
   
  return (
    <Box  component="section">
        <Typography component="h1" variant="h3">
            Products
        </Typography>
        <Grid container spacing={{xs:2,md:3}} sx={{textAlign:'center' , marginTop:2 , alignItems:'center' , justifyContent:'center'}}>
        {data.response.data.map((product)=>(
            <Grid item size={{xs:12,sm:6,md:4}}>
            <Card >
                <CardMedia
                component="img"
                image={product.image}
                sx={{width:200 , justifyContent:'center' , margin:'0 auto'}}
                >
                </CardMedia>
                <CardContent>
                    <Typography component="h2" variant="h5">
                        {product.name}
                    </Typography>
                    <Typography component="h2" variant="h5">
                        {product.price}
                    </Typography>
                 </CardContent>       
                
            </Card>
            </Grid>
        ))}
        </Grid>

    </Box>
  )
}
