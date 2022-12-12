import React from 'react'
import { Edit } from '@mui/icons-material';
import {Stack} from '@mui/material'
import IconButton from '@mui/material/IconButton';
import { Delete } from '@mui/icons-material';
import { Typography } from '@mui/material';

function Product(props) {
  console.warn(props)
  return (


    <Stack direction='row' spacing={3}>
      <Typography varient='subtitle'> {props.name}</Typography>
      <Typography varient='subtitle'> {props.price}</Typography>
      <Typography varient='subtitle'> {props.quantity}</Typography>
      

      <IconButton>
        <Edit/>
      </IconButton>

      <IconButton>
        <Delete/>
      </IconButton>

    </Stack> )
}

export default Product