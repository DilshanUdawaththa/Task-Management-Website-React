export const REGISTER_USER = "REGISTER_USER";
export const REGISTER_USER_FAILED = "REGISTER_USER_FAILED";
export const REGISTER_USER_CANCEL = "REGISTER_USER_CANCEL";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";

export const LOGIN_USER = "LOGIN_USER";
export const LOGIN_USER_FAILED = "LOGIN_USER_FAILED";
export const LOGIN_USER_CANCEL = "LOGIN_USER_CANCEL";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";

export const GET_LOGGED_USER = "GET_LOGGED_USER";
export const GET_LOGGED_USER_FAILED = "GET_LOGGED_USER_FAILED";
export const GET_LOGGED_USER_CANCEL = "GET_LOGGED_USER_CANCEL";
export const GET_LOGGED_USER_SUCCESS = "GET_LOGGED_USER_SUCCESS";

export const GET_USER_DATA = "GET_USER_DATA";
export const GET_USER_FAILED = "GET_USER_FAILED";
export const GET_USER_CANCEL = "GET_USER_CANCEL";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";

export const USER_LOGOUT = "USER_LOGOUT";
export const USER_LOGOUT_SUCCESS = "USER_LOGOUT_SUCCESS";

export const ACCESS_TOKEN = "ACCESS_TOKEN";

// register user
export const registerUser = (values) => {
  return {
    type: REGISTER_USER,
    payload: { values },
  };
};

export const registerUserSuccess = (values) => {
  return {
    type: REGISTER_USER_SUCCESS,
    payload: { values },
  };
};

export const registerUserFailed = async (values) => {
  // console.log("from action",values);
  return {
    type: REGISTER_USER_FAILED,
    payload: { values },
  };
};

// login user
export const loginUser = (values) => {
  return {
    type: LOGIN_USER,
    payload: { values },
  };
};

export const loginUserSuccess = (values) => {
  return {
    type: LOGIN_USER_SUCCESS,
    payload: { values },
  };
};

export const loginUserFailed = async (values) => {
//   console.log("from action",values);
  return {
    type: LOGIN_USER_FAILED,
    payload: { values },
  };
};

export const loginUserCancel = () => {
  return {
    type: LOGIN_USER_CANCEL,
  };
};

// user access token store in cookie
export const userAccessToken = (values) => {
  return {
    type: ACCESS_TOKEN,
    payload: { values },
  };
};

// get user data
export const getUserData =  () => {
  return {
    type: GET_USER_DATA,
  };
};

export const getUserDataSuccess =  () => {
  return {
    type: GET_USER_SUCCESS,
  };
};

// logout
export const logout = () => {
  return {
    type: USER_LOGOUT,
  };
};
