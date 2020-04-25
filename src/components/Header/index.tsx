import React from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="light" variant="light">
            <Navbar.Brand href="#home">Skin and Bone</Navbar.Brand>
            <Nav className="ml-auto">
                <Nav.Link href="#pricing">Add new animal</Nav.Link>
                <Link to="/my-animals">My animals</Link>
            </Nav>
            <Link to={'/login'}>
            <Button>Login</Button>
            </Link>
        </Navbar>
    )
}

export default Header