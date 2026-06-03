import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Welcome = () => {
    var[a,setvalue]=useState()

    const react=()=>
        {
            setvalue("React")
        } 
     const java=()=>
        {
            setvalue("Java")
        } 
     const python=()=>
        {
            setvalue("python")
        } 
        useEffect(()=>{
            java()
        },[])

  return (
    <div>
         <br/>
        <br/>
        <br/>
        <h1>Welcome {a}</h1>
        <br/>
        <br/>
        <Button variant='contained' color='success' onClick={react}>React</Button>&nbsp;&nbsp;
        <Button variant='contained' color='warning' onClick={java}>Java</Button>&nbsp;&nbsp;
        <Button variant='contained' color='error' onClick={python}>Python</Button>&nbsp;&nbsp;
    </div>
  )
}

export default Welcome