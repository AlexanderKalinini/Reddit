import React from "react";
import { AnswerIcon } from "../../../icons/AnswerIcon";
import styles from "./answerbutton.css";
import { EColor, Text } from "../../../../../utils/react/Text/Text";
import { useState } from "react";
import { CommentForm } from "../../../CommentForm/CommentForm";

export function AnswerButton() {
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
        <div className={styles.comment_form} >
          {" "}
          <CommentForm />
        </div>
      )}
    </div>
  );
}
