import React from 'react'
import useProduct from '../../hooks/useProduct'
import { IconButton,Box, Card, CardMedia, Typography , CardContent , Grid, CircularProgress ,Button, CardActionArea} from '@mui/material'
import { useNavigate , Link } from 'react-router-dom';
import useThemeStore from '../../store/useThemeStore';
import { useTranslation } from 'react-i18next';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import useAddToCart from '../../hooks/useAddToCart';
import useAuthStore from '../../store/useAuthStore.jsx';
import i18n from '../../i18next.jsx';
export default function Product({sortBy , order , min , max}) {
    const navigate = useNavigate();
    const token = useAuthStore((state) => state.token);
     const {mode, toggleMode} = useThemeStore();
    const { t } = useTranslation();
    const {data, isLoading, isError,error} = useProduct({sortBy , order , min , max});
    const {mutate : addToCart} = useAddToCart();
    const lan=i18n.language;
    if(isError){
        return <h1>{error.message}</h1>
    }
   
    if(isLoading){
        return <CircularProgress/>
    }
  return (
    <Box  component="section">
        <Grid container spacing={{xs:2,md:3}} sx={{textAlign:'center' , marginTop:2 , alignItems:'center' , justifyContent:'center'}}>
        {data?.response?.data?.map((product)=>(
            <Grid size={{xs:6,sm:6,md:4}}>
            <Card sx={{position:'relative',borderRadius:1.5 ,}}>
                <CardActionArea  variant="Button" href={`/product/${product.id}`}>
                <CardMedia
                
                component="img"
                image={product.image}
                sx={{ display:'flex',justifyContent:'center' , margin:'0 auto',alignItems:'center',
                    '&:hover':{
                            transform:'scale(1.05)',
                            transition:'transform 0.6s ease-in-out',
                            
                        }
                }}
                >
                </CardMedia>
                <CardContent sx={{display:"flex", flexDirection:"column" , alignItems:"start" ,backgroundColor: mode === 'light' ? '#F4F2FC' : 'black', color: mode === 'light' ? '#000' : '#fff',}}>
                    <Typography component="h2" sx={{fontSize:{xs:"13px",sm:"16px"},mb:4}} color='primary' noWrap >
                        {product.name}
                    </Typography>
                    <Typography component="h2"  sx={{color:(mode === 'dark' ? '#24389C' : '#24389C')}}>
                        ${product.price}
                    </Typography>
                    
                </CardContent>
                 </CardActionArea>
                 <IconButton onClick={() => {token ? addToCart({ productId: product.id , count: 1 }) : navigate('/login')}}  sx={{position:'absolute', bottom:13, borderRadius:3, background:'#FDC003', color:'#6C5000',right: lan === 'en' ? 10 : '', left : lan === 'ar' ? 10 : ''}}><AddShoppingCartIcon/></IconButton>      
                
            </Card>
            </Grid>
        ))}
        </Grid>

    </Box>
  )
}
