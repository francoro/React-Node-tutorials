import React from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap';
const Header = () => {
    return (
        <Navbar bg="light" variant="light">
            <Navbar.Brand href="#home">Skin and Bone</Navbar.Brand>
            <Nav className="ml-auto">
                <Nav.Link href="#home">Adopt</Nav.Link>
                <Nav.Link href="#features">Lost</Nav.Link>
                <Nav.Link href="#pricing">Found</Nav.Link>
                <Nav.Link href="#pricing">Add new animal</Nav.Link>
                <Nav.Link href="#pricing">My animals</Nav.Link>
            </Nav>
            <Button>Login / Sign up</Button>
        </Navbar>
    )
}

export default Header