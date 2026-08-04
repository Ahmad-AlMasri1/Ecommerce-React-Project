import React from 'react'
import { createTheme } from '@mui/material/styles';

const getTheme = (mode) => createTheme({
        body: {
            backgroundColor: mode === 'light' ? '#f5f5f5' : '#121212',
            
        },
        palette: {
            mode: mode,
            primary: {
                main: mode === 'light' ? '#1A1B22' :  '#dedede',
                
            },
        },
        typography: {
            fontFamily: 'Roboto, Arial, sans-serif',
            
        },
        
        
})

export default getTheme;