import React from "react";
import "./../../styles/rightarrow.scss"

const RightArrow = (props) => {
    return (
        <div className="nextArrow" onClick={props.nextSlide}>
            <i className="fa fa-arrow-right fa-2x" aria-hidden="true" />
        </div>
    );
};

export default RightArrow;
