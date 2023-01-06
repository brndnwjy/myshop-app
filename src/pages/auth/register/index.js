import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import app from "../../../firebase";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import styles from "../auth.module.css"

const Register = () => {
  const navigate = useNavigate();
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [user, setUser] = useState({});
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleEmailSignup = () => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/user/firebase-register`, form)
      .then((res) => {
        alert(res.data.msg);
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        alert(err.message);
      });
  };

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        const credential = GoogleAuthProvider.credentialFromResult(res);
        const token = credential.accessToken;
        setUser(res.user);
        localStorage.setItem("token", token);
        alert(`Welcome, ${user.displayName}`);
        navigate("/product");
      })
      .catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;
        const email = err.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(err);
        console.log(errorCode, errorMessage, email, credential);
        alert(errorMessage);
      });
  };

  return (
    <main>
      <main>
        <h1>Register Page</h1>
        <button onClick={() => handleGoogleLogin()}>Google</button>
        <hr />
        <input
          name= "username"
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
        <button onClick={() => handleEmailSignup()}>Sign In</button>
      </main>
    </main>
  );
};

export default Register;
