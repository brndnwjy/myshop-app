/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import axios from "axios";
import { getCart } from "../../redux/actions/cart.action";

import thankyou from "../../assets/thankyou-banner.png";

import styles from "./thankyou.module.css";

const ThankYouPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const uid = localStorage.getItem("uid");
  const token = localStorage.getItem("token");

  const { cart } = useSelector((state) => state.cart);

  const fetchAPI = () => {
    dispatch(getCart(uid, token));
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  const handleHistory = () => {
    cart?.map((item) => {
      return (
        item.status === 0 &&
        axios
          .post(`${process.env.REACT_APP_API_URL}/payment/history`, {
            uid,
            cid: item.id,
          })
          .then((res) => console.log(res))
          .catch((err) => console.log(err))
      );
    });
  };

  useEffect(() => {
    handleHistory();
  }, []);

  return (
    <main className={styles.main}>
      <img src={thankyou} alt={"thank you banner"} />
      <h1>Thank you for your purchase!</h1>
      <div>
        <button onClick={() => navigate("/history")}>See your history</button>
        <button onClick={() => navigate("/product")}>Buy another product</button>
      </div>
    </main>
  );
};

export default ThankYouPage;
