import React from 'react';
import { Card, Col } from 'react-bootstrap';

const SingleEmergency = (props) => {
    const {img,name,number}=props.emergency;
    return (
        <Col md={3} xs={12} style={{height:"33rem"} ,{marginTop:"15px"},{marginBottom:"15px"}}>
        <Card style={{ width: '18rem' },{height:"32rem"}}>
      <Card.Img variant="top" src={img} width="300px" height="300px"/>
      <Card.Body>
        <Card.Title>Emergency service name: {name}</Card.Title>

        <Card.Text>
          Emergency service Hotline number: {number}
        </Card.Text>
      </Card.Body>
    </Card>


        </Col>
    );
};

export default SingleEmergency;