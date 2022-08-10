import React from 'react';
import { Navbar, Container, Nav, Button, Offcanvas, Form } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <Navbar className="mb-3" bg="success" variant="success" expand='md'>
                <Container fluid>
                    <Navbar.Brand href="/#/">E-commerce</Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand`}
                        aria-labelledby={`offcanvasNavbarLabel-expand`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand`}>
                                E-commerce
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="/#/Login">Login</Nav.Link>
                                <Nav.Link href="/#/Purchases">Purchases</Nav.Link>
                                <Nav.Link href="/#/">Cart</Nav.Link>
                            </Nav>
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-dark">Search</Button>
                            </Form>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
};

export default NavBar;