/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/module/navbar";
import { getCart } from "../../redux/actions/cart.action";

import styles from "./profile.module.css";

const Profile = () => {
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

  return (
    <Fragment>
      <Navbar />
      <main className={styles.main}>
        <h1>Profile Page</h1>
      </main>
      <div>
        {cart?.map((item) => (item.status !== 0 ? <li>{item.title}</li> : ""))}
      </div>
    </Fragment>
  );
};

export default Profile;
