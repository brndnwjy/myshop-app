import {
  GET_PRODUCT_LIST_PENDING,
  GET_PRODUCT_LIST_SUCCESS,
  GET_PRODUCT_LIST_ERROR,
  GET_PRODUCT_DETAIL_PENDING,
  GET_PRODUCT_DETAIL_SUCCESS,
  GET_PRODUCT_DETAIL_ERROR,
} from "../types";

const initialState = {
  list: [],
  detail: {},
  isLoading: false,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT_LIST_PENDING:
      return {
        ...state,
        isLoading: true,
      };

    case GET_PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        list: action.payload,
        isLoading: false,
      };

    case GET_PRODUCT_LIST_ERROR:
      return {
        ...state,
        isLoading: false,
      };

    case GET_PRODUCT_DETAIL_PENDING:
      return {
        ...state,
        isLoading: true,
      };

    case GET_PRODUCT_DETAIL_SUCCESS:
      return {
        ...state,
        detail: action.payload,
        isLoading: false,
      };

    case GET_PRODUCT_DETAIL_ERROR:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default productReducer;
