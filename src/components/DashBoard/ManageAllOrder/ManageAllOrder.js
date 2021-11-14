import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router";
import './ManageAllOrder.css';
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  ListGroup,
  Table,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const ManageAllOrder = () => {
    const [allOrder, setAllOrder] = useState("");
    console.log(allOrder);
    const [order, setOrder] = useState({});
    console.log(order);
    // useEffect(() => {
    //   const url = `http://localhost:5000/order/${id}`;
    //   fetch(url)
    //     .then((res) => res.json())
    //     .then((data) => setOrder(data));
    // }, []);
  
    useEffect(() => {
      fetch("http://localhost:5000/order/")
        .then((response) => response.json())
        .then((data) => {
          setAllOrder(data);
        });
    }, []);
    // DELETE AN Order
    const handleDeleteOrder = (id) => {
      const proceed = window.confirm("Are you sure, you want to delete?");
      if (proceed) {
        const url = `http://localhost:5000/order/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              alert("deleted successfully");
              const remainingOrders = allOrder.filter(
                (order) => order._id !== id
              );
              setAllOrder(remainingOrders);
            }
          });
      }
    };
  
    const handleUpdateUser = (e, id) => {
      const specific_value = allOrder.find((element) => element._id === id);
      console.log(specific_value);
      const url = `http://localhost:5000/order/${id}`;
      console.log(url);
      const updatedStatus = "Approved";
      const updated = {
        Address: specific_value.Address,
        costbook: specific_value.costbook,
        datebook: specific_value.datebook,
        productname: specific_value.productname,
        useremail: specific_value.useremail,
        phonenumber: specific_value.phonenumber,
        servicedescription: specific_value.servicedescription,
        status: updatedStatus,
        username: specific_value.username,
        _id: specific_value._id,
      };
      setOrder(updated);
  
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(order),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount > 0) {
            alert("Update Successful");
          }
        });
    };
    return (
        <div className="pt-4 pb-4">
      <Container>
        <div className="membership mb-3">
          <h2 style={{ textAlign: "center" }}>All Orders</h2>
        </div>
      </Container>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Person Name</th>
            <th>Email</th>
            <th>Product Name</th>
            <th>Cost</th>
            <th>Date</th>
            <th>Description</th>
            <th>Address</th>
            <th>Order Status</th>
            <th>Update Status</th>
            <th>Delete Order</th>
          </tr>
        </thead>
        <tbody>
          {allOrder &&
            allOrder.map((item, i) => (
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
                  <button onClick={(e) => handleUpdateUser(e, item._id)}>
                    Update
                  </button>
                </td>
                <td>
                  <button onClick={() => handleDeleteOrder(item._id)}>X</button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
    );
};

export default ManageAllOrder;