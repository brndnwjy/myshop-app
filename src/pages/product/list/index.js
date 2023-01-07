/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../../components/navbar";

import styles from "./list.module.css";
import { useNavigate } from "react-router";
import { getDetail, getList } from "../../../redux/actions/product.action";

const List = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  // get data on load
  const fetchAPI = () => {
    dispatch(getList());
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  const { list } = useSelector((state) => state.product);

  // feature
  const selectProduct = async (id) => {
    await dispatch(getDetail(id, token));
    navigate(`/product/${id}`);
  };

  // price formatting
  let IDR = new Intl.NumberFormat("en-ID", {
    style: "currency",
    currency: "IDR",
  });

  return (
    <Fragment>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.header}>
          <h2>Product List</h2>

          {/* <div className={styles.searchbar}>
            <input
              type="text"
              placeholder="Search product..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button type="button" className={styles["search-btn"]}>
              Search
            </button>
          </div> */}
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
                <td>{item.stock < 1 ? "Out of stock" : `${item.stock} pcs`}</td>
                <td>{IDR.format(item.price)}</td>
                <td>
                  <button
                    type="button"
                    className={styles["detail-btn"]}
                    onClick={() => selectProduct(item.id)}
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
