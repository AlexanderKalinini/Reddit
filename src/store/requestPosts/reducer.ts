import { useState } from "react";
import { useContext } from "react";
import { ThunkAction } from "redux-thunk";
import { Reducer, Action } from "redux";
import {
  POSTS_REQUEST_SUCCESS,
  IPostsData,
  postsRequest,
  postsRequestError,
  postsRequestSuccess,
} from "./actions";
import { RootState } from "../../../redux-store";
import axios from "axios";

import {
  TPostsRequestAction,
  TPostsRequestSuccessAction,
  TPostsRequestErrorAction,
  POSTS_REQUEST,
  POSTS_REQUEST_ERROR,
} from "./actions";

export type TPostsState = {
  loading: boolean;
  error: string;
  data: IPostsData;
};
type PostsActions =
  | TPostsRequestAction
  | TPostsRequestErrorAction
  | TPostsRequestSuccessAction;

export const postsReduser: Reducer<TPostsState, PostsActions> = (
  state,
  action
) => {
  switch (action.type) {
    case POSTS_REQUEST:
      return {
        ...state,
        loading: true,
      } as TPostsState;
    case POSTS_REQUEST_ERROR:
      return {
        ...state,
        error: action.error,
      } as TPostsState;
    case POSTS_REQUEST_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false,
      } as TPostsState;
    default:
      return state as TPostsState;
  }
};
let prevAfter = "";
let prevChildren: {}[] = [];
export const postsRequestAsync =
  (): ThunkAction<void, RootState, unknown, Action<string>> =>
  (dispatch, getState) => {
    dispatch(postsRequest());
    axios
      .get("https://oauth.reddit.com/rising/", {
        headers: {
          Authorization: `bearer ${getState().token}`,
        },
        params: {
          limit: 10,
          after: prevAfter,
        },
      })
      .then((resp) => {
        const {
          data: {
            data: { after, children },
          },
        } = resp;

        dispatch(
          postsRequestSuccess({
            childrens: [...prevChildren, ...children],
          })
        );

        if (after !== prevAfter) {
          prevChildren.push(...children);
        }
        prevAfter = after;
      })
      .catch((error) => {
        console.log(error);
        dispatch(postsRequestError(String(error)));
      });
  };
