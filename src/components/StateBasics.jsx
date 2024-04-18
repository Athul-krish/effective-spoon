import { Button,Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    var[name,setName] = useState("ronaldo")
    const changeName = ()=>{
        console.log("btn clicked");
        setName("cristiano")
    }
  return (
    <div>
      <Typography variant='h2'>My name is {name}</Typography>
      <Button variant='contained' onClick={changeName}>Change</Button>
    </div>
  )
}

export default StateBasics
