/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../../components/module/navbar";

import styles from "./list.module.css";
import { useNavigate } from "react-router";
import { getList } from "../../../redux/actions/product.action";

const List = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { list } = useSelector((state) => state.product);

  const fetchAPI = () => {
    dispatch(getList());
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <Fragment>
      <Navbar />
      <main className={styles.main}>
        <h1>Product Page</h1>

        <table className={styles.table}>
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Stock</th>
              <th scope="col">Price</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {list?.map((item, index) => (
              <tr key={index}>
                <td>{item.title}</td>
                <td>{item.stock}</td>
                <td>{item.price}</td>
                <td>
                  <button onClick={() => navigate(`/product/${item.id}`)}>
                    Buy?
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </Fragment>
  );
};

export default List;
