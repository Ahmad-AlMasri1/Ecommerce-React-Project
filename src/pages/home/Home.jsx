import React from 'react'
import Categories from '../../components/categories/Categories'
import Hero from '../../components/hero/Hero'
import { Container ,Typography ,Box , Button} from '@mui/material'
import Product from '../../components/product/Product'
import useThemeStore from '../../store/useThemeStore'
import OurFeatures from '../../components/ourFeatures/OurFeatures'
import { useTranslation } from 'react-i18next'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CompostOutlinedIcon from '@mui/icons-material/CompostOutlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
export default function Home() {
  const {mode, toggleMode} = useThemeStore();
  const {t} = useTranslation();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
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
   
   <Container sx={{py:4}}>
      <Box sx={{borderRadius:2 , backgroundSize:'cover',display:'flex', flexDirection:'column',gap:2,
        backgroundPosition:'center',
        backgroundImage: `linear-gradient(#D3D3D380, #D3D3D380), url(${'https://i.pinimg.com/736x/6e/8d/ee/6e8dee0382ef32de6093e3af8e83dcad.jpg'})`,
        backgroundRepeat: 'no-repeat',
        width:'100%',
        minHeight:'40vh',
        p:4
        }}>
          <Typography sx={{color:'#24389C' , fontSize:'14px' , fontWeight:700 ,}}>{t('EXCLUSIVE PARTNERSHIP')}</Typography>
          <Typography sx={{fontSize:'48px' , fontWeight:400}}>{t('The Winter Collection')}</Typography>
          <Typography  sx={{fontSize:'16px' , fontWeight:400}}>{t("Discover our exclusive collaboration featuring premium materials and timeless design perfect for the season.")}</Typography>
          <Button href='/products' variant='contained' sx={{backgroundColor:'#24389C',display:'flex' , px:'25px', py:'7px',width: 'fit-content' , borderRadius:3 , textTransform: 'none'}}>
          {t('Shop the Collection') } 
        </Button>
      </Box>
    </Container> 
    
    <Box sx={{backgroundColor: mode === 'light' ? '#F4F2FC' : 'black', color: mode === 'light' ? '#000' : '#fff' , py:4}}>
    <Container>
    <Typography variant='h2' color='primary' sx={{fontSize:'35px' , pb:3}}>
            Featured Products
    </Typography>
    <Product sortBy={'name'}  order={'true'}  min={''}  max={''} byCategory={'all'}/>
    </Container>
    </Box>

    <Box sx={{display:'flex' , justifyContent:'space-between',backgroundColor: mode === 'light' ? '#F4F2FC' : 'black', display:'flex' , px:'16px' , my:4 , p:4 , gap:2 , flexDirection:{xs:'column' , sm:'row' , alignItems:'center'}}}>
        <Box sx={{display:'flex' , flexDirection:'column' , gap:4}}>
          <Typography sx={{color:'#785900' , fontSize:'14px', fontWeight:700}}>{t('OUR MISSION')}</Typography>
          <Typography sx={{fontSize:{xs:'30px',sm:'35px',md:'48px'} , fontWeight:400}}>{t('Designed for a Sustainable Future')}</Typography>
          <Typography color='primary' sx={{fontSize:{xs:'14px' , sm:'16px' ,md:'18px'}, fontWeight:400 , whiteSpace: 'pre-line'}}>{t("We believe that premium quality shouldn't come at the cost of the environment.\nEvery product in our collection is crafted with eco-friendly materials and ethical manufacturing processes.\nensuring a lighter footprint on our planet.")}
          </Typography>
          <Box sx={{display:'flex' , flexDirection:'column' , gap:1 , py:2}}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap:1 }}><CompostOutlinedIcon sx={{backgroundColor:'#3F51B54D' , color:'#24389C' , p:'4px' , fontSize:'30px' , borderRadius:3}}/> <Typography sx={{fontSize:'16px' , fontWeight:400}}> {t('100% Recycled Packaging')}</Typography></Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap:1 }}><HandshakeOutlinedIcon sx={{backgroundColor:'#3F51B54D' , color:'#24389C' , p:'4px' , fontSize:'30px' , borderRadius:3}}/> <Typography sx={{fontSize:'16px' , fontWeight:400}}> {t('Ethically Sourced Materials')}</Typography></Box>
          </Box>
        </Box>

        <Box
        component="img" sx={{borderRadius:4 ,width: '100%',maxWidth: '400px'}} src='https://i.pinimg.com/736x/30/1e/7a/301e7a3a6d03206271740e9247b61f42.jpg'
      >

      </Box>
    </Box>

    <OurFeatures/>

    <Box sx={{display:'flex', flexDirection:'column' , gap:4 , alignItems:'center'}}>
      <Typography sx={{fontSize:{xs:'20px',sm:'34px'}}}>{t('Frequently Asked Questions')}</Typography>
      <Typography sx={{color:'primary' , fontSize:{xs:'10px',sm:'14px'}}}>{t('Everything you need to know about shopping with us.')}</Typography>
      <Container>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{ backgroundColor: mode === 'light' ? '#F4F2FC' : 'black', color: mode === 'light' ? '#000' : '#fff' , border:'1px solid #C5C5D4'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography component="span" sx={{ width: '33%', flexShrink: 0 ,fontSize:{xs:'10px',sm:'16px'}}}>
            {t('What is your return policy?')}
          </Typography>
          
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{fontSize:{xs:'10px',sm:'16px'}}}>
            {t("We offer a hassle-free 30-day return policy from the date of delivery.\nItems must be unused, in their original condition, and in the original packaging.\nTo initiate a return, simply contact our support team with your order number.\nOnce received and inspected, refunds are processed to your original payment method within 5-7 business days.")}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={{ backgroundColor: mode === 'light' ? '#F4F2FC' : 'black', color: mode === 'light' ? '#000' : '#fff' , border:'1px solid #C5C5D4'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography component="span" sx={{ width: '33%', flexShrink: 0 ,fontSize:{xs:'10px',sm:'16px'}}}>
            {t('How long does shipping take?')}
          </Typography>
          
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{fontSize:{xs:'10px',sm:'16px'}}}>
            {t("Orders are typically processed and dispatched within 1-2 business days.\nStandard shipping usually takes 3-5 business days for domestic orders.\nInternational shipping may take anywhere from 7-14 business days depending on the destination.\nYou will receive a confirmation email with tracking details as soon as your order ships.")}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} sx={{ backgroundColor: mode === 'light' ? '#F4F2FC' : 'black', color: mode === 'light' ? '#000' : '#fff' , border:'1px solid #C5C5D4'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography component="span" sx={{ width: '33%', flexShrink: 0 ,fontSize:{xs:'10px',sm:'16px'}}}>
            {t('Do you ship internationally?')}
          </Typography>
          
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{fontSize:{xs:'10px',sm:'16px'}}}>
            {t("Yes, we proudly offer international shipping to most countries worldwide.\nShipping rates and delivery times vary depending on the destination and shipping method.\nAny applicable customs duties, taxes, or import fees are the responsibility of the customer.\nYou can view the exact shipping costs at checkout before completing your purchase.")}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} sx={{ backgroundColor: mode === 'light' ? '#F4F2FC' : 'black', color: mode === 'light' ? '#000' : '#fff' , border:'1px solid #C5C5D4'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography component="span" sx={{ width: '33%', flexShrink: 0 ,fontSize:{xs:'10px',sm:'16px'}}}>
            {t('How can I track my order?')}
          </Typography>
          
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{fontSize:{xs:'10px',sm:'16px'}}}>
            {t("Once your order has shipped, you will receive an email with a tracking number.\nYou can click the provided link to monitor your package's delivery status in real-time.\nAlternatively, log in to your account and view tracking details under 'Order History'.\nIf you don't receive tracking information within 3 business days, please contact support.")}
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      </Container>
    </Box>
    </Box>
    </>
  )
}
