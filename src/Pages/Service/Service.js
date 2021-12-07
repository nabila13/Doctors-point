import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Service = (props) => {
    const {img,name,degree,fee,description,background}=props.service;

    return (

    <Col md={4} xs={12} style={{height:"39rem"} ,{marginTop:"15px"},{marginBottom:"15px"}}>
    <Card style={{ width: '18rem' },{height:"38rem"},{paddingBottom: "20px"}}>
  <Card.Img variant="top" src={img} width="300px" height="300px"/>
  <Card.Body>
    <Card.Title>{name}</Card.Title>

    <Card.Text>
      Doctor's genre: {degree}
    </Card.Text>
    <Card.Text>
      Appointment Fee: ${fee}
    </Card.Text>
    <Card.Text>
      {description}
    </Card.Text>
    <Card.Text>
      {background}
    </Card.Text>
    <button className="btn btn-info px-3 py-1">Get appointment</button>
  </Card.Body>
</Card>


    </Col>
    );
};

export default Service;