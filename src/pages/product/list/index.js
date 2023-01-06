import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../../components/module/navbar";

import styles from "./list.module.css";
import { useNavigate } from "react-router";

const List = () => {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);

  const fetchAPI = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/product`).then((res) => {
      setProducts(res.data.products);
    });
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
            {products?.map((item, index) => (
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
