import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import axios from "axios";
import { Grid } from "@mui/material";

 

const Product = () => {
  const [productdata, setvalue] = useState([]);
  axios.get("https://fakestoreapi.com/products").then((res) => {
    setvalue(res.data);
    console.log(res.data);
  });
  return (
    <div>
        <Grid container spacing={2}>
        {productdata.map((val)=>{
            return(
                    <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={val.image}
          title={val.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {val.title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
           {val.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
          <br/>
          <br/>
        </CardActions>
      </Card>
      
            )
        })}</Grid>
      
    </div>
  );
};

export default Product;
