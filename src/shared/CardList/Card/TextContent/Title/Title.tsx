import React, { useContext } from "react";
import styles from "./title.css";
import { useState } from "react";
import { userPostContext } from "../../../../context/userPostContext";
import { Post } from "../../../../Post";

export function Title({ index }: { index: number }) {
  const data = useContext(userPostContext);
  const [isOpend, setListOpened] = useState(false);
  return (
    <div>
      <h2 className={styles.title}  >
        <a href="#post-url" className={styles.postLink} onClick={()=>{setListOpened(true)}}>
          {data[index].title}
        </a>
      </h2>
      {isOpend && (<Post onClose={()=>{setListOpened(false)}}/>)}
    </div>
  );
}
