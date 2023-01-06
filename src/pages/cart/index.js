/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/module/navbar";
import { getCart, removeCart } from "../../redux/actions/cart.action";

import styles from "./cart.module.css";

const Cart = () => {
  const dispatch = useDispatch();

  const { cart } = useSelector((state) => state.cart);

  const token = localStorage.getItem("token");
  const uid = localStorage.getItem("uid");

  const fetchAPI = () => {
    dispatch(getCart(uid));
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  const removeItem = (id) => {
    dispatch(removeCart(id, uid, token));
  };

  let IDR = new Intl.NumberFormat("en-ID", {
    style: "currency",
    currency: "IDR",
  });

  let sum = 0;

  if (cart) {
    for (let item of cart) {
      sum += item.price;
    }
  }

  return (
    <Fragment>
      <Navbar />
      <main className={styles.main}>
        <h1>Cart Page</h1>
        <h3>Total : {IDR.format(sum)}</h3>
        <div>
          {cart?.map((item) => (
            <>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p>{item.quantity}</p>
              <p>{IDR.format(item.price)}</p>
              <p>{IDR.format(item.total)}</p>
              <button type="button" onClick={() => removeItem(item.id)}>
                cancel
              </button>
            </>
          ))}
        </div>
      </main>
    </Fragment>
  );
};

export default Cart;
