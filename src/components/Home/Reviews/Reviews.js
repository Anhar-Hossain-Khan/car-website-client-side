import React, { useEffect, useState } from "react";
import { Container, Row, Col, ListGroup} from "react-bootstrap";
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
              <h3 className="column" style={{ textAlign: "center", fontWeight: "bold", paddingTop: "50px" }}>
          Product Rating
        </h3>
        {review &&
          review.map((item, i) => (
            <>
              <Container key={i}>
                <Row className="pb-4">
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
                </Row>
              </Container>
            </>
          ))}
  
          </div>
      );
  };

export default Reviews;