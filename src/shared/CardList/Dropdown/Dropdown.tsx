import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import styles from "./dropdown.css";

interface IDropdown {
  children: React.ReactNode;
  isOpen?: boolean;
  handleOpen?: () => void;
  left: number | undefined;
  top: number | undefined;
  classList: string;
}

export function Dropdown({
  children,
  isOpen,
  handleOpen,
  left,
  top,
  classList,
}: IDropdown) {
  const dropdown = document.querySelector("#dropdown_root");
  if (!dropdown) return null;

  return ReactDOM.createPortal(
    <div
      className={`${styles.container}${classList}`}
      style={{ left: left, top: top }}
    >
      {children}
    </div>,
    dropdown
  );
}
