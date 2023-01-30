import React from "react";
import { BlockIcon, WarningIcon } from "../../../../icons";
import styles from "./menuitemlist.css";
import { EColor, Text } from "../../../../../../utils/react/Text/Text";
import { CommentIcon } from "../../../../icons/Commenticon";
import { ShareIcon } from "../../../../icons/Shareicon";
import { SaveIcon } from "../../../../icons/Saveicon";
import classNames from "classnames";

interface IMenuItemsListProps {
  postId: string;
}

const classname = classNames(styles.menuItem, styles.hide);

export function MenuItemList({ postId }: IMenuItemsListProps) {
  return (
    <ul className={styles.menuItemsList}>
      <li className={classname}>
        <CommentIcon />
        <Text size={12} color={EColor.grey99} bold={false}>
          Комментарии
        </Text>
      </li>
      <div className={styles.divider}></div>
      <li className={classname}>
        <ShareIcon />
        <Text size={12} color={EColor.grey99} bold={false}>
          Поделиться
        </Text>
      </li>
      <div className={styles.divider}></div>
      <li className={styles.menuItem}>
        <BlockIcon />
        <Text size={12} color={EColor.grey99} bold={false}>
          Скрыть
        </Text>
      </li>
      <div className={styles.divider}></div>
      <li className={classname}>
        <SaveIcon />
        <Text size={12} color={EColor.grey99} bold={false}>
          Сохранить
        </Text>
      </li>
      <div className={styles.divider}></div>
      <li className={styles.menuItem}>
        <WarningIcon />
        <Text size={12} color={EColor.grey99} bold={false}>
          Пожаловаться
        </Text>
      </li>
    </ul>
  );
}
