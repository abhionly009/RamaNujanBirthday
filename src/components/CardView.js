import React from 'react'

import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Card } from '@mui/material';


function CardView(props) {
    console.warn("Inside CardView", props.title);

  return (
    <Card variant='outlined' style={{margin:'5px'}}>
    <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
      {props.data.title}
      </Typography>
      <img src={props.data.filename} style={{width:"200px",height:"200px"}}/>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {props.data.type}
      </Typography>
      <br></br>
      <span style={{display:'block',width:'200px',wordWrap:'break-word'}}>
      {props.data.description}

      </span>

      <Typography variant="body2">
      Price: {props.data.price}
        <br />
      </Typography>
    </CardContent>
   
  </React.Fragment>
    </Card>
  )
}

export default CardView