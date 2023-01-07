import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ClickAwayListener from "react-click-away-listener";
import { logout } from "../../redux/actions/auth.action";

// asset
import logo from "../../assets/myshop-logo.png";
import cart from "../../assets/cart.png";
import user from "../../assets/user.png";

// style
import styles from "./navbar.module.css";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const { name } = JSON.parse(localStorage.getItem("user"));
  
  const [popup, setPopup] = useState(false);
  
  const handleLogout = () => {
    dispatch(logout(navigate));
  };


  return (
    <nav className={styles.navbar}>
      <img
        src={logo}
        alt={"Myshop logo"}
        onClick={() => navigate("/product")}
      />

      <div className={styles["btn-group"]}>
        <img src={cart} alt={"cart icon"} onClick={() => navigate("/cart")} />
        <div className={styles["user-options"]} onClick={() => setPopup(true)}>
          <img src={user} alt={"user icon"} />
          <h4>{name}</h4>
        </div>

        {popup && (
          <ClickAwayListener onClickAway={() => setPopup(false)}>
            <div className={styles.popmenu}>
              <div
                onClick={() => {
                  navigate("/history");
                }}
                className={styles.popitem}
              >
                <h6>History</h6>
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
