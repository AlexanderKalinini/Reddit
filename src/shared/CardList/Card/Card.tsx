import React from "react";
import styles from "./card.css";
import { Menu } from "./Menu";
import { Preview } from "./Preview";
import { TextContent } from "./TextContent";
import { Controls } from "./Controls";
import { indexContext } from "../../context/indexContext";

export function Card({ index }: { index: number }) {
  return (
    <li className={styles.card}>
      {" "}
      <indexContext.Provider value={index}>
        <TextContent />
        <Preview />
        <Menu />
        <Controls />
      </indexContext.Provider>
    </li>
  );
}
