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

export type RootState = {
  commentText: string;
  token: string;
  me: MeState;
};

const initialState: RootState = {
  commentText: "",
  token: "",
  me: { loading: false, error: "", data: { name: "", iconImg: "" } },
};

type MeActions =
  | UpdateCommentAction
  | MeRequestAction
  | MeRequestSuccessAction
  | MeRequestErrorAction
  | TTokenAction;

export const rootReducer: Reducer<RootState, MeActions> = (
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

    default:
      return state;
  }
};
