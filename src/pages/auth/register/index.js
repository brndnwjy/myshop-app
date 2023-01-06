import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  loginWithGoogle,
  registerWithEmail,
} from "../../../redux/actions/auth.action";

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
    <main>
      <main>
        <h1>Register Page</h1>
        <button type="button" onClick={() => handleGoogleLogin()} disabled={isLoading}>
          {isLoading ? "Logging In" : "Google"}
        </button>
        <hr />
        <input
          name="username"
          type="text"
          placeholder="username"
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          value={form.username}
        />
        <input
          name="email"
          type="email"
          placeholder="email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          value={form.email}
        />
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
        >
          {isLoading ? "Registering" : "Register"}
        </button>
      </main>
    </main>
  );
};

export default Register;
