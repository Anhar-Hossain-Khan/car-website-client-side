import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddProduct.css'
import React, {  useState, useEffect } from "react";
import {
  Form,
  Button,
  ListGroup,
  Container,
  Row,
  Col,
  Image,
  Table,
} from "react-bootstrap";
import "./AddProduct.css";
import { Link } from "react-router-dom";

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://thawing-headland-26014.herokuapp.com/products', data)
        .then(res => {
            if(res.data.insertedId){
                alert('Product Added Successfully');
                reset();
            }
        })
    }


  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://thawing-headland-26014.herokuapp.com/products")
      .then((response) => response.json())
      .then((data) => {
        setServices(data);
      });
  }, []);

  // DELETE AN Order
  const handleDeleteProduct = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      const url = `https://thawing-headland-26014.herokuapp.com/product/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remainingOrders = services.filter(
              (order) => order._id !== id
            );
            setServices(remainingOrders);
          }
        });
    }
  };

    return (
        <div className="add-product ">
            <h1>Add Your Product</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
      <input {...register("price")} placeholder="Price" />
      <textarea {...register("description")} placeholder="Description" />
      <input {...register("img")} placeholder="Img Url"/>
      <input type="submit" className="btn btn-primary" />
    </form>

    <Table striped bordered hover responsive className="border border-primary mt-4">
        <thead>
          <tr>
            <th>Image</th>
            <th>Product Name</th>
            <th>Price</th>
            <th> Description</th>
            <th>Delete Product</th>
          </tr>
        </thead>
        <tbody>
          {services &&
            services.map((item, i) => (
              <tr>
                <td>{item.img}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.description}</td>
                <td>
                  <button className="btn btn-danger" onClick={() => handleDeleteProduct(item._id)}>
                    DELETE
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    
    
        </div>
    );
};

export default AddProduct;