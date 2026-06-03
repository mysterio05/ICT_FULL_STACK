import { Button } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
  
  var[a,setvalue]=useState(0)
 
  const add=()=>
  {
   setvalue(a+1)
  }
  const sub=()=>
  {

   setvalue(a-1)
  }
  
    return (
    <div>
        <br/>
        <br/>
        <br/>
        <h1>Counter:{a}</h1>
        <br/>
        <br/>
        <Button  variant='contained' color='success' onClick={add}>ADD</Button>&nbsp;&nbsp;
        <Button  variant='contained'color='error' onClick={sub}>SUB</Button>
    </div>
  )
}

export default Counter