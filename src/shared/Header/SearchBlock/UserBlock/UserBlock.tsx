import React from "react";
import { IconAnon } from "../../../icons";
import styles from "./userblock.css";
import { Break } from "../../../../../utils/react/Break/Break";
import { EColor, Text } from "../../../../../utils/react/Text/Text";

interface IUserBlockProps {
  avatar?: string;
  username?: string;
}

export function UserBlock({ avatar, username }: IUserBlockProps) {
  return (
    <a
      href="https://www.reddit.com/api/v1/authorize?client_id=sHPLjma1lrwD3oo5VrmEjQ&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity"
      className={styles.userBox}
    >
      <div className={styles.avatarBox}>
        {avatar ? (
          <img src={avatar} alt="user avatar" className={styles.avatarImage} />
        ) : (
          <IconAnon />
        )}
      </div>
      <div className={styles.username}>
        <Break size={12} />
        <Text size={12} color={username ? EColor.black : EColor.grey99}>
          {username || "Аноним"}
        </Text>
      </div>
    </a>
  );
}
