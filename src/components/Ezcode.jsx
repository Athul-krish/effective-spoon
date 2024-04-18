import { Button, TextField, Typography ,setInput ,setName} from '@mui/material'
import React, { useState } from 'react'

const Ezcode = () => { 
  // var[input,setInput] = useState();
  // var[data,setData] = useState();
  // const addName = ()=>{
  //   setData(input)
  // }
  //   var[input,setInput] = useState()
  //   const inputHandler = (e)=>{
  //       console.log(e.target.value)
  //       setInput(e.target.value);
  //   }

    var[input,setName] = useState()
    const addGallery = ()=>{
      console.log("btn clicked");
      setName("Welcome to Gallery");
    }

    var[input,setName] = useState()
    const  addHome = ()=>{
      console.log("btn clicked");
      setName("Welcome to Home");
    }

    var[input,setName] = useState()
    const addContact  = ()=>{
      console.log("btn clicked");
      setName("Welcome to Contact");
    }
  return (
    <div style={{margin:'10%'}}>
        <Typography variant='h4'>{input}</Typography>
      {/* <TextField variant="outlined" label='Name' focused onChange={inputHandler} ></TextField><br /><br /> */}
      <Button variant='contained' onClick={addGallery} color='warning'>Gallery</Button> &ensp;
      <Button variant='contained' onClick={addHome} color='primary'>Home</Button> &ensp;
      <Button variant='contained' onClick={addContact} color='inherit'>Contact us</Button>
    </div>
  )
}

export default Ezcode
