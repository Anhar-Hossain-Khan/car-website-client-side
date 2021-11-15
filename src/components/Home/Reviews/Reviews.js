import React, { useEffect, useState } from "react";
import { Container, Row, Col, ListGroup, Card} from "react-bootstrap";
import ReactStarRating from "react-star-ratings-component";
import './Reviews.css'

const Reviews = () => {
    const [review, setReview] = useState([]);
    useEffect(() => {
      fetch("https://thawing-headland-26014.herokuapp.com/review")
        .then((response) => response.json())
        .then((data) => {
          setReview(data);
        });
    }, []);
      return (
          <div>
              <h3 className="mb-5" style={{ textAlign: "center", fontWeight: "bold", paddingTop: "50px"}}>
          Product Rating
        </h3>
        {review &&
          review.map((item, i) => (
            <>
              <Container key={i}>
                {/* <Row className="pb-4">
                  <Col sm={12} md={6} lg={6} xl={6} className="right-column">
                    <ListGroup vertical>
                      <ListGroup.Item>
                        <h4 className="text-success"> User Name: {item.username}</h4>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <p style={{ float: "left" }}>
                          Product Name: {item.productname}
                        </p>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <p style={{ float: "left" }}>
                          Rating:
                          <ReactStarRating
                            numberOfStar={5}
                            numberOfSelectedStar={item.Rating}
                            colorFilledStar="red"
                            colorEmptyStar="black"
                            starSize="20px"
                            spaceBetweenStar="10px"
                            disableOnSelect={false}
                            onSelectStar={(val) => {
                              console.log(val);
                            }}
                          />
                        </p>
                      </ListGroup.Item>
                    </ListGroup>
                  </Col>
                </Row> */}

<Row xs={1} md={1} lg={1} className="g-0 pb-5">
    <Col>
      <Card>
        <Card.Body className="border border-primary">
       
        <ListGroup vertical>
                      <ListGroup.Item>
                        <h3 className="text-success"> User Name: {item.username}</h3>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h5 className="text-succes" style={{ float: "left" }}>
                          Product Name: {item.productname}
                        </h5>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h5 className="text-succes" style={{ float: "left" }}>
                          Rating:
                          <ReactStarRating
                            numberOfStar={5}
                            numberOfSelectedStar={item.Rating}
                            colorFilledStar="red"
                            colorEmptyStar="black"
                            starSize="20px"
                            spaceBetweenStar="10px"
                            disableOnSelect={false}
                            onSelectStar={(val) => {
                              console.log(val);
                            }}
                          />
                        </h5>
                      </ListGroup.Item>
                    </ListGroup>
        
        
        </Card.Body>
      </Card>
    </Col>
    </Row>
              </Container>
            </>
          ))}
  
          </div>
      );
  };

export default Reviews;