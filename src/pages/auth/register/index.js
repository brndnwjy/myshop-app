import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  loginWithGoogle,
  registerWithEmail,
} from "../../../redux/actions/auth.action";

// asset
import logo from "../../../assets/myshop-logo.png";
import google from "../../../assets/google.png";
import banner from "../../../assets/register-banner.png";

// style
import styles from "../auth.module.css";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoading = useSelector((state) => state.auth.isLoading);

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleEmailSignup = () => {
    dispatch(registerWithEmail(form, navigate));
  };

  const handleGoogleLogin = () => {
    dispatch(loginWithGoogle(navigate));
  };

  return (
    <main className={styles.main}>
      <img src={logo} alt={"Myshop logo"} />

      <div className={styles.content}>
        <section className={styles.banner}>
          <img src={banner} alt={"register banner"} />
          <h2>Belanja Murah Hanya di Myshop</h2>
          <p>Gabung dan rasakan kemudahan bertransaksi di Myshop</p>
        </section>

        <section className={styles.card}>
          <h2>Daftar Sekarang</h2>
          <p>
            Sudah punya akun Myshop? <Link to="/login">Masuk</Link>
          </p>
          <form className={styles.form}>
            <label htmlFor="username">Username</label>
            <input
              name="username"
              type="text"
              placeholder="username"
              onChange={(e) => setForm({ ...form, username: e.target.value })}
              value={form.username}
            />

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
              onClick={() => handleEmailSignup()}
              disabled={isLoading}
              className={
                isLoading
                  ? `${styles["register-btn"]} ${styles.muted}`
                  : styles["register-btn"]
              }
            >
              Register
            </button>
          </form>

          <div className={styles.options}>
            <h6>
              <span>atau masuk dengan</span>
            </h6>
          </div>

          <button
            type="button"
            onClick={() => handleGoogleLogin()}
            disabled={isLoading}
            className={styles["google-btn"]}
          >
            <img src={google} alt={"Google icon"} width={18} />
            <span>Google</span>
          </button>
        </section>
      </div>
    </main>
  );
};

export default Register;
