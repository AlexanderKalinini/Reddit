import { meReduser, MeState } from "./src/store/requestUserData/reducer";
import {
  ME_REQUEST,
  ME_REQUEST_SUCCESS,
  ME_REQUEST_ERROR,
  MeRequestAction,
  MeRequestSuccessAction,
  MeRequestErrorAction,
} from "./src/store/requestUserData/actions";
import { Reducer } from "redux";
import { TTokenAction, SET_TOKEN } from "./src/store/saveToken/actions";
import {
  UpdateCommentAction,
  UPDATE_COMMENT,
} from "./src/store/updateComment/actions";
import {
  POSTS_REQUEST,
  POSTS_REQUEST_ERROR,
  POSTS_REQUEST_SUCCESS,
  TPostsRequestAction,
  TPostsRequestErrorAction,
  TPostsRequestSuccessAction,
} from "./src/store/requestPosts/actions";
import { postsReduser, TPostsState } from "./src/store/requestPosts/reducer";

export type RootState = {
  commentText: string;
  token: string;
  me: MeState;
  posts: TPostsState;
};

const initialState: RootState = {
  commentText: "",
  token: "",
  me: { loading: false, error: "", data: { name: "", iconImg: "" } },
  posts: { loading: false, error: "", data: { childrens: [] } },
};

type Actions =
  | UpdateCommentAction
  | MeRequestAction
  | MeRequestSuccessAction
  | MeRequestErrorAction
  | TTokenAction
  | TPostsRequestErrorAction
  | TPostsRequestSuccessAction
  | TPostsRequestAction;

export const rootReducer: Reducer<RootState, Actions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case UPDATE_COMMENT:
      return {
        ...state,
        commentText: action.text,
      };
    case SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    case ME_REQUEST:
    case ME_REQUEST_SUCCESS:
    case ME_REQUEST_ERROR:
      return {
        ...state,
        me: meReduser(state.me, action),
      };
    case POSTS_REQUEST:
    case POSTS_REQUEST_SUCCESS:
    case POSTS_REQUEST_ERROR:
      return {
        ...state,
        posts: postsReduser(state.posts, action),
      };
    default:
      return state;
  }
};
