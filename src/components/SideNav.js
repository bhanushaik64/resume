import { Typography } from '@mui/material'
import React from 'react'

const SideNav = () => {
  return (
    <div>
        <Typography sx={{marginTop:5}}><h1>Personal Details: </h1></Typography>
        <Typography>Address: </Typography>
        <Typography sx={{marginTop:5}}><h1>Social Media Links: </h1></Typography>
        <Typography sx={{marginTop:5}}><h1>Professional Skills: </h1></Typography>
        <Typography sx={{marginTop:5}}><h1>Languages: </h1></Typography>
        <Typography sx={{marginTop:5}}><h1>Hobbies: </h1></Typography>
    </div>
  )
}

export default SideNav