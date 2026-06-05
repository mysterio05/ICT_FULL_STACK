
import { AppBar, Button, Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'



const Navbar = () => {
  return (
    <div>
      {/* <AppBar>
        <Toolbar>
             <Link to="/add">
             <Button variant="contained" color="inherit">Welcome</Button>
             </Link>
        </Toolbar>
      </AppBar> */}

      <AppBar>
        <Toolbar>
          <h3>student app</h3>&nbsp;&nbsp;
          <Link to='/add'>
          <Button variant="contained" color="inherit">Add</Button>
          </Link>&nbsp;&nbsp;

          <Link to='/view'>
          <Button variant='contained' color='inherit'>View</Button>
          </Link>

        </Toolbar>
      </AppBar>
       
    </div>
  )
}

export default Navbar