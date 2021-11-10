import React from 'react';
import './Banner.css'
import car1 from '../../../images/car1.jpg';
import car7 from '../../../images/car7.png';
import car14 from '../../../images/car14.jpg';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
        <Carousel>
         <Carousel.Item interval={2000}>
           <img
             className="d-block w-100"
             src={car1}
             alt="First slide"
           />
           <Carousel.Caption>
           <h3>Toyota</h3>
           <p>Choose Your Perfect Vehicle <br />We are committed to providing good products.</p>
           </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item interval={2000}>
           <img
             className="d-block w-100 "
             src={car7}
             alt="Second slide"
           />
           <Carousel.Caption>
           <h3>Mercedes-Benz</h3>
           <p>Choose Your Perfect Vehicle <br />We are committed to providing good products</p>
           </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item interval={2000}>
           <img
             className="d-block w-100"
             src={car14}
             alt="Third slide"
           />
           <Carousel.Caption>
           <h3>Mercedes-Benz</h3>
           <p>Choose Your Perfect Vehicle <br />We are committed to providing good products.</p>
           </Carousel.Caption>
         </Carousel.Item>
       </Carousel>
       </div>
    );
};

export default Banner;