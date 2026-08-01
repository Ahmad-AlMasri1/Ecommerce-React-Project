import React from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import { QueryClient , QueryClientProvider} from '@tanstack/react-query'
import './i18next.jsx'
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

export default function App() {
  const {i18n} = useTranslation();

  useEffect(() => {
    const direction = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = direction;
  }, [i18n.language]);
  const queryClient = new QueryClient()
  return (
    <>
        <QueryClientProvider client={queryClient}>
          < RouterProvider router={router} />
        </QueryClientProvider>
    </>
  )
}
