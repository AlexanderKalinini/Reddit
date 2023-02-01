import React from "react";
import { Content } from "../Content";
import { Header } from "../Header";
import styles from "./layout.css";

interface ILayoutProps {
  children?: React.ReactNode;
}

export function Layout({ children }: ILayoutProps) {
  return (
    <div className={styles.layout}>
      {children}
    </div>
  );
}
