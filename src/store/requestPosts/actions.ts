import { ActionCreator } from "redux";

export const POSTS_REQUEST = "POSTS_REQUEST";

export type TPostsRequestAction = {
  type: "POSTS_REQUEST";
};

export const postsRequest: ActionCreator<TPostsRequestAction> = () => ({
  type: POSTS_REQUEST,
});

//------------------------------------------------------------------

export interface IPostsData {
  childrens: [];
}
export const POSTS_REQUEST_SUCCESS = "POSTS_REQUEST_SUCCESS";

export type TPostsRequestSuccessAction = {
  type: "POSTS_REQUEST_SUCCESS";
  data: IPostsData;
};

export const postsRequestSuccess: ActionCreator<TPostsRequestSuccessAction> = (
  data: IPostsData
) => ({
  type: POSTS_REQUEST_SUCCESS,
  data,
});

//-----------------------------------------------

export const POSTS_REQUEST_ERROR = "POSTS_REQUEST_ERROR";

export type TPostsRequestErrorAction = {
  type: "POSTS_REQUEST_ERROR";
  error: string;
};
export const postsRequestError: ActionCreator<TPostsRequestErrorAction> = (
  error: string
) => ({
  type: POSTS_REQUEST_ERROR,
  error,
});
