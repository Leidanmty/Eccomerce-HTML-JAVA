import React, { useEffect, useState } from 'react';
import { Col, Row, Card, Button, Carousel, ButtonGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductsThunks } from "../store/slices/productsDetails.slice"
import "../styles/product.css"

const Product = () => {
    const allProducts = useSelector((state) => state.products);
    const [productDetail, SetProductDetail] = useState({});
    const [infoProduct, setInfoProduct] = useState([]);

    const { id } = useParams();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [counter, setCounter] = useState(1);

    const increment = () => {
        setCounter(counter + 1);
    };
    const decrement = () => {
        setCounter(counter - 1);
    };

    useEffect(() => {
        dispatch(getProductsThunks());
    }, []);

    useEffect(() => {
        const productFind = allProducts.find((oneProduct) => oneProduct.id === Number(id));
        SetProductDetail(productFind);

        const filteredProduct = allProducts.find((oneProduct) => oneProduct.category.id === productFind.category.id);
        setInfoProduct(filteredProduct);
    }, [allProducts, id]);

    return (
        <Row>
            <Col>
                <Card>
                    <Card.Header>{productDetail?.title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <Row>
                                <Col lg={6}>
                                    <Carousel variant="dark">
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100"
                                                src={productDetail?.productImgs?.[0]}
                                                style={{ height: "400px", objectFit: "contain" }}
                                                alt="First slide"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100"
                                                src={productDetail?.productImgs?.[1]}
                                                style={{ height: "400px", objectFit: "contain" }}
                                                alt="Second slide"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100"
                                                src={productDetail?.productImgs?.[2]}
                                                style={{ height: "400px", objectFit: "contain" }}
                                                alt="Third slide"
                                            />
                                        </Carousel.Item>
                                    </Carousel>
                                </Col>
                                <Col>
                                    <h2>Description:</h2>
                                    <br />
                                    <br />
                                    {productDetail?.description}
                                </Col>
                            </Row>
                            <br />
                            <br />
                            <Row>
                                <Col>
                                    <h1>Price: ${productDetail?.price}</h1>
                                </Col>
                                <Col>
                                    <ButtonGroup className='d-flex' size="md">
                                        <Button
                                            disabled={counter === 1}                                            
                                            onClick={decrement}
                                            className="decrement"
                                        >
                                            <i className="bx bx-minus"></i>
                                        </Button>
                                        <div className="quantity-box">
                                            <small>{counter}</small>
                                        </div>
                                        <Button  onClick={increment}>
                                            <i className="bx bx-plus"></i>
                                        </Button>
                                    </ButtonGroup>
                                </Col>
                            </Row>
                        </blockquote>
                    </Card.Body>
                    <Card.Footer className="text-muted">
                        <Button className='add'  variant="primary">Add Cart</Button>
                    </Card.Footer>
                </Card>
            </Col>
        </Row >
    );
};

export default Product;