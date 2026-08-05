import React, { use, useState } from 'react'
import { useParams } from 'react-router-dom';
import useProductDetails from '../../hooks/useProductDetails';
import {TextField, Box, Typography , Button, Container, Grid, responsiveFontSizes , Rating , IconButton, InputLabel} from '@mui/material';
import useAddToCart from '../../hooks/useAddToCart';
import StarIcon from '@mui/icons-material/Star';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import useThemeStore from '../../store/useThemeStore';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import useAuthStore from '../../store/useAuthStore';
import { ReviewSchema } from '../../validations/ReviewSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm , Controller} from 'react-hook-form';
import axiosInstance from '../../api/axiosInstance';
import authAxiosInstance from '../../api/authAxiosInstance';
export default function ProductDetails() {
  const setToken = useAuthStore((state) => state.setToken);
  const [cnt,setCnt]=useState(1);
    const {mutate : addToCart} = useAddToCart();
    const {id} = useParams();
    const {data,isLoading,isError,error} = useProductDetails(id);
    const[serverErrors,setServerErrors] = useState([]);
     const {mode, toggleMode} = useThemeStore();
      const[Comment,setComment]=useState("");
      const {register, control , handleSubmit , formState:{errors,isSubmitting} } = useForm(
                  {
                    resolver:yupResolver(ReviewSchema),
                    defaultValues:{
                      Rating:0,
                      Comment:''
                    }
                  },
                  
                );
      const ReviewForm = async(Data)=>{
            try{
              const response = await authAxiosInstance.post(`/Products/${id}/reviews`,Data);
              console.log(response);
              setToken(response.data.accessToken);
            }catch(err){
              setServerErrors(err.response.data.message);
            }
          }
    const handleUpdate = (productId, action) => {
    if (action === '+') {
     setCnt(cnt + 1);
    } else if (action === '-') {
      const currentCount = cnt;
      if (currentCount > 1) {
        setCnt(cnt - 1);
      } 
    }
  };
    
    if(isLoading){
        return <div>Loading...</div>
    }
    if(isError){
        return <div>Error: {error.message}</div>
    }
  return (
    <Container maxWidth="xl" sx={{py:4}}>
      <Box container sx={{display:'flex' , justifyContent:'space-between' , alignItems:'center' , gap:4 , flexDirection:{xs:'column',lg:'row'},mb:4}}>       
        <Box
          sx={{
            backgroundSize:'cover',
            backgroundPosition:'center',
            backgroundColor: '#D3D3D3',
            backgroundImage: `url(${data.response.image})`,
            backgroundRepeat: 'no-repeat',
            minHeight:{xs:'50vh',lg:'80vh'},
            minWidth:{xs:'40vh',lg:'65vh'},
            boxShadow:4,
            borderRadius:2
          }}
        >
        </Box>
        <Box sx={{display:'flex' , flexDirection:'column', gap:2}}>
          <Typography component='h1' variant='h2' sx={{fontWeight:400}} >{data.response.name}</Typography>
          <Box sx={{display:'flex', gap:1}}>
            <Rating
            name="text-feedback"
            value={data.response.rate}
            readOnly
            precision={0.5}
            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
          />
            <Typography color='primary'> ({data.response.reviews.length} Reviews) </Typography>
          </Box>
          <Typography  sx={{color:(mode === 'dark' ? '#24389C' : '#24389C') , fontSize:'24px', fontWeight:500 }}>${data.response.price}</Typography>
          <Typography sx={{fontSize:{xs:'10px',md:'15px',lg:'20px'}}}>{data.response.description}</Typography>
          <Box sx={{ display:'flex' , gap:3}}>
            <Box sx={{gap:2, display: 'flex', alignItems: 'center' , borderBlock:'1px solid #1A1B22' , borderLeft:'1px solid #1A1B22' ,borderRight:'1px solid #1A1B22' , borderRadius:1}}>
                  <IconButton>
                    <RemoveIcon onClick={() => handleUpdate( cnt,'-' )} />
                  </IconButton>
                  {cnt}
                  <IconButton>
                    <AddIcon onClick={() => handleUpdate( cnt,'+' )} />
                  </IconButton>
            </Box>        
          <IconButton sx={{display:'flex' ,alignItems:'center' ,justifyContent:'center', gap:1 , py:2 , backgroundColor:'#FDC003', color:'#6C5000', borderRadius:0.5 ,width:{xs:'40%' ,sm:'50%'},fontSize:{xs:'15px',md:'25px'}}} onClick={() => {addToCart({ productId: data.response.id , count: cnt })}}><ShoppingBagOutlinedIcon/> Add to Cart</IconButton>
          </Box>
        </Box>
      </Box>
      
      <Box sx={{py:4 , display:'flex' , flexDirection:'column' , gap:2}}>
        <Typography variant='h4'>Add Review</Typography>
          <Box onSubmit={handleSubmit(ReviewForm)} component="form" sx={{display:'flex' , flexDirection:'column' , gap:2 , borderRadius:3 , boxShadow:3 , p:4}}>
            <Typography>Your Rating</Typography>
              <Controller
                name="Rating"
                control={control}
                render={({field})=>(
                   <Rating
                   precision={1}
                   value={Number(field.value)}
                onChange={(event, newValue) => {
                  field.onChange(newValue);
                }}
              />  )} />
                
              <TextField
              {...register("Comment")}
          label="Share your experience..."
          multiline
          rows={4}
          value={Comment}
          onChange={(e) => setComment(e.target.value)}
          fullWidth
          variant="outlined"
        />
       <Typography color='error' variant='h5'>{serverErrors}</Typography> 
        <Button variant="contained" type="submit" disabled={isSubmitting} sx={{borderRadius:1 , backgroundColor:'#24389C'}}>
                    Submit Review
        </Button>
          </Box>
          
      </Box>
      <Box>
        <Typography variant='h4'>Customer Reviews</Typography>
        <Box sx={{display:'flex', gap:1 , mb:3}}>
            <Rating
            name="text-feedback"
            value={data.response.rate}
            readOnly
            precision={0.5}
            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
          />
            <Typography color='primary'> ({data.response.reviews.length} Reviews) </Typography>
          </Box>
      <Grid container spacing={3}>
         {data.response.reviews.map((review)=>
          <Grid size={{xs:6,md:4}}>
            <Card sx={{  }}>
              <CardContent>
                <Typography gutterBottom>
                  <Rating
                    name="text-feedback"
                    value={review.rating}
                    readOnly
                    precision={0.5}
                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                  />
                </Typography>
                <Typography color='primary'>
                  {review.comment}
                </Typography>
                <Typography sx={{ mb: 1.5 , mt:3}}>{review.userName}</Typography>
                
              </CardContent>
            </Card>
           
          </Grid>

         )     
         } 
      </Grid>
    </Box>
    </Container>
  )
}
