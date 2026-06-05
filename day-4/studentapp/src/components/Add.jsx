import { Button, TextField } from '@mui/material'
import React from 'react'

const Add = () => {
  return (
    
    <div>
      <br/>
      <br/>
      <br/>
      <h1>Sign up</h1>
      <TextField id="outlined-basic" label="Name" variant="outlined" />
      <br />
      <br />
      <TextField id="outlined-basic" label="Age" variant="outlined" />
      <br />
      <br />
      <TextField id="outlined-basic" label="Department" variant="outlined" />
      <br />
      <br />
      <TextField id="outlined-basic" label="Mark" variant="outlined" /><br /><br />
      <Button variant='contained' color='success'>Submit</Button>
      
      

    </div>
  )
}

export default Add