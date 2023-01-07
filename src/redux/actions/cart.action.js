import axios from "axios";
import swal from "sweetalert";
import {
  GET_CART_PENDING,
  GET_CART_SUCCESS,
  GET_CART_ERROR,
  INSERT_CART_PENDING,
  INSERT_CART_SUCCESS,
  INSERT_CART_ERROR,
  REMOVE_CART_ERROR,
  REMOVE_CART_PENDING,
  REMOVE_CART_SUCCESS,
} from "../types";

export const getCart = (uid, token) => async (dispatch) => {
  try {
    dispatch({ type: GET_CART_PENDING });

    const result = await axios.get(
      `${process.env.REACT_APP_API_URL}/cart/${uid}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    console.log(result);

    const { msg } = result.data;
    const { cart } = result.data;

    console.log(msg);
    dispatch({ type: GET_CART_SUCCESS, payload: cart });
  } catch (err) {
    const errorCode = err.code;
    const errorMessage = err.message;
    console.log(errorCode, errorMessage);

    swal({
      title: "Request Error",
      text: `Please try again in a few minutes`,
      icon: "error",
    });

    dispatch({ type: GET_CART_ERROR });
  }
};

export const insertCart = (form, token) => async (dispatch) => {
  try {
    dispatch({ type: INSERT_CART_PENDING });
    await axios.post(`${process.env.REACT_APP_API_URL}/cart`, form, {
      headers: { Authorization: `Bearer ${token}` },
    });

    swal({
      title: "Added to cart",
      text: `Product successfully added to cart`,
      timer: 1000,
      icon: "success",
    });
    dispatch({ type: INSERT_CART_SUCCESS });
  } catch (err) {
    const errorCode = err.code;
    const errorMessage = err.message;
    console.log(errorCode, errorMessage);

    swal({
      title: "Request Error",
      text: `Please try again in a few minutes`,
      icon: "error",
    });

    dispatch({ type: INSERT_CART_ERROR });
  }
};

export const removeCart = (id, uid, token) => async (dispatch) => {
  try {
    dispatch({ type: REMOVE_CART_PENDING });

    await swal({
      title: "Remove Item",
      text: `Are you sure want to remove this item?`,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (confirm) => {
      if (confirm) {
        await axios.delete(`${process.env.REACT_APP_API_URL}/cart/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        swal({
          title: "Item removed",
          text: `Item successfully removed from your card`,
          icon: "success",
          timer: 1800,
          buttons: false,
        });
      }
    });

    const result = await axios.get(
      `${process.env.REACT_APP_API_URL}/cart/${uid}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    const { msg } = result.data;
    const { cart } = result.data;

    console.log(msg);
    dispatch({ type: REMOVE_CART_SUCCESS, payload: cart });
  } catch (err) {
    const errorCode = err.code;
    const errorMessage = err.message;
    console.log(errorCode, errorMessage);

    swal({
      title: "Request Error",
      text: `Please try again in a few minutes`,
      icon: "error",
    });

    dispatch({ type: REMOVE_CART_ERROR });
  }
};
