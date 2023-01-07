/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "../../../components/module/navbar";
import { insertCart } from "../../../redux/actions/cart.action";
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
    photo: detail?.photo,
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

  const handleDecr = () => {
    setForm({
      ...form,
      quantity: form.quantity - 1,
    });
  };

  const handleIncr = () => {
    setForm({
      ...form,
      quantity: form.quantity + 1,
    });
  };

  const handleAddCart = () => {
    dispatch(insertCart(form, token));
  };

  return (
    <Fragment>
      <Navbar />
      <main className={styles.main}>
        <h2 className={styles.header}>Home / {detail?.title}</h2>

        <hr />

        <div className={styles.product}>
          <img src={detail?.photo} alt={detail?.title} />
          <div className={styles["product-detail"]}>
            <h1>{detail?.title}</h1>
            <h2>{IDR.format(detail?.price)}</h2>
            <p>{detail?.description}</p>
            <div className={styles["product-action"]}>
              <div>
                <button
                  className={styles.minus}
                  onClick={handleDecr}
                  disabled={form.quantity === 1}
                >
                  &#x2212;
                </button>
                <span>{form.quantity}</span>
                <button
                  className={styles.minus}
                  onClick={handleIncr}
                  disabled={form.quantity === detail?.stock}
                >
                  &#x002B;
                </button>
              </div>
              <span>(Stock : {detail?.stock})</span>
            </div>
            <button className={styles["cart-btn"]} onClick={handleAddCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default Detail;
