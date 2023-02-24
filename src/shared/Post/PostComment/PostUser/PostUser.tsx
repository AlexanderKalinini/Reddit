import React, { useContext } from "react";
import styles from "./postUser.css";
import { userContext } from "../../../context/userContext";
import { EColor, Text } from "../../../../../utils/react/Text/Text";

export interface IPostUser {
  author: string;
  date: number;
  imgUrl: string;
}

export function PostUser({ author, date, imgUrl }: IPostUser) {
  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <div className={styles.userLink}>
          <img src={imgUrl} alt="avatar" className={styles.avatar} />
          <a href="#user-url" className={styles.username}>
            {author}{" "}
            <Text size={14} color={EColor.grey99}>
              {date} часов назад
            </Text>
          </a>
          {/* <span className={styles.createdAt}></span> */}
        </div>
      </div>
    </div>
  );
}
