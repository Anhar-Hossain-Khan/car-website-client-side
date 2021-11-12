import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const MoreProducts = (props) => {
    const [moreProducts, setMoreProducts] = useState([])
    const {_id} = props

    useEffect(()=>{
        fetch('https://thawing-headland-26014.herokuapp.com/products')
        .then(response => response.json())
        .then(data => setMoreProducts(data))
    }, [])
    return (
        <div className="container">
        <div className="top">
        <h2>Our Popular <span>Products</span></h2>
        </div>
        <input className="product" type="text" placeholder="Search your Favourite Products" />
        <Row xs={1} md={2} lg={3} className="g-4">
            {
                moreProducts?.map(moreProduct => 
                    <div className="mt-5">
                    <Col>
                    <Card>
                      <Card.Img variant="top" className="card-img border border-primary rounded-3" src={moreProduct.img} />
                      <Card.Body>
                         <h3>{moreProduct.name}</h3>
                         <h5>${moreProduct.price}</h5>
                         <p>{moreProduct.description.slice(0, 110)}</p>
                        <Link to={`/buyNow/${_id}`}>
                         <Button variant="danger">Buy Now</Button>
                       </Link>
                      </Card.Body>
                    </Card>
                  </Col>
                    </div>
                    )
            }
        </Row>
     </div>
    );
};

export default MoreProducts;