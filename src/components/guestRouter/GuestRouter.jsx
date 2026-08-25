import React from 'react'
import { Navigate } from 'react-router-dom'
import useAuthStore from '../../store/useAuthStore'
export default function GuestRouter({children}) {
    const token = useAuthStore((state) => state.token);
  if(!token){
    return (
    children
  )
  }return <Navigate to="/" replace />
    
}
