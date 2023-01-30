import React from "react";
import { Card } from "./Card";

import styles from "./cardlist.css";

export function CardList() {
  return (
    <div className={styles.cardsList}>
      <ul>
     <Card/>
      </ul>
    </div>
  );
}
