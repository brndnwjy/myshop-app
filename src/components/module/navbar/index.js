import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ClickAwayListener from "react-click-away-listener";
import { logout } from "../../../redux/actions/auth.action";

import styles from "./navbar.module.css";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [popup, setPopup] = useState(false);

  const handleLogout = () => {
    dispatch(logout(navigate));
  };

  return (
    <nav className={styles.navbar}>
      <h1 onClick={() => navigate("/product")}>Myshop</h1>

      <div className={styles.searchbar}>
        <input type="text" placeholder="Search product..." />
        <button className={styles['search-btn']}>Search</button>
      </div>

      <div className={styles['btn-group']}>
        <button className={styles['cart-btn']}>Cart</button>
        <button className={styles['profile-btn']} onClick={() => setPopup(true)}>Profile</button>

        {popup && (
          <ClickAwayListener onClickAway={() => setPopup(false)}>
            <div className={styles.popmenu}>
              <div
                onClick={() => {
                  navigate("/profile");
                }}
                className={styles.popitem}
              >
                <h6>Profile</h6>
              </div>

              <div onClick={handleLogout} className={styles.popitem}>
                <h6>Log Out</h6>
              </div>
            </div>
          </ClickAwayListener>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
