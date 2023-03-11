import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { IPostData } from "./usePostData";
import { RootState } from "./../../redux-store";
import { useSelector } from "react-redux";
import { postsRequestAsync } from "../store/requestPosts/reducer";
import { IPostsData } from "../store/requestPosts/actions";

export function usePostsPopularData() {
  const data = useSelector<RootState, []>(
    (state) => state.posts.data.childrens
  );
  const token = useSelector<RootState, string>((state) => state.token);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!token || token === "undefined") return;
    //@ts-ignore
    dispatch(postsRequestAsync());
  }, [token]);
  return data;
}
