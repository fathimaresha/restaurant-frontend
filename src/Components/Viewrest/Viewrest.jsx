import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Restop from '../Restop/Restop';
import Restreview from '../Restreview/Restreview';
function Viewrest() {


    //get path parameter
    // const pathParameter = useParams()
    // console.log(pathParameter);//id:2
    // console.log(pathParameter.id);//2


    //destructure parameter
    const {id}=useParams()
    console.log(id);

    const [RestDetails,SetRestDetails]= useState({})

    //api call for get perticular restaurant details
    const fetchData = async ()=>{
        const {data} = await axios.get(`http://localhost:3001/restaurants/${id}`)
        console.log(data);//object perticular rest details
        SetRestDetails(data)
    }
    useEffect(()=>{
        fetchData();

    },[])

  return (
    <div>
        <Row>
          <Col>
          {/*images*/}
          <img src={`${RestDetails.photograph}`} alt="" style={{width:'400px', marginLeft:'100px', margin:'20px',height:'500px',borderRadius:'20px'}}/>
          </Col>
          <Col style={{margin:'50px'}}>
          {/*content*/}
          <ListGroup>
      <ListGroup.Item>Name: {RestDetails.name}</ListGroup.Item>
      <ListGroup.Item>Address: {RestDetails.address}</ListGroup.Item>
      <ListGroup.Item>Cuisine Type: {RestDetails.cuisine_type}</ListGroup.Item>
      <ListGroup.Item>Neighborhood: {RestDetails.neighborhood}</ListGroup.Item>
      <ListGroup.Item><Restop op={RestDetails.operating_hours}/></ListGroup.Item>
      <ListGroup.Item><Restreview reviews={RestDetails.reviews}/></ListGroup.Item>
      
      
        </ListGroup>
          </Col>
        </Row>
    </div>
  )
}

export default Viewrest