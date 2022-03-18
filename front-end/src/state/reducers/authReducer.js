import jwtDecode from "jwt-decode";

import {
  GET_USER_SUCCESS,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILED,
  USER_LOGOUT,
  LOGIN_USER_FAILED,
} from "../actions/authActions";

const initialState = {
  isLoading: false,
  token: undefined,
  user: "",
  signInError: "",
  signUpError: "",
  signUpMessage: "",
  name: null,
  email: null,
  _id: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        isLoading: true,
      };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        signUpMessage: "User created successfully!"
      };
    case REGISTER_USER_FAILED:
      // console.log("from reducer",action.payload);
      return {
        ...state,
        // signUpError: action.payload.values,
        signUpMessage:action.payload.values,
      };
    case LOGIN_USER:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        token: action.payload.values.data,
        error: action.payload.values.data.error,
        message: action.payload.values.data.message,
      };
    case LOGIN_USER_FAILED:
      // console.log("from reducer",action.payload);
      return {
        ...state,
        signInError: action.payload.values,
      };

    case GET_USER_SUCCESS:
      const user = jwtDecode(localStorage.getItem("token"));
      return {
        ...state,
        token: localStorage.getItem("token"),
        name: user.name,
        email: user.email,
        _id: user._id,
      };

    case USER_LOGOUT:
      return {
        isLoading: false,
        token: undefined,
        user: undefined,
        name: undefined,
        email: undefined,
        _id: undefined,
        signUpMessage:undefined
      };
    default:
      break;
  }
};

export default authReducer;
