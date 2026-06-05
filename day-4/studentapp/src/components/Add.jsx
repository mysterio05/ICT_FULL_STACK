import { Button, TextField } from '@mui/material'
import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
const Add = () => {
  let navigate=useNavigate()

  const [form,setForm]=useState({
    name:'',
    age:0,
    dept:'',
    mark:0

  })
  let valueUpdate=(e)=>{
     setForm({...form,[e.target.name]:e.target.value})
  }
  let submitInfo=()=>{
  axios.post('http://localhost:3000/newstudent',form)
  .then((res)=>{

    navigate('/view')
  })
  .catch((err)=>{
       console.log(err)
  })
  }
  return (
    
    <div>
      <br/>
      <br/>
      <br/>
      <h1>Sign up</h1>
      <TextField id="outlined-basic" label="Name" variant="outlined" name='name' value={form.name} onChange={valueUpdate}/>
      <br />
      <br />
      <TextField id="outlined-basic" label="Age" variant="outlined" name='age' value={form.age} onChange={valueUpdate}/>
      <br />
      <br />
      <TextField id="outlined-basic" label="Department" variant="outlined" name='dept'value={form.dept} onChange={valueUpdate}/>
      <br />
      <br />
      <TextField id="outlined-basic" label="Mark" variant="outlined" name='mark' value={form.mark} onChange={valueUpdate}/> <br /><br/>
      <Button variant='contained' color='success' onClick={submitInfo}>Submit</Button>
      
      

    </div>
  )
}

export default Add