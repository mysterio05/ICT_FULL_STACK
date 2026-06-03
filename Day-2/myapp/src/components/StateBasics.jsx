import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
  
    var[name,setName]=useState("")
    var[a,setName1]=useState()

    const submit=()=>
    {
     setName1(name)
    }

  const inputhandler=(e)=>
    {
   console.log(e.target.value)
   setName(e.target.value)
  }
    return (
    <div><br/><br/><br/>
       <h1>Welcome {a}</h1>
       <TextField label="Enter your name "onChange={inputhandler}/>
       <br/>
       <br/>
       <Button variant='contained' onClick={submit}>click</Button>
       
    </div>
  )
}

export default StateBasics