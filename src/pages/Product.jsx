import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Product = () => {
    const allProducts = useSelector((state) => state.products)
    return (
        <Row>
            <Col>
                <h1>Hola mundo</h1>
            </Col>
        </Row>
    );
};

export default Product;