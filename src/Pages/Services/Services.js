import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Service from '../Service/Service';
import "./Services.css";
const Services = () => {
    const [services,setServices]=useState([]);
fetch("./data.json")
.then(res=>res.json())
.then(data=> setServices(data));

    return (
        <div className="containers">
        <h1 className='text-center text-danger'>Our Precious Doctors!!!</h1>
<Container fluid>
<Row className="service">
{
services.map(service=> <Service
    key={service.id}
    service={service}
    >
</Service>)
}
</Row>
</Container>

    </div>
    );
};

export default Services;