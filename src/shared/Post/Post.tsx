import React, { ReactNode, useContext, useRef } from "react";
import ReactDOM from "react-dom";
import styles from "./post.css";
import { useEffect } from "react";
import { CommentForm } from "../CommentForm";
import { PostComment } from "./PostComment";
import { indexContext } from "../context/indexContext";
import { userPostContext } from "../context/userPostContext";
import { useCommentData } from "../../hooks/useCommentData";
import { generateRandomeString } from "../../../utils/react/generateRandomeString";

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
export function Post(props: IClose) {
  const ref = useRef<HTMLDivElement>(null);
  const node = document.querySelector("#modal_root");
  if (!node) return null;
  const index = useContext(indexContext);
  const dataPost = useContext(userPostContext);
  const [comments] = useCommentData(dataPost[index].postId);

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
        console.log("closed");
        props.onClose?.();
      }
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  });

  return ReactDOM.createPortal(
    <div className={styles.modal} ref={ref}>
      <h2>{dataPost[index].title}</h2>
      <div className={styles.content}>
        <p>
          <iframe
            seamless
            src={dataPost[index].article}
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
