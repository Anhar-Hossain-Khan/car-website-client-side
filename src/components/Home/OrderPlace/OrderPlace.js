import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router";
import {Col, Image, Row, Button, Container, ListGroup, Form} from "react-bootstrap";
import './OrderPlace.css'
import useAuth from "../../../hooks/useAuth";

const OrderPlace = () => {
  const { buyId } = useParams();
  const [servicePage, setServicePage] = useState([]);
  const [individualService, setIndividualService] = useState([]);
  const [place, setPlace] = useState("");
  const [cost, setCost] = useState("");
  const [description, setDescription] = useState("");
  const { user } = useAuth();
  const productName = useRef();
  const userName = useRef();
  const userEmail = useRef();
  const address = useRef();
  const phoneNumber = useRef();
  const costBook = useRef();
  const dateBook = useRef();
  const serviceDescription = useRef();

  useEffect(() => {
    fetch('https://thawing-headland-26014.herokuapp.com/products')
      .then((response) => response.json())
      .then((data) => {
        setServicePage(data);
        setIndividualService([data[buyId]]);
        setPlace([data[buyId]][0].name);
        setCost([data[buyId]][0].price);
        setDescription([data[buyId]][0].description);
      });
  }, []);

  // handle add Order
  const handlePlaceOrder = (e, user) => {
    const productname = productName.current.value;
    const username = userName.current.value;
    const useremail = userEmail.current.value;
    const Address = address.current.value;
    const phonenumber = phoneNumber.current.value;
    const costbook = costBook.current.value;
    const datebook = dateBook.current.value;
    const servicedescription = serviceDescription.current.value;
    const status = "pending";
    const placeOrder = {
      productname,
      username,
      useremail,
      Address,
      phonenumber,
      costbook,
      datebook,
      servicedescription,
      status,
    };

    fetch("https://thawing-headland-26014.herokuapp.com/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(placeOrder),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Order Added Successfully.");
          e.target.reset();
        }
      });

    e.preventDefault();
  };

  return (
    
    <div>
      <Container>
        <h1 className="service">Product Details </h1>
      </Container>
      {individualService &&
        individualService.map((item, i) => (
          <>
            <Container key={i}>
              <Row className="pb-4">
                <Col sm={12} md={6} lg={6} xl={6}>
                  <Image className="service-img" src={item.img} />
                </Col>
                <Col sm={12} md={6} lg={6} xl={6} className="right-column">
                  <ListGroup vertical className="border border-primary">
                    <ListGroup.Item>
                      <h2>
                        <span>Name: </span>
                        {item.name}
                      </h2>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <p style={{ float: "left" }}>
                        Price: {item.price}
                      </p>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <p style={{ float: "left" }}>
                        Description : {item.description}
                      </p>
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
              </Row>
            </Container>
          </>
        ))}

      <div className="placeorder">
        <Container>
          <h2 className="service">Submit Your Information</h2>
        </Container>
        <Form className="placeServiceForm" onSubmit={handlePlaceOrder}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              value={place}
              readOnly
              ref={productName}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              type="text"
              value={user.displayName}
              ref={userName}
              readOnly
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>User Email</Form.Label>
            <Form.Control
              type="text"
              value={user.email}
              ref={userEmail}
              readOnly
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="text"
              placeholder="Cost"
              value={cost}
              ref={costBook}
              readOnly
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="Address" ref={address} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="text" placeholder="Phone Number" ref={phoneNumber} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Select Date</Form.Label>
            <Form.Control
              type="date"
              placeholder="Description"
              ref={dateBook}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Description"
              value={description}
              ref={serviceDescription}
              readOnly
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Place Order
          </Button>
        </Form>
      </div>
    </div>  
  );
}


export default OrderPlace;