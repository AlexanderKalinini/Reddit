import React from "react";
import styles from "./searchblock.css";
import { UserBlock } from "./UserBlock";
import { useUserData } from "../../../hooks/useUserData";

export function SearchBlock() {
  const [{ name, iconImg }] = useUserData();

  return (
    <div className={styles.searchBlock}>
      <UserBlock avatar={iconImg} username={name} />
    </div>
  );
}
