import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  loginWithEmail,
  loginWithGoogle,
} from "../../../redux/actions/auth.action";

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
    <main>
      <h1>Login Page</h1>

      <button
        type="button"
        onClick={() => handleGoogleLogin()}
        disabled={isLoading}
      >
        {isLoading ? "Logging In" : "Google"}
      </button>
      <hr />
      <input
        type="email"
        placeholder="email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        value={form.email}
      />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        value={form.password}
      />
      <button
        type="button"
        onClick={() => handleEmailLogin()}
        disabled={isLoading}
      >
        {isLoading ? "Logging In" : "Log In"}
      </button>
    </main>
  );
};

export default Login;
