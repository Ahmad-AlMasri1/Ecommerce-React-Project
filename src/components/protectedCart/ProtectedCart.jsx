import React from 'react'
import useCartisEmpty from '../../hooks/useCartIsEmpty'
import { Navigate } from 'react-router-dom';
export default function ProtectedCart({children}) {
    const cartIsEmpty = useCartisEmpty();
    if(cartIsEmpty){
        return <Navigate to="/" replace />
    }
  return (
    children
  )
}
