import React from 'react';
import { Card, Col, Container, Row, Button} from 'react-bootstrap';
import './Activities.css'

const Activities = () => {
    return (
        <Container className="mb-5">
         <h2 className=" mt-4 mb-3 text-primary support">Our Help & Support</h2>
          <div>
            <Row xs={1} md={2} lg={4} className="g-0 ">
    <Col>
      <Card>
        <Card.Body className="activities">
          <Card.Title className="text-primary support">Warranty Policy</Card.Title>
          <Card.Text>
           CarBazar Shop will provide the term  of the warranty shall commence from the date of delivery of the new vehicle to the first purchaser. 
          </Card.Text>
          <Button className="btn btn-danger">Read More</Button>
        </Card.Body>
      </Card>
    </Col>

    <Col>
      <Card>
        <Card.Body className="activities">
          <Card.Title className=" support">Car Wash & Polish</Card.Title>
          <Card.Text>
         We also provides polishing and washing the car's exterior by hand or machine, shampooing, cleaning for protection to the car. 
          </Card.Text>
          <Button className="btn btn-danger">Read More</Button>
        </Card.Body>
      </Card>
    </Col>

    <Col>
      <Card>
        <Card.Body className="activities">
          <Card.Title className=" support">24/7 Customer Support</Card.Title>
          <Card.Text>
         We Provide Excellent customer support  when a company exceeds a customer's expectations and provide 24/7 Customer Support. 
          </Card.Text>
          <Button className="btn btn-danger">Read More</Button>
        </Card.Body>
      </Card>
    </Col>

    <Col>
      <Card>
        <Card.Body className="activities">
          <Card.Title className="support">Professional Mechanic</Card.Title>
          <Card.Text>
         We Ensure Quality service is dealing with clients and customers in a respectful and helpful way and provide our best services.
          </Card.Text>
          <Button className="btn btn-danger">Read More</Button>
        </Card.Body>
      </Card>
    </Col>
</Row>
        </div>
       </Container>
    );
};

export default Activities;