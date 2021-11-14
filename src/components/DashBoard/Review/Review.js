import React, { useState, useEffect, useRef } from "react";
import { Form, Button } from "react-bootstrap";
import useAuth from "./../../../hooks/useAuth";

const Review = () => {
    const [services, setServices] = useState([]);
  const userName = useRef();
  const { user } = useAuth();
  const [rating, setRating] = useState("");
  const [product, setProductName] = useState("");
  console.log(services);
  useEffect(() => {
    fetch("https://thawing-headland-26014.herokuapp.com/products")
      .then((response) => response.json())
      .then((data) => {
        setServices(data);
      });
  }, []);

  const handleAddService = (e) => {
    const username = userName.current.value;
    const productname = product;
    const Rating = rating;

    const newReview = {
      username,
      productname,
      Rating,
    };
    console.log(newReview);
    fetch("https://thawing-headland-26014.herokuapp.com/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Thanks for give rating.");
          e.target.reset();
        }
      });
    e.preventDefault();
  };
  return (
    <div>
      <h3>Give Review</h3>

      <h4>Enter a product </h4>
      <Form onSubmit={handleAddService}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            type="text"
            value={user.displayName}
            ref={userName}
            readOnly
          />
        </Form.Group>
        <Form.Select
          aria-label="Floating label select example"
          onChange={(e) => setProductName(e.target.value)}
        >
          <option>Select Product</option>
          {services &&
            services.map((item, i) => (
              <option key={i}>{item.name}</option>
            ))}
        </Form.Select>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Rating</Form.Label>
          <Form.Select
            aria-label="Floating label select example"
            onChange={(e) => setRating(e.target.value)}
          >
            <option>Select</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="4">Four</option>
            <option value="5">Five</option>
          </Form.Select>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
export default Review;