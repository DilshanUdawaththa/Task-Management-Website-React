import { combineEpics, ofType } from "redux-observable";
import { mergeMap, map, catchError, takeUntil } from "rxjs/operators";
import { from } from "rxjs";
import axios from "axios";
import {
  registerUserFailed,
  registerUserSuccess,
  LOGIN_USER_CANCEL,
  REGISTER_USER,
  LOGIN_USER,
  REGISTER_USER_CANCEL,
  loginUserSuccess,
  loginUserFailed,
  userAccessToken,
  ACCESS_TOKEN,
} from "../actions/authActions";

const generateuserToken = async (response) => {
  if (await response?.data) {
    let token = localStorage.getItem("token");

    if (token === null) {
      localStorage.setItem("token", "");
    }
  
    if ((await response?.status) === 200) {
      console.log(response);
      await localStorage.setItem("token", response.data);
    }
  
    return response;
  }
};

const registerUserEpic = (action$, state$) =>
  action$.pipe(
    ofType(REGISTER_USER),
    mergeMap((action) =>
      from(
        axios.post("http://localhost:5000/api/signup", action.payload.values)
      ).pipe(
        map((response) => registerUserSuccess(response)),
        // catchError((error) => console.log(error.response.data)),
        catchError((error) => registerUserFailed(error.response.data)),
        // catchError((error) => registerUserFailed(error.response)),
        takeUntil(action$.pipe(ofType(REGISTER_USER_CANCEL)))
      )
    )
  );

const loginUserEpic = (action$) =>
  action$.pipe(
    ofType(LOGIN_USER),
    mergeMap((action) =>
      from(
        axios.post("http://localhost:5000/api/signin", action.payload.values)
      ).pipe(
        map((response) => userAccessToken(response)),
        catchError((error) => loginUserFailed(error.response.data)),
        takeUntil(action$.pipe(ofType(LOGIN_USER_CANCEL)))
      )
    )
  );

const generateUserCookie = (action$) =>
  action$.pipe(
    ofType(ACCESS_TOKEN),
    mergeMap((action) =>
      from(generateuserToken(action.payload.values)).pipe(
        map((response) => loginUserSuccess(response)),
        catchError((error) => loginUserFailed(error)),
        takeUntil(action$.pipe(ofType(LOGIN_USER_CANCEL)))
      )
    )
  );

export default combineEpics(
  registerUserEpic,
  loginUserEpic,
  generateUserCookie
);
