import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import SingleReview from '../SingleReview/SingleReview';

const Reviews = () => {
    const [reviews, setReviews]=useState([]);
useEffect(()=>{
    fetch("./data2.json")
    .then(res=> res.json())
    .then(data=> setReviews(data));
},[])

    return (
        <div>
 <h1 className='text-center text-danger'>Our Previous Patients' Review!!!</h1>

 <Container fluid>
<Row className="service">
{
    reviews.map(review=> <SingleReview
    key={review.id}
    review={review}
    ></SingleReview>
    )
}
</Row>
</Container>
        </div>
    );
};

export default Reviews;