import React from 'react'
import { useState } from 'react'
import { AppBar, Button, Stack, Toolbar, Typography } from '@mui/material'

const Templatehead = () => {
  const Form = () => {
    const [formData, setFormData] = useState({
      email: "",
      name: ""
    })
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Stack direction='row' spacing={45} justifyContent='space-between'>
                    <form>
                    <label htmlFor="title">Title</label>
<input onChange​={(e) => setFormData({...formData, title: e.target.value})} value={formData.title} type="text" name="title" id="title" />
<label htmlFor="body">Body</label>
<textarea onChange​={(e) => setFormData({...formData, body: e.target.value})}  value={formData.body} name="body" id="body"></textarea>
                   <Typography variant='h5' component='h6'>  </Typography>
                   <Typography> Phone Number: 9390976928  </Typography>   
                   </form>     
                  </Stack>
           </Toolbar>
        </AppBar>
        <hr/><hr/>
        <Button type='submit' onClick={Changing}/>
    </div>
  )
}

export default Templatehead;