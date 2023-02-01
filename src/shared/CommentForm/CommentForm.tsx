import React, { ChangeEvent, FormEvent } from "react";
import styles from "./commentform.css";
import { useContext} from "react";
import { userContext } from "../context/userContext";
import { useDispatch, useSelector } from "react-redux";
import { RootState, updateComment } from '../../../redux-store';

export function CommentForm() {
  const value1 = useSelector<RootState, string>((state) => state.commentText);
  const dispatch = useDispatch();
  const userData = useContext(userContext);



  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    dispatch(updateComment(event.target.value));
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log(value1);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea
        placeholder={`${userData.name}, оставьте ваш комментарий`}
        className={styles.input}
        value={value1}
        onChange={handleChange}
      />
      <button type="submit" className={styles.button}>
        Comment
      </button>
    </form>
  );
}
