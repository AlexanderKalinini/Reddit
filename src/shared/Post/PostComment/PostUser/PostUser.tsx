import React, { useContext } from "react";
import styles from "./postUser.css";
import { userContext } from '../../../context/userContext';
import { EColor, Text } from "../../../../../utils/react/Text/Text";

export function PostUser() {
  const userData = useContext(userContext)
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
            {userData.name} <Text size={14} color={EColor.grey99} >4 часа назад</Text> 
          </a>
          <span className={styles.createdAt}>Лига юристов</span>
        </div>
       
      </div>
    </div>
  );
}
