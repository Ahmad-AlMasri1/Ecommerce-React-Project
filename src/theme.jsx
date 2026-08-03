import React from 'react'
import { createTheme } from '@mui/material/styles';

const getTheme = (mode) => createTheme({
        palette: {
            mode: mode,
            primary: {
                main: '#db5a04',
            }
        },
        typography: {
            fontFamily: 'Cairo, sans-serif',
        },
})

export default getTheme;