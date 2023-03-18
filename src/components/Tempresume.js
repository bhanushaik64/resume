import React from 'react'
import SideNav from './SideNav'
import Main from './Main'
import { Grid } from '@mui/material'

const Tempresume = () => {
  return (
    <div>
      <hr></hr>
        <Grid container spacing={2}>
  
  <Grid item xs={4}>
    <SideNav/>
  </Grid>
  <Grid item xs={8}>
    <Main/>
  </Grid>
</Grid>
    </div>
  )
}

export default Tempresume