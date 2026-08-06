import React from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import { QueryClient , QueryClientProvider} from '@tanstack/react-query'
import './i18next.jsx'
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { ThemeProvider } from '@emotion/react'
import theme from './theme.jsx'
import { CssBaseline } from '@mui/material'
import useThemeStore from './store/useThemeStore'
import getTheme from './theme.jsx'
export default function App() {
  const {i18n} = useTranslation();
  
  useEffect(() => {
    const direction = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = direction;
  }, [i18n.language]);
  const queryClient = new QueryClient();
  const mode = useThemeStore((state) => state.mode);
  return (
    <>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={getTheme(mode)}>
            <CssBaseline />
            < RouterProvider router={router} />
          </ThemeProvider>
        </QueryClientProvider>
    </>
  )
}
