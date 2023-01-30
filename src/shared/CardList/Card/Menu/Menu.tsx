import React from "react";
import { MenuIcon } from "../../../icons";
import { Dropdown } from "../../Dropdown";
import styles from "./menu.css";
import { MenuItemList } from "./MenuItemList";

export function Menu() {
  return (
    <div className={styles.menu}>
      <Dropdown
        button={
          <button className={styles.menuButton}>
            <MenuIcon />
          </button>
        }
      >
        <div className={styles.dropdown}>
         <MenuItemList postId="1234"/>
          <button className={styles.closeButton}>
            Закрыть</button>
        </div>
      </Dropdown>
    </div>
  );
}
