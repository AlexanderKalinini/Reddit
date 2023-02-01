import { WarningIcon } from "../../icons";
import { ShareIcon } from "../../icons/Shareicon";
import styles from "./postcomment.css";

import { Text, EColor } from "../../../../utils/react/Text/index";
import React from "react";
import { PostUser } from "./PostUser/index";
import { ArrowUP, ArrowDown } from "../../icons/Arrows";
import { AnswerButton } from "./AnswerButton/index";

export function PostComment() {
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
        <PostUser />
        <p className={styles.comment_text}>
          <Text size={14} color={EColor.black}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Temporibus, eveniet cupiditate id enim consectetur distinctio saepe
            dolorem qui nobis velit facilis magnam quia, vero molestias in
            aperiam, quidem cumque atque?
          </Text>
        </p>
        <div className={styles.comment_buttons}>
          <AnswerButton />
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
      </div>
    </div>
  );
}
