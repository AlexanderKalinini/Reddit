import React from "react";
import styles from "./card.css";
import { Menu } from "./Menu";
import { Preview } from "./Preview";
import { TextContent } from "./TextContent";
import { Controls } from "./Controls";
import { postsPopularContext } from "../../context/postsPopularContext";
import { ICardList } from "../CardList";

export function Card({ postData }: { postData: ICardList }) {
  return (
    <li className={styles.card}>
      {" "}
      <postsPopularContext.Provider value={postData}>
        <TextContent />
        <Preview />
        <Menu />
        <Controls />
      </postsPopularContext.Provider>
    </li>
  );
}
