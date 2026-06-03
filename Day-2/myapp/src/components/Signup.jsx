import { Button, FormControl, TextField } from "@mui/material";
import React from "react";

const Signup = () => {
  return (
    <div>
      <br />
      <h1>Sign UP</h1>
      <br />
      <TextField id="outlined-basic" label="Name" variant="outlined" />
      <br />
      <br />
      <TextField id="outlined-basic" label="Email" variant="outlined" />
      <br />
      <br />
      <TextField id="outlined-basic" label="Password" variant="outlined" />
      <br />
      <br />
      <TextField id="outlined-basic" label="Admission No" variant="outlined" />
      <br />
      <br />
   <Button variant="outlined">Submit</Button>
    </div>
  );
};

export default Signup;
