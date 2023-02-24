import React from "react";
import { AnswerIcon } from "../../../icons/AnswerIcon";
import styles from "./answerbutton.css";
import { EColor, Text } from "../../../../../utils/react/Text/Text";
import { useState } from "react";
import { CommentForm } from "../../../CommentForm/CommentForm";
import { PostCommentForm } from "../PostCommentForm";

interface IAnswerButton {
  author: string;
}

export function AnswerButton({ author }: IAnswerButton) {
  const [isOpen, setOpenForm] = useState(false);
  return (
    <div>
      <button
        className={styles.comment_button}
        onClick={() => setOpenForm(!isOpen)}
      >
        <AnswerIcon />
        <span className={styles.comment_button_text}>
          <Text size={12} color={EColor.grey99}>
            Ответить
          </Text>
        </span>
      </button>
      {isOpen && (
        <div className={styles.comment_form}>
          {" "}
          <PostCommentForm
            author={author}
            onBlur={() => setOpenForm(!isOpen)}
          />
        </div>
      )}
    </div>
  );
}
