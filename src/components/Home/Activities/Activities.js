import React from 'react';
import { Card, Col, Container, Row, Button} from 'react-bootstrap';
import './Activities.css'

const Activities = () => {
    return (
        <Container className="mb-5">
         <h2 className=" mt-4 mb-3 text-primary support">Our Support</h2>
          <div>
            <Row xs={1} md={2} lg={4} className="g-0 ">
    <Col>
      <Card>
        <Card.Body className="activities">
          <Card.Title className="text-primary support">Travel Guide</Card.Title>
          <Card.Text>
          We guides plan, sell, and arrange tours for groups or individuals that are normally at long distances from their homes.
          </Card.Text>
          <Button className="btn btn-danger">Read More</Button>
        </Card.Body>
      </Card>
    </Col>

    <Col>
      <Card>
        <Card.Body className="activities">
          <Card.Title className=" support">Hotel Services</Card.Title>
          <Card.Text>
          We provides services include reception guests, room service, food service, including restaurants in the hotel, and security. 
          </Card.Text>
          <Button className="btn btn-danger">Read More</Button>
        </Card.Body>
      </Card>
    </Col>

    <Col>
      <Card>
        <Card.Body className="activities">
          <Card.Title className=" support">24 Hours Support</Card.Title>
          <Card.Text>
         We Provide Excellent customer support  when a company exceeds a customer's expectations and provide 24 hours support. 
          </Card.Text>
          <Button className="btn btn-danger">Read More</Button>
        </Card.Body>
      </Card>
    </Col>

    <Col>
      <Card>
        <Card.Body className="activities">
          <Card.Title className="support">Quality Services</Card.Title>
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