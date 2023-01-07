import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  loginWithEmail,
  loginWithGoogle,
} from "../../../redux/actions/auth.action";

// asset
import logo from "../../../assets/myshop-logo.png";
import google from "../../../assets/google.png";
import banner from "../../../assets/login-banner.png";

// style
import styles from "../auth.module.css";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading } = useSelector((state) => state.auth);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleEmailLogin = () => {
    dispatch(loginWithEmail(form, navigate));
  };

  const handleGoogleLogin = () => {
    dispatch(loginWithGoogle(navigate));
  };

  return (
    <main className={styles.main}>
      <img src={logo} alt={"Myshop logo"} />

      <div className={styles.content}>
        <section className={styles.banner}>
          <img src={banner} alt={"login banner"} />
          <h2>Belanja Murah Hanya di Myshop</h2>
          <p>Masuk dan dapatkan potongan harga terbaik di Myshop</p>
        </section>

        <section className={styles.card}>
          <div className={styles.header}>
            <h2>Masuk</h2>
            <Link to="/register">Daftar</Link>
          </div>

          <form className={styles.form}>
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="email"
              placeholder="email"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              value={form.email}
            />

            <label htmlFor="password">Password</label>
            <input
              name="password"
              type="password"
              placeholder="password"
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              value={form.password}
            />
            <button
              type="button"
              onClick={() => handleEmailLogin()}
              disabled={isLoading}
              className={
                isLoading
                  ? `${styles["login-btn"]} ${styles.muted}`
                  : styles["login-btn"]
              }
            >
              Log In
            </button>
          </form>

          <div className={styles.options}>
            <h6>
              <span>atau masuk dengan</span>
            </h6>
          </div>

          <button
            type="button"
            className={styles["google-btn"]}
            onClick={() => handleGoogleLogin()}
            disabled={isLoading}
          >
            <img src={google} alt={"Google icon"} width={18} />
            <span>Google</span>
          </button>
        </section>
      </div>
    </main>
  );
};

export default Login;
