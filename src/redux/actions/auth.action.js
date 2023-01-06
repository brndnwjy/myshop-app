import axios from "axios";
import swal from "sweetalert";
import app from "../../firebase";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import {
  EMAIL_REGISTER_PENDING,
  EMAIL_REGISTER_SUCCESS,
  EMAIL_REGISTER_ERROR,
  EMAIL_LOGIN_PENDING,
  EMAIL_LOGIN_SUCCESS,
  EMAIL_LOGIN_ERROR,
  GOOGLE_LOGIN_PENDING,
  GOOGLE_LOGIN_SUCCESS,
  GOOGLE_LOGIN_ERROR,
} from "../types";

const auth = getAuth(app);

export const registerWithEmail = (form, navigate) => async (dispatch) => {
  try {
    if (!form.username || !form.email || !form.password) {
      return swal({
        title: "Register failed",
        text: `Please fill all your data`,
        icon: "warning",
      });
    }

    if (form.password.length < 6) {
      return swal({
        title: "Register failed",
        text: `Your password must at least contain 6 character`,
        icon: "warning",
      });
    }

    dispatch({ type: EMAIL_REGISTER_PENDING });

    await axios.post(
      `${process.env.REACT_APP_API_URL}/user/firebase-register`,
      form
    );

    swal({
      title: "Register success",
      text: `Your account successfully registered`,
      icon: "success",
    });

    dispatch({ type: EMAIL_REGISTER_SUCCESS });
    navigate("/login");
  } catch (err) {
    const errorCode = err.code;
    const errorMessage = err.message;
    console.log(errorCode, errorMessage);

    swal({
      title: "Register failed",
      text: `Make sure your data is correct!`,
      icon: "warning",
    });

    dispatch({ type: EMAIL_REGISTER_ERROR });
  }
};

export const loginWithEmail = (form, navigate) => async (dispatch) => {
  try {
    if (!form.email || !form.password) {
      return swal({
        title: "Login failed",
        text: `Please fill all your data`,
        icon: "warning",
      });
    }

    dispatch({ type: EMAIL_LOGIN_PENDING });

    const result = await signInWithEmailAndPassword(
      auth,
      form.email,
      form.password
    );

    const user = {
      uid: result.user.uid,
      email: result.user.email,
      name: result.user.displayName,
    };
    const token = result.user.accessToken;

    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));

    swal({
      title: "Login success",
      text: `Welcome, ${user.name}`,
      icon: "warning",
    });

    dispatch({ type: EMAIL_LOGIN_SUCCESS, payload: result.user });

    navigate("/product");
  } catch (err) {
    const errorCode = err.code;
    const errorMessage = err.message;
    console.log(errorCode, errorMessage);

    swal({
      title: "Register failed",
      text: `Make sure your data is correct!`,
      icon: "warning",
    });

    dispatch({ type: EMAIL_LOGIN_ERROR });
  }
};

export const loginWithGoogle = (navigate) => async (dispatch) => {
  try {
    dispatch({ type: GOOGLE_LOGIN_PENDING });

    const provider = new GoogleAuthProvider();

    const result = await signInWithPopup(auth, provider);

    const user = {
      uid: result.user.uid,
      email: result.user.email,
      name: result.user.displayName,
    };

    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));

    swal({
      title: "Login success",
      text: `Welcome, ${user.name}`,
      icon: "warning",
    });

    dispatch({ type: GOOGLE_LOGIN_SUCCESS, paylod: result.user });
    navigate("/product");
  } catch (err) {
    const errorCode = err.code;
    const errorMessage = err.message;
    const credential = GoogleAuthProvider.credentialFromError(err);
    console.log(errorCode, errorMessage, credential);

    swal({
      title: "Register failed",
      text: `Make sure your data is correct!`,
      icon: "warning",
    });

    dispatch({ type: GOOGLE_LOGIN_ERROR });
  }
};
