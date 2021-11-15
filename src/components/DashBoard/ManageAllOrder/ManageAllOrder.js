import React, { useEffect, useState } from "react";
import './ManageAllOrder.css';
import { Container, Table} from "react-bootstrap";

const ManageAllOrder = () => {
    const [allOrder, setAllOrder] = useState("");
    console.log(allOrder);
    const [order, setOrder] = useState({});
    console.log(order);
  
    useEffect(() => {
      fetch("https://thawing-headland-26014.herokuapp.com/order")
        .then((response) => response.json())
        .then((data) => {
          setAllOrder(data);
        });
    }, []);

    // DELETE AN ORDER
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
      const url = `https://thawing-headland-26014.herokuapp.com/order/${id}`;
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
            alert("Update Successfully");
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

      <Table striped bordered hover className="border border-primary">
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
                  <button className="btn btn-success" onClick={(e) => handleUpdateUser(e, item._id)}>
                    UPDATE
                  </button>
                </td>
                <td>
                  <button className="btn btn-danger" onClick={() => handleDeleteOrder(item._id)}>DELETE</button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
    );
};

export default ManageAllOrder;