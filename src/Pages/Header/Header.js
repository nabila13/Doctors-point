import React from 'react';
import "./Header.css";
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
  const {user,logOut}=useAuth();
    return (
        <div className="header">
        <Navbar collapseOnSelect bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand ><h2>Doctors' Point</h2></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="ms-auto my-2 my-lg-0"
                navbarScroll
              >
                <Nav.Link className='link' as={Link} to='/home'>Home</Nav.Link>
                <Nav.Link as={Link}  className='link' to='/services'>Service</Nav.Link>
                <Nav.Link as={Link}  className='link' to='/aboutus'>About Us</Nav.Link>
                <Nav.Link as={Link}  className='link' to='/reviews'>Reviews</Nav.Link>
                <Nav.Link as={Link}  className='link' to='/emergency'>Emergency</Nav.Link>
                {
                    user?.email && <small className='my-auto me-2 link'>{user.displayName}</small>
                }
               {
                   user.email? <button onClick={logOut} className='btn btn-info rounded-3'>log out</button> :
                   <Nav.Link as={Link} to="/login"><button className='btn btn-info rounded-3 px-3 py-1'>Login</button></Nav.Link>
               }
                <Nav.Link as={Link}  className='link' to='/signup'><button className='btn btn-info rounded-3 px-3 py-1'>Signup</button></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
                </div>
    );
};

export default Header;