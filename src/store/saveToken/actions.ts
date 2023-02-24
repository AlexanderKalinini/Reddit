import { ActionCreator } from "redux";
import { Action, ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "../../../redux-store";
export const SET_TOKEN = "SET_TOKEN";

export type TTokenAction = {
  type: "SET_TOKEN";
  token: string;
};

export const actionToken: ActionCreator<TTokenAction> = (token) => ({
  type: SET_TOKEN,
  token,
});

export const saveToken =
  (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch) => {
    dispatch(actionToken(window.__token__));
  };
