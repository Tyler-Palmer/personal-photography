import React from "react";
import "./../../styles/leftarrow.scss"

const LeftArrow = (props) => {
    return (
        <div className="backArrow" onClick={props.prevSlide}>
            <i className="fa fa-arrow-left fa-2x" aria-hidden="true" />
        </div>
    );
};

export default LeftArrow;
