import React from "react";

import styles from "./productCard.module.css";

const ProductCard = ({ photo, title, quantity, total }) => {
  return (
    <div className={styles.card}>
      <img src={photo} alt={title} />
      <div>
        <h2>{title}</h2>
        <h2>{total}</h2>
        <small>Quantity : {quantity} pcs</small>
      </div>
    </div>
  );
};

export default ProductCard;
