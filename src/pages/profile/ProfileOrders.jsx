import React from 'react'
import { Box, Button, Container, Typography } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import usePersonalInfo from '../../hooks/usePersonalInfo'
import { useTranslation } from 'react-i18next'
import useAuthStore from '../../store/useAuthStore'
import PersonIcon from '@mui/icons-material/Person';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
export default function ProfileOrders() {
  const{data, isLoading, isError, error}  =  usePersonalInfo();
    const {t} = useTranslation();
    const Status = data?.order?.status;
  return (
    <>
        <Typography sx={{fontSize:'34px', fontWeight:400 , pb:2}}>{t('Order History')}</Typography>
          <TableContainer sx={{boxShadow:4, display:'flex' , flexDirection:'column', justifyContent:'space-around', px:4 , alignItems:'start' , padding:'auto auto' , minWidth:'40vh', minHeight:'45vh' , borderRadius:2 , pb:3 ,mb:4}}>
            <Table sx={{ minWidth:{lg:625} }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell><Typography sx={{fontSize:{xs:"10px",sm:"12.5px",md:"15px"}}}>{t('Id')}</Typography></TableCell>
                  <TableCell align="center"><Typography sx={{fontSize:{xs:"10px",sm:"12.5px",md:"15px"}}}>{t('Amount Paid')}</Typography></TableCell>
                  <TableCell align="center"><Typography sx={{fontSize:{xs:"10px",sm:"12.5px",md:"15px"}}}>{t('Status')}</Typography></TableCell>
                  <TableCell align="center"><Typography sx={{fontSize:{xs:"10px",sm:"12.5px",md:"15px"}}}>{t('Order Date')}</Typography></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.orders?.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
                  >

                    <TableCell component="th" scope="row" ><Typography sx={{fontSize:"10px"}}>{row?.id}</Typography>
                      
                    </TableCell>
                    <TableCell align="center" ><Typography sx={{fontSize:{xs:"10px",sm:"12.5px",md:"15px"}}}>{row?.amountPaid}</Typography></TableCell>
                    <TableCell align="center" ><Typography sx={{fontSize:{xs:"10px",sm:"12.5px",md:"15px"}}}>{row?.status}</Typography></TableCell>
                    <TableCell align="center" ><Typography sx={{fontSize:{xs:"7px",sm:"12.5px",md:"15px"}}}>{row?.orderDate}</Typography></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        
        </>
  )
}
