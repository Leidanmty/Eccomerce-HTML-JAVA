import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Col, ListGroup, Row, Card, Button } from 'react-bootstrap';
import { filterCategoryThunk, getProductsThunks } from '../store/slices/productsDetails.slice';
import "../styles/home.css"
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);

    const products = useSelector((state) => state.products)

    useEffect(() => {
        dispatch(getProductsThunks());

        axios
            .get("https://ecommerce-api-react.herokuapp.com/api/v1/products/categories")
            .then((res) => setCategories(res.data.data.categories))

    }, []);

    console.log(products);

    return (
        <div>
            <Row>
                <Col lg={3}>
                    <div>
                        <h2>Categories</h2>
                        <ListGroup>
                            {categories.map((category) => (
                                <ListGroup.Item 
                                    key={category.id}
                                    onClick={() => dispatch(filterCategoryThunk(category.id))}>
                                    {category.name}
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </div>
                </Col>
                <Col>
                    <Row>
                        <h1>Products</h1>
                        {products.map((product) => (
                            <Col key={product.id}>
                                <Card className="cardu" 
                                style={{ width: '18rem' }}
                                onClick={() => navigate(`/product/${product.id}`)}
                                >
                                    <Card.Img className="imagen" variant="top" src={product.productImgs[0]} />
                                    <Card.Body className='cardBody'>
                                        <Card.Title>{product.category.name}</Card.Title>
                                        <Card.Text>
                                            ${product.price}
                                        </Card.Text>
                                        <Card.Text>
                                            {product.title}
                                        </Card.Text>
                                        <Button variant="primary">Add Cart</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default Home;