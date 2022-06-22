import React, { useEffect,useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



function Cards({data}) {
  const [title,setTitle]=useState('');
  const [extract,setExtract]=useState('');
 

  useEffect(() => {
   setTitle(data.title)
   setExtract(data.extract)
  }, [data]);



    return (
      <div className="App">
          <Card sx={{ maxWidth: 345 }} className="card">
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {extract}
            </Typography>
          </CardContent>
        
        </Card>
        

    </div>
    );
  }
  
  export default Cards;
  