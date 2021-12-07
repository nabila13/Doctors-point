import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import ShortListedData from '../ShortListedData/ShortListedData';
const Home = () => {

   const [services,setServices]=useState([]);
   useEffect(()=>{
       fetch("./data.json")
       .then(res=>res.json())
       .then(data=> setServices(data))
   },[])
const short=services.slice(0,8);
    return (
        <div>
             <h3 className='text-center text-danger'>Find The Best Expert Doctors For Your Concern!</h3>
<Banner></Banner>
<div className='containers'>
<h2 className='text-center text-danger mb-5'>Most Demanding Doctors</h2>
<Container fluid>
<Row className="services">
{
         short.map(service=><ShortListedData
         key={service.id}
         service={service}
         ></ShortListedData>)
        }
</Row>
</Container>


</div>


        </div>
    );
};

export default Home;