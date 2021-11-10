import React from 'react';
import About from '../About/About';
import Activities from '../Activities/Activities';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Activities></Activities>
            <About></About>
        </div>
    );
};

export default Home;