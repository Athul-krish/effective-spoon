import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const Counter = () => {
    var[count,setCount] = useState(0)
  return (
    <div style={{margin:'10%'}}>
      <Typography variant='h2'> {count} </Typography><br />
      <Button  onClick={()=>setCount(count+1)}><ArrowUpwardIcon fontSize='large'></ArrowUpwardIcon></Button>
      <Button  onClick={()=>setCount(count-1)}><ArrowDownwardIcon fontSize='large'></ArrowDownwardIcon></Button>
    </div>
  )
}

export default Counter
