import React from 'react'
import { useState } from 'react';
import { Button, Container,IconButton } from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { TextField } from '@mui/material';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

const Form = () => {
  const [resumeform, setResumeform] = useState({
    name:"",
    email:"",
    phno:"",
    address:"",
    careerobj:""
  });
  const [records, setRecords] = useState([]);

  const inputhandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);

    setResumeform({...resumeform, [name]: value});


  }
  


const SubmitEvent = (e) => {
  e.preventDefault();
  const newRecord = {...resumeform, id: new Date().getTime().toString()}
  console.log(records);

  setRecords([...records, newRecord]);
  console.log(records);

 
}
  return (
    <div>
      <form action='' onSubmit={SubmitEvent}>
       <Container sx={{marginLeft:'30%'}}>
       <Box sx={{ width: '50%'}}>
       <Stack spacing={2}>
       <h1>Upload Image</h1>
       <Button variant="contained" component="label">
  Upload
  <input hidden accept="image/*" multiple type="file" />
</Button>
<IconButton color="primary" aria-label="upload picture" component="label">
  <input hidden accept="image/*" type="file" />
  <PhotoCamera />
</IconButton>
      <h1>Personal Information</h1>
      <TextField type='text' placeholder='Name' autoComplete="off" value={resumeform.name} onChange={inputhandler} />
      <TextField type='text' placeholder='E-mail Address' autoComplete="off" value={resumeform.email} onChange={inputhandler} />
      <TextField type='text' placeholder='Phone Number' autoComplete="off" value={resumeform.phno} onChange={inputhandler}/>
      <TextField type='text' placeholder='Address' autoComplete="off" value={resumeform.address} onChange={inputhandler}/>
      <TextField type='text' placeholder='Career Objective' autoComplete="off" value={resumeform.careerobj} onChange={inputhandler}/>
      

      <h1>Social Media Links</h1>
      <TextField type='text' placeholder='Linked In'/>
      <TextField type='text' placeholder='Github'/>

      <h1>Professional Skills</h1>
      <TextField type='text' />
      <TextField type='text' />
      <TextField type='text'/>
      <TextField type='text' />
      <TextField type='text'/>

      <h1>Languages</h1>
      <TextField type='text'/>
      <TextField type='text'/>
      <TextField type='text'/>

      <h1>Hobbies</h1>
      <TextField type='text'/>
      <TextField type='text'/>

      <h1>Education</h1>
      <TextField type='text' placeholder='College-Specialization-YOP'/>
      <input type='date'/> To <input type='date'/>
      <TextField type='text' placeholder='College-Specialization-YOP'/>
      <input type='date'/> To <input type='date'/>
      <TextField type='text' placeholder='School-Specialisation-YOP'/>
      <input type='date'/> To <input type='date'/>

      <h1>Work Experience</h1>
      <TextField type='text' placeholder='Company Name'/>
      <TextField type='text' placeholder='Position Name'/>
      <input type='date'/> To <input type='date'/>
      <TextField type='text' placeholder='Description'/>
      <h2>Submit The Form Here <Button variant="contained" >SUBMIT</Button></h2>
      </Stack>
      </Box>
      </Container>
      </form>
      
    </div>
  )
}

export default Form