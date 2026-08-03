import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
export default function ProfileLayout() {
  return (
    <Box>
      <Typography variant="h4">Profile</Typography>
      <Button component={Link} to="">
        Info
      </Button>
      <Button component={Link}   to="orders">
        Orders
      </Button>
      <Box>
        <Outlet />
      </Box>
    </Box>
  )
}
