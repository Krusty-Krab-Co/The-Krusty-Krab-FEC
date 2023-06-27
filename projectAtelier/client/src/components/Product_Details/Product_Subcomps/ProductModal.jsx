import {useState, useEffect} from 'react';
import Box from '@mui/material/Box'

const ProductModal = ({photos}) => {

 let initPic = photos[0];

  return (
    <Box
      component="img"
       sx={{
       height: 750,
       width: 750,
     }}
     alt="Product Image"
     src= {photos[0].url}
    />
  )
}

export default ProductModal;