import React from "react";
import styles from "./preview.css";
import { useContext } from "react";
import { userPostContext } from "../../../context/userPostContext";
import { postsPopularContext } from "../../../context/postsPopularContext";
import { ICardList } from "../../CardList";

export function Preview() {
  const { thumbnail } = useContext(postsPopularContext);

  return (
    <div className={styles.preview}>
      <img className={styles.previewImg} src={thumbnail} alt="image" />
    </div>
  );
}
