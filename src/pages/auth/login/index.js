import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import app from "../../../firebase";
import {
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
} from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleEmailLogin = () => {
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((res) => {
        const user = {
          uid: res.user.uid,
          email: res.user.email,
          name: res.user.displayName,
        };
        const token = res.user.accessToken;
        localStorage.setItem("token", token);
        alert(`Welcome, ${user.name}`);
        navigate("/product");
      })
      .catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;
        console.log(errorCode, errorMessage);
        alert(errorMessage);
      });
  };

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        const credential = GoogleAuthProvider.credentialFromResult(res);
        const token = credential.accessToken;
        console.log(token);
        const user = {
          id: res.user.uid,
          email: res.user.email,
          name: res.user.displayName,
        };

        localStorage.setItem("token", token);
        alert(`Welcome, ${user.name}`);
        navigate("/product");
      })
      .catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;
        const credential = GoogleAuthProvider.credentialFromError(err);
        console.log(errorCode, errorMessage, credential);
        alert(errorMessage);
      });
  };

  return (
    <main>
      <h1>Login Page</h1>

      <button onClick={() => handleGoogleLogin()}>Google</button>
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
      <button onClick={() => handleEmailLogin()}>Log In</button>
    </main>
  );
};

export default Login;
