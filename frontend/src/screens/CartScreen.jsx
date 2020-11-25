import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import {
    Row,
    Col,
    ListGroup,
    Image,
    Form,
    Button,
    Card,
} from "react-bootstrap";
import { addToCart } from "../actions/cartActions";

const CartScreen = ({ match, location, history }) => {
    const dispatch = useDispatch();
    const { cartItems } = useSelector((state) => state.cart);

    const productId = match.params.id;
    const quantity = location.search
        ? Number(location.search.split("=")[1])
        : 1;

    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, quantity));
        }
    }, [dispatch, productId, quantity]);

    return (
        <div>
            <h1>CART</h1>
        </div>
    );
};

export default CartScreen;
