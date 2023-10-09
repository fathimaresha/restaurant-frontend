import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Fade from 'react-bootstrap/Collapse';

function Restreview({reviews}) {
  console.log(reviews);
  const [open, setOpen]=useState(false);
  return (
    <div> <Button
    onClick={() => setOpen(!open)}
    aria-controls="example-Fade-text"
    aria-expanded={open}
  >
    Reviews
  </Button>
  <Fade in={open}>
    <div id="example-Fade-text">
     {
      reviews?.map((item)=>(
        <div>
          <h1>{item.name}</h1>
          <h4>{item.date}</h4>
          <h3>{item.rating}</h3>
        </div>
      ))
     }
    </div>
  </Fade></div>
  )
}

export default Restreview


