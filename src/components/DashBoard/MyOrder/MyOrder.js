import React, { useEffect, useState, useRef } from "react";
import './MyOrder.css';
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  ListGroup,
  Table,
} from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
function MyOrder() {
  const { user } = useAuth();
  const [myOrder, setMyOrder] = useState("");
  console.log(myOrder);
  useEffect(() => {
    fetch("https://thawing-headland-26014.herokuapp.com/order")
      .then((response) => response.json())
      .then((data) => {
        setMyOrder(data);
      });
  }, []);

  // DELETE AN Order
  const handleDeleteOrder = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      const url = `https://thawing-headland-26014.herokuapp.com/order/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remainingOrders = myOrder.filter((order) => order._id !== id);
            setMyOrder(remainingOrders);
          }
        });
    }
  };
  return (

    <div className="pt-1 pb-1">
      <Container>
        <div className="membership mb-3">
          <h2 style={{ textAlign: "center" }}>My Orders</h2>
        </div>
      </Container>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Person Name</th>
            <th>Email</th>
            <th>Product Name</th>
            <th>Cost</th>
            <th>Date</th>
            <th> Description</th>
            <th> Address</th>
            <th>Order Status</th>
            <th>Delete Order</th>
          </tr>
        </thead>
        <tbody>
          {myOrder &&
            myOrder
              .filter((order) => order.username === user.displayName)
              .map((item, i) => (
                <tr>
                  <td>{item.username}</td>
                  <td>{item.useremail}</td>
                  <td>{item.productname}</td>
                  <td>{item.costbook}</td>
                  <td>{item.datebook}</td>
                  <td>{item.servicedescription}</td>
                  <td>{item.Address}</td>
                  <td>{item.status}</td>
                  <td>
                    <button className="btn btn-danger" onClick={() => handleDeleteOrder(item._id)}>
                      DELETE
                    </button>
                  </td>
                </tr>
              ))}
        </tbody>
      </Table>
    </div>
  );
}

export default MyOrder;