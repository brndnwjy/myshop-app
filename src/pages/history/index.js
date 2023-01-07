/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/navbar";
import ProductCard from "../../components/productCard";
import { getCart } from "../../redux/actions/cart.action";

import styles from "./history.module.css";

const History = () => {
  const dispatch = useDispatch();

  const { cart } = useSelector((state) => state.cart);

  const uid = localStorage.getItem("uid");
  const token = localStorage.getItem("token");

  const fetchAPI = () => {
    dispatch(getCart(uid, token));
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  let IDR = new Intl.NumberFormat("en-ID", {
    style: "currency",
    currency: "IDR",
  });

  return (
    <Fragment>
      <Navbar />
      <main className={styles.main}>
        <h2 className={styles.header}>Purchase history</h2>
        <hr />
        <div className={styles.history}>
          {cart?.map(
            (item) =>
              item.status !== 0 && (
                <ProductCard
                  photo={item.photo}
                  title={item.title}
                  total={IDR.format(item.price * item.quantity)}
                  quantity={item.quantity}
                  date={item.created_at}
                />
              )
          )}
        </div>
      </main>
    </Fragment>
  );
};

export default History;
