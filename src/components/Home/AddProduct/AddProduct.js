import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddProduct.css'

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
    
        </div>
    );
};

export default AddProduct;