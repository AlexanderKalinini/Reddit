import React, { useRef, useState } from "react";
import { MenuIcon } from "../../../icons";
import { Dropdown } from "../../Dropdown";
import styles from "./menu.css";
import { MenuItemList } from "./MenuItemList";

export function Menu() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const refDiv = useRef<HTMLButtonElement>(null);
  const screenWidth = window.screen.width;
  const handleOpen = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  function getCoords() {
    if (!refDiv.current) return;
    let button = refDiv.current.getBoundingClientRect();
    console.log(button.left, window.scrollX, button.width);

    return {
      top: button.top + window.pageYOffset + button.height,
      right: button.right + window.pageXOffset,
      bottom: button.bottom + window.pageYOffset,
      left: button.left + window.scrollX + button.width - 100,
    };
  }
  return (
    <div className={styles.menu}>
      <div onClick={handleOpen}>
        <button className={styles.menuButton} ref={refDiv}>
          <MenuIcon />
        </button>
      </div>
      {isDropdownOpen && (
        <Dropdown
          left={screenWidth > 1024 ? getCoords()?.left : 0}
          top={getCoords()?.top}
          classList={""}
        >
          <div className={styles.dropdown}>
            <MenuItemList postId="1234" />
            <button className={styles.closeButton} onClick={handleOpen}>
              Закрыть
            </button>
          </div>
        </Dropdown>
      )}
    </div>
  );
}
