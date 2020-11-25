import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import Product from "../components/Product";

import { Row, Col } from "react-bootstrap";

const HomeScreen = () => {
    const dispatch = useDispatch();
    const { loading, error, products } = useSelector(
        (state) => state.productList
    );

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

    return (
        <>
            <h1>Latest products:</h1>
            {loading ? (
                <h2>LOADING</h2>
            ) : error ? (
                <h3>{error}</h3>
            ) : (
                <Row>
                    {products.map((product, index) => (
                        <Col sm={12} md={6} lg={4} xl={3} key={index}>
                            <Product product={product} key={index} />
                        </Col>
                    ))}
                </Row>
            )}
        </>
    );
};

export default HomeScreen;
