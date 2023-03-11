import React, { ReactNode, useContext, useRef } from "react";
import ReactDOM from "react-dom";
import styles from "./post.css";
import { useEffect } from "react";
import { CommentForm } from "../CommentForm";
import { PostComment } from "./PostComment";
import { postsPopularContext } from "../context/postsPopularContext";
import { userPostContext } from "../context/userPostContext";
import { useCommentData } from "../../hooks/useCommentData";
import { generateRandomeString } from "../../../utils/react/generateRandomeString";
import { useLocation, useNavigate } from "react-router-dom";
import { ICardList } from "../CardList";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux-store";

interface IClose {
  onClose?: () => void;
}

interface IPost {
  data: {
    body: string;
    author: string;
    created: number;
    replies?: { data: { children: [] } };
  };
}
export function Post() {
  const ref = useRef<HTMLDivElement>(null);
  const node = document.querySelector("#modal_root");
  if (!node) return null;

  const {
    state: { id, title },
  } = useLocation();

  console.log("PostID:::", id);
  if (!id) return null;
  const [comments] = useCommentData(id);
  const navigate = useNavigate();

  function getComments(postComments: IPost[]) {
    return postComments.map((element) => {
      if (!element.data.body) return;
      const created = new Date(element.data.created).getHours();
      return (
        <PostComment
          key={generateRandomeString()}
          body={element.data.body}
          author={element.data.author}
          date={created}
          children={
            element.data.replies
              ? getComments(element.data.replies.data.children)
              : null
          }
          imgUrl="{element.data.img}"
        />
      );
    });
  }

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (
        event.target instanceof Node &&
        !ref.current?.contains(event.target)
      ) {
        navigate("/");
      }
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  });

  return ReactDOM.createPortal(
    <div className={styles.modal} ref={ref}>
      <h2>{title}</h2>
      <div className={styles.content}>
        <p>
          <iframe
            seamless
            src=""
            className={styles.iframe}
            allow="fullscreen"
          ></iframe>
        </p>
        <CommentForm />
        <div style={{ height: 35, marginBottom: 53 }}>
          Сортировать по: Лучшие
        </div>
        <div>{getComments(comments)}</div>
      </div>
    </div>,
    node
  );
}
