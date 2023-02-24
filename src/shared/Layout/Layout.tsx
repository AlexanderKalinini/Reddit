import React, { useEffect } from "react";

import styles from "./layout.css";

import { useDispatch } from "react-redux";
import { saveToken } from "../../store/saveToken/actions";

interface ILayoutProps {
  children?: React.ReactNode;
}

export function Layout({ children }: ILayoutProps) {
  const dispatch = useDispatch();
  useEffect(() => {
    //@ts-ignore
    dispatch(saveToken());
  });

  return <div className={styles.layout}>{children}</div>;
}
