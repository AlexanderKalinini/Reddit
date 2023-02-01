import React, { useContext } from "react";
import { userPostContext } from "../context/userPostContext";
import { Card } from "./Card";
import {generateRandomeString} from "../../../utils/react/generateRandomeString"


import styles from "./cardlist.css";

export function CardList() {

  const data= useContext(userPostContext)
  const Cards = data.map((obj,index)=><Card key={generateRandomeString()} index={index}/>)

  return (
    <div className={styles.cardsList}>
      <ul>
        {Cards}
      </ul>
    </div>
  );
}
