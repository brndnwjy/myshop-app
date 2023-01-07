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

  let IDR = new Intl.NumberFormat("en-ID", {
    style: "currency",
    currency: "IDR",
  });

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
        <div className={styles.header}>
          <h2>Product List</h2>

          <div className={styles.searchbar}>
            <input type="text" placeholder="Search product..." />
            <button className={styles["search-btn"]}>Search</button>
          </div>
        </div>

        <hr />

        <table className={styles.table} width={"100%"}>
          <thead>
            <tr>
              <th scope="col" width={"40%"}>
                Title
              </th>
              <th scope="col" width={"20%"}>
                Stock
              </th>
              <th scope="col" width={"20%"}>
                Price
              </th>
              <th scope="col" width={"20%"}>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {list?.map((item, index) => (
              <tr key={index}>
                <td className={styles.title}>
                  <img src={item?.photo} alt={item.title} />
                  <span>{item.title}</span>
                </td>
                <td>{item.stock} pcs</td>
                <td>{IDR.format(item.price)}</td>
                <td>
                  <button
                    type="button"
                    className={styles["detail-btn"]}
                    onClick={() => navigate(`/product/${item.id}`)}
                  >
                    See Detail
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
