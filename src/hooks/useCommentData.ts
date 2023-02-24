import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux-store";

export function useCommentData(data: string) {
  const [comments, setComments] = useState([]);
  const token = useSelector<RootState, string>((state) => state.token);
  const COMMENT_URL = `http://api.reddit.com/comments/${data}`;
  useEffect(() => {
    if (!token || token === "undefined") return;
    axios
      .get(COMMENT_URL)
      .then((resp) => {
        const commentData = resp.data[1].data.children;
        setComments(commentData);
        console.log("CommentData:", commentData);
      })
      .catch(console.log);
  }, [token]);
  return [comments];
}
