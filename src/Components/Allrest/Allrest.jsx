import { useEffect, useState } from 'react';

import axios from 'axios'
import Restcard from '../Restcard/Restcard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




function Allrest() {

  // To hold all Restaurants details as in the form of array
  const [allRestaurants,setAllRestaurants]=useState([])

  const fetchData=async()=>{
    const response = await axios.get('https://restaurant-backend-hleq.onrender.com/restaurants')
    console.log(response.data);
    setAllRestaurants(response.data)
  }

  console.log(allRestaurants);
  
  useEffect(()=>{
    fetchData()//function call
  },[])
  return (
    <div>
      <Row>
        {
          allRestaurants.map((item)=>(
            <Col>
                <Restcard restaurants={item}/>
            </Col>
          
          ))
          }
          </Row>
      
      
    </div>
  )
}

export default Allrest