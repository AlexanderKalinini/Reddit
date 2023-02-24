import React, { useContext } from "react";
import { indexContext } from "../../../context/indexContext";
import { userPostContext } from "../../../context/userPostContext";

import styles from "./textContent.css";
import { Title } from "./Title";

export function TextContent() {
  const index = useContext(indexContext);
  const postData = useContext(userPostContext);
  console.log("Text content:");
  const time = new Date(postData[index].created).getHours();

  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <div className={styles.userLink}>
          <img
            src={postData[index].image}
            alt="avatar"
            className={styles.avatar}
          />
          <a href="#user-url" className={styles.username}>
            {postData[index].author}
          </a>
        </div>
        <span className={styles.createAt}>
          <span className={styles.publishedLabel}>опубликовано </span>
          {time} часов назад
        </span>
      </div>
      <Title />
    </div>
  );
}
