import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../../components/module/navbar";
import styles from "./detail.module.css";

const Detail = () => {
  const { id } = useParams();

  const token = localStorage.getItem("token");
  const uid = localStorage.getItem("uid");

  const [product, setProduct] = useState({});

  const [form, setForm] = useState({
    uid: "",
    title: "",
    price: 0,
    quantity: 1,
    description: "",
  });

  let IDR = new Intl.NumberFormat("en-ID", {
    style: "currency",
    currency: "IDR",
  });

  const fetchAPI = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/product/${id}`).then((res) => {
      setProduct(res.data.product);
      setForm({
        ...form,
        uid,
        title: res.data.product.title,
        price: parseInt(res.data.product.price),
        quantity: res.data.product.quantity,
        description: res.data.product.description,
      });
    });
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  const handleAddCart = () => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/cart`, form, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Fragment>
      <Navbar />
      <main className={styles.main}>
        <h1>Product Detail Page : {id}</h1>
        <p>{product?.title}</p>
        <p>{product?.description}</p>
        <p>{product?.stock}</p>
        <p>{IDR.format(product?.price)}</p>
        <input
          type="number"
          value={form.quantity}
          min={1}
          max={product.stock}
          onChange={(e) => setForm({ ...form, quantity: e.target.value })}
        />
        <button onClick={handleAddCart}>Buy?</button>
      </main>
    </Fragment>
  );
};

export default Detail;
