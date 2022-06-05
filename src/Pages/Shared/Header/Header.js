import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom'
import auth from '../../../firebase.init';
import logo from '../../../images/log_o.png'
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="white" variant="light">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img height={50} src={logo} alt=""></img>{/* <span className='text-dark ms-2 fw-bold'>Travelu</span> */}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto fw-bolder navbar">
                            <div className='nav-item'>
                                <Nav.Link className="nav--link" href="services">HOME</Nav.Link>
                            </div>
                            <div className='nav-item'>
                                <Nav.Link className="nav--link" href="services">SERVICES</Nav.Link>
                            </div>
                            <div className='nav-item'>
                                <Nav.Link className="nav--link" as={Link} to="checkout">CHECKOUT</Nav.Link>
                            </div>
                            <div className='nav-item'>
                                <Nav.Link className="nav--link" as={Link} to="blogs">BLOG</Nav.Link>
                            </div>
                            <div className='nav-item'>
                                <Nav.Link className="nav--link" as={Link} to="blogs">ABOUT ME</Nav.Link>
                            </div>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="about">About</Nav.Link>
                            {
                                user ?
                                    <button className='btn btn-link text-dark text-decoration-none' onClick={handleSignOut}>Log Out</button>
                                    :
                                    <Nav.Link as={Link} to="login">
                                        Login
                                    </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    );
};

export default Header;