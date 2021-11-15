import React from 'react';
import './Header.css'
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link, NavLink  } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Header = () => {
    const { user, logout} = useAuth();
    return (
        <>
        <Navbar bg="info" className="p-3 header" sticky="top" collapseOnSelect expand="lg">
         <Container>
         <Navbar.Brand href="#home" className="fw-bold text-warning">CarBazar</Navbar.Brand>
         <Navbar.Toggle />
         <Navbar.Collapse className="justify-content-end fw-bold">
         <Nav.Link  as={Link} to="/home" className="text-info">Home</Nav.Link>
         <Nav.Link  as={Link} to="/about" className="text-info">About Us</Nav.Link>
         <Nav.Link  as={Link} to="/moreProducts"className="text-info">More Products</Nav.Link>
         <Nav.Link  as={Link} to="/reviews"className="text-info">Reviews</Nav.Link>
       
       {user?.providerData ? (
                <div>
                  <NavLink to="/dashboard" className="text-info text-decoration-none mx-2">
                    DashBoard
                  </NavLink>
                <Navbar.Text>
               <a href="#login" className="text-info text-decoration-none" >{user?.displayName}</a>
               </Navbar.Text>
                  <Button onClick={logout} variant="danger" className="ms-2 text-white">
                    Logout
                  </Button>
                </div>
              ) : (
                <Nav>
                  <Nav.Item className="nav-itemlist">
                    <Nav.Link as={Link} to="/login" className="text-info text-decoration-none">
                      Login
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link as={Link} to="/register" className="text-info text-decoration-none">
                      Register
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              )}
             
         </Navbar.Collapse>
         </Container>
         </Navbar>
        </>
    );
};

export default Header;