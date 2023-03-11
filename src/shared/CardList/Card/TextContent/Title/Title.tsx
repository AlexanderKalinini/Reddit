import React, { useContext } from "react";
import styles from "./title.css";
import { useState } from "react";
import { userPostContext } from "../../../../context/userPostContext";
import { Post } from "../../../../Post";
import { postsPopularContext } from "../../../../context/postsPopularContext";
import { Link } from "react-router-dom";

export function Title() {
  const { title, id } = useContext(postsPopularContext);

  return (
    <div>
      <h2 className={styles.title}>
        <Link
          to={`/posts/${id}`}
          state={{ id: id, title: title }}
          className={styles.postLink}
        >
          {title}
        </Link>
      </h2>
    </div>
  );
}
