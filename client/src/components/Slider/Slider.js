import React, { Component } from "react";
import Slide from "./Slide";
import RightArrow from "./RightArrow";
import LeftArrow from "./LeftArrow";

class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                "https://drive.google.com/open?id=1ejy54Fl6IqS8qldLhIAHz9D-XiW8iAAf",
                "https://drive.google.com/open?id=1DKgyTGf8czW4ZEEm-x0FWnUuerRAy6ij",
                "https://drive.google.com/open?id=1rF_dKEAJwtWaiGq7bBmNqnNYe7ZN1GcD"
            ],
            currentIndex: 0,
            translateValue: 0
        };
    }

    prevSlide = () => {};
    nextSlide = () => {
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1
        }));
    };

    render() {
        return (
            <div className="slider">
                <div
                    className="slider-wrapper"
                    style={{
                        transform: `translateX(${this.state.translateValue}px)`,
                        transition: "transform ease-out 0.45s"
                    }}
                >
                    {this.state.images.map((image, i) => (
                        <Slide key={i} image={image} />
                    ))}
                </div>
                {/* <LeftArrow prevSlide={this.prevSlide} />
                <RightArrow nextSlide={this.nextSlide} /> */}
            </div>
        );
    }
}

export default Slider;
