import React from "react";
import Product from "../components/Product";
import { Row, Col } from "react-bootstrap";
import products from "../products";

const HomeScreen = () => {
    return (
        <>
            <h1>Latest products:</h1>
            <Row>
                {products.map((product, index) => (
                    <Col sm={12} md={6} lg={4} xl={3} key={index}>
                        <Product product={product} key={index} />
                    </Col>
                ))}
            </Row>
        </>
    );
};

export default HomeScreen;
