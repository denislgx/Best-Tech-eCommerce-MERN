import React from "react";

// RatingStar.defaultProps = {
//     color: "#f8e825",
// };

const RatingStar = ({ value, numOfStar }) => {
    return (
        <span>
            <i
                style={{ color: "#f8e825" }}
                className={
                    value >= numOfStar
                        ? "fas fa-star"
                        : value >= numOfStar - 0.5
                        ? "fas fa-star-half-alt"
                        : "far fa-star"
                }
            />
        </span>
    );
};

export default RatingStar;
