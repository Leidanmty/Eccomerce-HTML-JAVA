import React, { useState } from 'react';
import { Navbar, Container, Nav, Button, Offcanvas, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import Cart from "./Cart"
import { filterProductThunk } from '../store/slices/productsDetails.slice';

const NavBar = () => {
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState("");

    const navigate = useNavigate();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        const token = localStorage.getItem("token")
        if (token) {
            setShow(true);
        } else {
            navigate("/login")
        }
    };

    const logout = () => {
        localStorage.setItem("token", "");
        navigate("/login");
    };

    const token = localStorage.getItem("token");

    return (
        <>
            <Cart show={show} handleClose={handleClose}/>
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
                                {token ? (
                                    <Nav.Link onClick={logout}>Logout</Nav.Link>
                                ) : (
                                    <Nav.Link href="/#/Login">Login</Nav.Link>
                                )}
                                
                                <Nav.Link href="/#/Purchases">Purchases</Nav.Link>
                                <Nav.Link onClick={handleShow}>Cart</Nav.Link>
                            </Nav>
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                    onChange={(e) => setSearchValue(e.target.value)}
                                    value={searchValue}
                                />
                                <Button
                                    variant="outline-dark"
                                    onClick={() => dispatch(filterProductThunk(searchValue))}
                                >Search</Button>
                            </Form>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
};

export default NavBar;