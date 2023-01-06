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

const initialState = {
  user: [],
  isLoading: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case EMAIL_REGISTER_PENDING:
      return {
        ...state,
        isLoading: true,
      };

    case EMAIL_REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };

    case EMAIL_REGISTER_ERROR:
      return {
        ...state,
        isLoading: false,
      };

    case EMAIL_LOGIN_PENDING:
      return {
        ...state,
        isLoading: true,
      };

    case EMAIL_LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
      };

    case EMAIL_LOGIN_ERROR:
      return {
        ...state,
        isLoading: false,
      };

    case GOOGLE_LOGIN_PENDING:
      return {
        ...state,
        isLoading: true,
      };

    case GOOGLE_LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
      };

    case GOOGLE_LOGIN_ERROR:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default authReducer;
