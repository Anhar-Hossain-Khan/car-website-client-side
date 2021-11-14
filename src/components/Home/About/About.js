import React from 'react';
import { Col, Row } from "react-bootstrap"; 
import car13 from '../../../images/car13.jpg';
import './About.css'

const About = () => {
    return (
        <div className=" info-header">
          <div className="info-top">
            <h2>Why are you come with us?</h2>
          </div>
          <Row sm={12} lg={12} className="info-row">
            <Col sm={6}  lg={6} className="info-description">
              <h3>Travel Your Dream Car</h3>
              <h6>We are committed to providing exceptional services, <br /> Excellent customer support  when a company exceeds a customer's <br /> expectations and provide 24/7 Customer Support </h6>
            </Col>
            <Col sm={6}  lg={6} >
              <img className="border border-primary rounded-3 w-100 h-100 " src={car13} alt="" />
            </Col>
          </Row>
        </div>
    );
};

export default About;