import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keyword }) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keyword" content={keyword} />
        </Helmet>
    );
};

Meta.defaultProps = {
    title: "Welcome to Best-Tech",
    description: "Best tech at best price!",
    keyword: "electronics, buy electronics, buy cheap, cheap electronics",
};

export default Meta;
