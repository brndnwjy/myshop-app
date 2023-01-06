/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "../../../components/module/navbar";
import { getDetail } from "../../../redux/actions/product.action";
import styles from "./detail.module.css";

const Detail = () => {
  const dispatch = useDispatch();

  const { id } = useParams();

  const { detail } = useSelector((state) => state.product);

  const token = localStorage.getItem("token");
  const uid = localStorage.getItem("uid");

  const [form, setForm] = useState({
    uid: uid,
    title: detail?.title,
    price: parseInt(detail?.price),
    quantity: 1,
    description: detail?.description,
  });

  let IDR = new Intl.NumberFormat("en-ID", {
    style: "currency",
    currency: "IDR",
  });

  const fetchAPI = () => {
    dispatch(getDetail(id, token));
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
        <p>{detail?.title}</p>
        <p>{detail?.description}</p>
        <p>{detail?.stock}</p>
        <p>{IDR.format(detail?.price)}</p>
        <input
          type="number"
          value={form.quantity}
          min={1}
          max={detail?.stock}
          onChange={(e) => setForm({ ...form, quantity: e.target.value })}
        />
        <button onClick={handleAddCart}>Buy?</button>
      </main>
    </Fragment>
  );
};

export default Detail;
