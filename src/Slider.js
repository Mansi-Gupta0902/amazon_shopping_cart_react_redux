import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./Slider.css";

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel infiniteLoop="true" thumbWidth="0" showThumbs="false" className="slider">
                <div>
                    <img className="image" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7_4t17gwagYO9biVrYu86RE2XaZH3YS8amA&usqp=CAU" ></img>
                    
                </div>
                <div>
                    <img className="image" alt=""  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlUueeWvXFqaFSffvDYsqJcrzz3BoE1CZhkQ&usqp=CAU" ></img>
                    
                </div>
                <div>
                    <img className="image" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9_bVtI0zmsn249mH6n2rr08qinA9MrE9pMg&usqp=CAU" ></img>
                    
                </div>
            </Carousel>
        );
    }
}

// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));

export default DemoCarousel;