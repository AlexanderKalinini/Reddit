import { ThunkAction } from "redux-thunk";
import { Reducer, Action } from "redux";
import {
  ME_REQUEST_SUCCESS,
  IUserData,
  meRequest,
  meRequestError,
  meRequestSuccess,
} from "./actions";
import { RootState } from "../../../redux-store";
import axios from "axios";

import {
  MeRequestAction,
  MeRequestSuccessAction,
  MeRequestErrorAction,
  ME_REQUEST,
  ME_REQUEST_ERROR,
} from "./actions";

export type MeState = {
  loading: boolean;
  error: string;
  data: IUserData;
};
type MeActions =
  | MeRequestAction
  | MeRequestErrorAction
  | MeRequestSuccessAction;

export const meReduser: Reducer<MeState, MeActions> = (state, action) => {
  switch (action.type) {
    case ME_REQUEST:
      return {
        ...state,
        loading: true,
      } as MeState;
    case ME_REQUEST_ERROR:
      return {
        ...state,
        error: action.error,
      } as MeState;
    case ME_REQUEST_SUCCESS:
      return {
        ...state,
        data: action.data,
      } as MeState;
    default:
      return state as MeState;
  }
};

export const meRequestAsync =
  (): ThunkAction<void, RootState, unknown, Action<string>> =>
  (dispatch, getState) => {
    dispatch(meRequest());
    axios
      .get("https://oauth.reddit.com/api/v1/me.json", {
        headers: { Authorization: `bearer ${getState().token}` },
      })
      .then((resp) => {
        const userData = resp.data;
        dispatch(
          meRequestSuccess({
            name: userData.name,
            iconImg: userData.icon_img?.split("?")[0],
          })
        );
      })
      .catch((error) => {
        console.log(error);
        dispatch(meRequestError(String(error)));
      });
  };
