import React from "react";
import styles from "./preview.css";

export function Preview() {
  return (
    <div className={styles.preview}>
      <img className={styles.previewImg} src="https://cdn.dribbble.com/userupload/4271037/file/original-35e5b8101ff04a5f5f4640a32180b7fa.png?compress=1&resize=752x" alt="image" />
    </div>
  );
}
