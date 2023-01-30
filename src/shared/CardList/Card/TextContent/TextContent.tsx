import React from "react";
import styles from "./textContent.css";

export function TextContent() {
  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <div className={styles.userLink}>
          <img
            src="https://sun9-77.userapi.com/impg/guiypknBMCLuAUeA1X1OCqTBbz61pcKRxtG2wQ/b2C07lST1uo.jpg?size=1000x1000&quality=96&sign=d4e564d3d5b878ced4a81779d606bc51&c_uniq_tag=Cn5J_-uz-02mP4yl1OSf56GPBzVpqdihdQmglRHIxxI&type=album"
            alt="avatar"
            className={styles.avatar}
          />
          <a href="#user-url" className={styles.username}>
            Александр Калинин
          </a>
        </div>
        <span className={styles.createAt}>
          <span className={styles.publishedLabel}>опубликовано </span>4 часа
          назад
        </span>
      </div>
      <h2 className={styles.title}>
        <a href="#post-url" className={styles.postLink}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia
          cupiditate, ducimus corrupti totam doloremque quam suscipit in cum
          sunt enim fugit minus consequuntur corporis vero eveniet aut iste id
          saepe?
        </a>
      </h2>
    </div>
  );
}
