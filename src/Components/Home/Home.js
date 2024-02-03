import React from 'react'
import './Home.css'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const Home = () => {

return (
  <Box className="main" >
    <Typography variant="h2">
      Welcome to Crud Application
    </Typography>
    <Typography variant="h6">
    A appication where you can add data ,update data ,delete data and view data
    </Typography>
  </Box>
  )
}

export default Home
