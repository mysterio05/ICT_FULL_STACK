import { Button, TextField } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div>
    <h3>Login</h3>
    <TextField id="outlined-basic" label="Email" variant="outlined" /><br/><br/>
     <TextField id="outlined-basic" label="Password" variant="outlined" />
          <br />
          <br />
    <Button variant="outlined">Submit</Button>
    </div>
  )
}

export default Login
