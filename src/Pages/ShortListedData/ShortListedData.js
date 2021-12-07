import React from 'react'
import { Card, Col } from 'react-bootstrap';

const ShortListedData = (props) => {
    const {img,name,degree,fee}=props.service;
    return (

<Col xs={12} sm={6} md={3} style={{height:"30rem"},{marginTop:"15px"},{marginBottom:"15px"}}>
    <Card style={{ width: '18rem' },{height:"30rem"}}>
  <Card.Img variant="top" src={img} width="300px" height="300px"/>
  <Card.Body>
    <Card.Title>{name}</Card.Title>

    <Card.Text>
      Instructor's Genre: {degree}
    </Card.Text>
    <Card.Text>
    Appointment Fee: ${fee}
    </Card.Text>
    <button className="btn btn-info px-5 py-1 rounded-3 mx-auto">See Details</button>
  </Card.Body>
</Card>


    </Col>

    )
}

export default ShortListedData;