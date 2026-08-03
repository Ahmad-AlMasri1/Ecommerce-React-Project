import React from 'react'
import { createTheme } from '@mui/material/styles';

const getTheme = (mode) => createTheme({
        palette: {
            mode: mode,
            
        },
        typography: {
            fontFamily: 'Cairo, sans-serif',
        },
})

export default getTheme;