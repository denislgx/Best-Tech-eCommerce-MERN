import React from "react";
import RatingStar from "./RatingStar";
import PropTypes from "prop-types";

const Rating = ({ value, text }) => {
    return (
        <div className="rating">
            <RatingStar value={value} numOfStar={1} />
            <RatingStar value={value} numOfStar={2} />
            <RatingStar value={value} numOfStar={3} />
            <RatingStar value={value} numOfStar={4} />
            <RatingStar value={value} numOfStar={5} />

            <span>{text && text}</span>
        </div>
    );
};

Rating.propTypes = {
    value: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
};

export default Rating;
