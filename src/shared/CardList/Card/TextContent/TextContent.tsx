import React, { useContext } from "react";
import { postsPopularContext } from "../../../context/postsPopularContext";
import { userPostContext } from "../../../context/userPostContext";

import styles from "./textContent.css";
import { Title } from "./Title";

export function TextContent() {
  const { created, author } = useContext(postsPopularContext);
  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <div className={styles.userLink}>
          <img
            src="{postData[index].image}"
            alt="avatar"
            className={styles.avatar}
          />
          <a href="#user-url" className={styles.username}>
            {author}
          </a>
        </div>
        <span className={styles.createAt}>
          <span className={styles.publishedLabel}>опубликовано </span>
          {new Date(created).getHours()} часов назад
        </span>
      </div>
      <Title />
    </div>
  );
}
