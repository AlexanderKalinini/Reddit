import React from "react";
import styles from "./card.css";
import { Menu } from "./Menu";
import { Preview } from "./Preview";
import { TextContent } from "./TextContent";
import { Controls } from "./Controls";




// const LIST = [
//   { value: "some" },
//   { value: "other some" },
//   { value: "some other" },
// ].map((obj) => generateID(obj));

export function Card({index}:{index:number}) {
  // const [list, setList] = React.useState(LIST);
  // const handleItemClick = (id: string) => {
  //   setList(list.filter((item) => item.id != id));
  // };
  return (
    <li className={styles.card}>
      <TextContent index={index} />
      <Preview index={index}/>
      <Menu />
      <Controls />
    </li>
  );
}
