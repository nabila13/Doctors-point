import React from 'react';
import { Card, Col } from 'react-bootstrap';

const SingleReview = (props) => {
    const {img,name,age,review}=props.review;
    return (
        <Col md={4} xs={12} style={{height:"35rem"} ,{marginTop:"15px"},{marginBottom:"15px"}}>
        <Card style={{ width: '18rem' },{height:"36rem"}}>
      <Card.Img variant="top" src={img} width="300px" height="300px"/>
      <Card.Body>
        <Card.Title>patient's name: {name}</Card.Title>

        <Card.Text>
          patient's age: {age}
        </Card.Text>
        <Card.Text>
        {
            review
        }
        </Card.Text>
      </Card.Body>
    </Card>


        </Col>
    );
};

export default SingleReview;