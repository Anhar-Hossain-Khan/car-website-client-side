import React from 'react';
import "./Home.css";
import About from '../About/About';
import Activities from '../Activities/Activities';
import Banner from '../Banner/Banner';
import Reviews from '../Reviews/Reviews';
import Products from '../Products/Products';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Reviews></Reviews>
            <Activities></Activities>
            <About></About>
        </div>
    );
};

export default Home;