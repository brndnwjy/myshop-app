import {
  GET_CART_PENDING,
  GET_CART_SUCCESS,
  GET_CART_ERROR,
  INSERT_CART_PENDING,
  INSERT_CART_SUCCESS,
  INSERT_CART_ERROR,
  REMOVE_CART_PENDING,
  REMOVE_CART_SUCCESS,
  REMOVE_CART_ERROR,
} from "../types";

const initialState = {
  cart: [],
  isLoading: false,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CART_PENDING:
      return {
        ...state,
        isLoading: true,
      };

    case GET_CART_SUCCESS:
      return {
        ...state,
        cart: action.payload,
        isLoading: false,
      };

    case GET_CART_ERROR:
      return {
        ...state,
        isLoading: false,
      };

    case INSERT_CART_PENDING:
      return {
        ...state,
        isLoading: true,
      };

    case INSERT_CART_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };

    case REMOVE_CART_PENDING:
      return {
        ...state,
        isLoading: true,
      };

    case REMOVE_CART_SUCCESS:
      return {
        ...state,
        cart: action.payload,
        isLoading: false,
      };

    case REMOVE_CART_ERROR:
      return {
        ...state,
        isLoading: false,
      };

    case INSERT_CART_ERROR:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default cartReducer;
