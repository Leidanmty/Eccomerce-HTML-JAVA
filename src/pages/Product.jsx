import React, { useEffect, useState } from 'react';
import { Col, Row, Card, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductsThunks } from "../store/slices/productsDetails.slice"

const Product = () => {
    const allProducts = useSelector((state) => state.products);
    const [productDetail, SetProductDetail] = useState({});
    const [infoProduct, setInfoProduct] = useState([]);

    const { id } = useParams();

    const dispatch = useDispatch();
    const navigate = useNavigate();

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
                                <Col>
                                    <h1>{productDetail?.category.name}</h1>
                                </Col>
                                <Col>
                                    {productDetail?.description}
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h1>Price: ${productDetail?.price}</h1>
                                </Col>
                                <Col>
                                    <Button variant="primary">Left</Button>                                    
                                    <Button variant="primary">Rigth</Button>
                                </Col>
                            </Row>
                        </blockquote>
                    </Card.Body>
                    <Card.Footer className="text-muted">
                        <Button variant="primary">Add Cart</Button>
                    </Card.Footer>
                </Card>
            </Col>
        </Row>
    );
};

export default Product;