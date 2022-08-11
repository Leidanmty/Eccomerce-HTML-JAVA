import React, { useEffect } from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getPurchasesThunk } from '../store/slices/purchases.slice';

const Purchases = () => {
    const dispatch = useDispatch();

    const purchases = useSelector((state) => state.purchases)

    useEffect(() => {
        dispatch(getPurchasesThunk());
    }, []);

    //console.log(purchases);

    return (
        <Row>
            {purchases.map((purchase) => (
                <Col lg={12} className="mb-5" key={purchase.id}>
                    <Card>
                        <Card.Header>{purchase.createdAt}</Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                                {purchase.cart.products.map((items) => (
                                    <Table striped bordered hover key={items.id}>
                                    <thead>
                                      <tr>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Quantity in cart</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td className='name'>{items.title}</td>
                                        <td>{items.price}</td>
                                        <td>{items.productsInCart.quantity}</td>
                                      </tr>                                      
                                    </tbody>
                                  </Table>
                                ))}
                            </blockquote>
                        </Card.Body>
                        <Card.Footer className="text-muted">{purchase.updatedAt}</Card.Footer>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};

export default Purchases;