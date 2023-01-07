/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
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
      sum += item.price * item.quantity;
    }
  }

  const handleCheckout = () => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/payment/checkout`, {data: cart})
      .then((res) => {
        if (res.data.url) {
          window.location.href = res.data.url;
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <Fragment>
      <Navbar />
      <main className={styles.main}>
        <h2 className={styles.header}>Cart</h2>

        <hr />

        <div className={styles.cart}>
          <div className={styles["cart-item"]}>
            {cart?.length > 0 ? (
              cart?.map((item) => (
                <div className={styles["item-detail"]}>
                  <img src={item.photo} alt={item.title} />
                  <div>
                    <h2>
                      {item.title} ({item.quantity})
                    </h2>
                    <h2>{IDR.format(item.price)}</h2>
                    <button
                      type="button"
                      className={styles["remove-btn"]}
                      onClick={() => removeItem(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <h2 className={styles["cart-empty"]}>
                Add some item to your cart to start shopping
              </h2>
            )}
          </div>

          <div className={styles.summary}>
            <h2 className={styles.header}>Shopping summary</h2>

            <hr />

            <div>
              {cart?.map((item) => (
                <div className={styles["sum-detail"]}>
                  <span>
                    {item.title} x {item.quantity}
                  </span>
                  <span>{IDR.format(item.quantity * item.price)}</span>
                </div>
              ))}
            </div>

            {cart !== null ? (
              <>
                <hr />

                <div className={styles["sum-total"]}>
                  <span>Total</span>
                  <span>{IDR.format(sum)}</span>
                </div>
              </>
            ) : (
              <h3 className={styles["cart-empty"]}>Cart empty</h3>
            )}

            <button
              type="button"
              className={
                cart?.length < 1
                  ? `${styles["checkout-btn"]} ${styles.muted}`
                  : styles["checkout-btn"]
              }
              onClick={() => handleCheckout()}
              disabled={cart?.length < 1}
            >
              Checkout
            </button>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default Cart;
