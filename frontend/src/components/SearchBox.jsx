import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Button } from "react-bootstrap";

const SearchBox = ({ history }) => {
    const [keyword, setKeyword] = useState("");

    const submitHandler = (event) => {
        event.preventDefault();
        if (keyword.trim()) {
            setKeyword("");
            history.push(`/search/${keyword}`);
        } else {
            history.push("/");
        }
    };

    return (
        <Form onSubmit={submitHandler} inline type>
            <Form.Control
                type="text"
                name="q"
                value={keyword}
                onChange={(event) => setKeyword(event.target.value)}
                placeholder="Search Products..."
                className="mr-sm-2 ml-sm-5"
            ></Form.Control>

            <Button type="submit" variant="outline-success" className="p-2">
                Search
            </Button>
        </Form>
    );
};

export default SearchBox;
