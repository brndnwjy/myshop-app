import axios from "axios";
import {
  GET_PRODUCT_DETAIL_ERROR,
  GET_PRODUCT_DETAIL_PENDING,
  GET_PRODUCT_DETAIL_SUCCESS,
  GET_PRODUCT_LIST_ERROR,
  GET_PRODUCT_LIST_PENDING,
  GET_PRODUCT_LIST_SUCCESS,
} from "../types";

export const getList = () => async (dispatch) => {
  try {
    dispatch({ type: GET_PRODUCT_LIST_PENDING });
    const result = await axios.get(`${process.env.REACT_APP_API_URL}/product`);

    const { msg } = result.data;
    const { products } = result.data;

    console.log(msg);
    dispatch({ type: GET_PRODUCT_LIST_SUCCESS, payload: products });
  } catch (err) {
    const errorCode = err.code;
    const errorMessage = err.message;
    console.log(errorCode, errorMessage);
    dispatch({ type: GET_PRODUCT_LIST_ERROR });
  }
};

export const getDetail = (id, form, token) => async (dispatch) => {
  try {
    dispatch({ type: GET_PRODUCT_DETAIL_PENDING });
    const result = await axios.get(
      `${process.env.REACT_APP_API_URL}/product/${id}`,
      form,
      { headers: { Authorization: `Bearer ${token}` } }
    );

    const { msg } = result.data;
    const { product } = result.data;

    console.log(msg);
    
    dispatch({ type: GET_PRODUCT_DETAIL_SUCCESS, payload: product });
  } catch (err) {
    const errorCode = err.code;
    const errorMessage = err.message;
    console.log(errorCode, errorMessage);
    dispatch({ type: GET_PRODUCT_DETAIL_ERROR });
  }
};
