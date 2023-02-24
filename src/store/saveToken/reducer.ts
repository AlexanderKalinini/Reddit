import { Action, ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "../../../redux-store";
import { actionToken } from "./actions";

export const saveToken =
  (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch) => {
    dispatch(actionToken(window.__token__));
  };
