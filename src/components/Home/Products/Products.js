import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Product from '../Product/Product';
import './Products.css'


const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(response => response.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div className="container">
        <div className="top">
        <h2>Our Popular <span>Products</span></h2>
        </div>
        <input className="product" type="text" placeholder="Search your Favourite Products" />
        <Row xs={1} md={2} lg={3} className="g-4">
            {
                products?.map(product => <Product key={product._id} product={product}></Product>)
            }
        </Row>
     </div>
    );
};

export default Products;