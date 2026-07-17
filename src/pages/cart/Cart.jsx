import axios from 'axios'
import React, { useEffect } from 'react'
import { get } from 'react-hook-form';
import authAxiosInstance from '../../api/authAxiosInstance';
import useAuthStore from '../../store/useAuthStore';
export default function Cart() {
 
  const token = useAuthStore((state)=>state.token);
  const getItems = async ()=>{
    const response = await authAxiosInstance.get(`${import.meta.env.VITE_BURL}/Carts`);

  }
  useEffect(()=>{
    getItems();
  },[])

  return (
    <div>Cart</div>
  )
}
