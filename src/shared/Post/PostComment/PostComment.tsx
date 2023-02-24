import { WarningIcon } from "../../icons";
import { ShareIcon } from "../../icons/Shareicon";
import styles from "./postcomment.css";
import { Text, EColor } from "../../../../utils/react/Text/index";
import React, { ReactNode } from "react";
import { PostUser } from "./PostUser/index";
import { ArrowUP, ArrowDown } from "../../icons/Arrows";
import { AnswerButton } from "./AnswerButton/index";

export interface IPostComment {
  body: string;
  author: string;
  date: number;
  imgUrl: string;
  children?: ReactNode;
}

export function PostComment({
  body,
  author,
  date,
  children,
  imgUrl,
}: IPostComment) {
  return (
    <div className={styles.comment}>
      <div className={styles.comment_scroll}>
        <div className={styles.comment_arrows}>
          <ArrowUP />
          <ArrowDown />
        </div>
        <div className={styles.comment_line}></div>
      </div>
      <div className={styles.comment_block}>
        <PostUser author={author} date={date} imgUrl={imgUrl} />
        <p className={styles.comment_text}>
          <Text size={14} color={EColor.black}>
            {body}
          </Text>
        </p>
        <div className={styles.comment_buttons}>
          <AnswerButton author={author} />
          <button className={styles.comment_button}>
            <ShareIcon />
            <span className={styles.comment_button_text}>
              <Text size={12} color={EColor.grey99}>
                Поделиться
              </Text>
            </span>
          </button>
          <button className={styles.comment_button}>
            <WarningIcon />
            <span className={styles.comment_button_text}>
              <Text size={12} color={EColor.grey99}>
                Пожаловаться
              </Text>
            </span>
          </button>
        </div>
        <div className={styles.comment_subcomment}>{children}</div>
      </div>
    </div>
  );
}
