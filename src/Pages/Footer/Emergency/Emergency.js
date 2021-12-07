import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import SingleEmergency from '../../SingleEmergency/SingleEmergency';
import "./Emergency.css";
const Emergency = () => {
    const [emergency,setEmergency]=useState([]);
    useEffect(()=>{
        fetch("./data3.json")
        .then(res=>res.json())
        .then(data=> setEmergency(data));
    },[])
    return (
        <div>
             <h1 className='text-center text-danger'>Our Emergency Services!!!</h1>

             <Container fluid>
<Row className="service">
{
    emergency.map(emergence=> <SingleEmergency
    key={emergency.id}
    emergency={emergence}
    ></SingleEmergency>
    )
}
</Row>
</Container>
        </div>
    );
};

export default Emergency;