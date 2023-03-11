import React, { ChangeEvent, useEffect, useState } from "react";
import styles from "./commentform.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux-store";
import { updateComment } from "../../store/updateComment/actions";
import { useForm } from "react-hook-form";

import { storeonStore } from "../../../Storeon/Store";
import { useStoreon } from "../../App";

type FormValues = {
  textAriaComment: string;
};

export function CommentForm() {
  const value = useSelector<RootState, string>((state) => state.commentText);
  // const dispatch = useDispatch();
  const userName = useSelector<RootState, string | undefined>(
    (state) => state.me.data.name
  );
  const [touched, setTouch] = useState(false);
  const { dispatch } = useStoreon();
  // const [valueError, setValueError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm<FormValues>();
  // const onSubmit: SubmitHandler<TextAria> = (data: string) => {
  //   alert(data);
  // };

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    dispatch("setComment", event.target.value);
  }

  function onSubmit() {
    event?.preventDefault();
    if (errors.textAriaComment) return;
    alert(storeonStore.get().comment);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <textarea
        {...register("textAriaComment", {
          value: value,
          minLength: 4,
          required: true,
          onChange: handleChange,
        })}
        placeholder={`${userName}, оставьте ваш комментарий`}
        className={styles.input}
        aria-invalid={errors.textAriaComment ? "true" : undefined}
      />
      {touchedFields.textAriaComment && errors.textAriaComment && (
        <div>Enter more than 3 character</div>
      )}
      <button type="submit" className={styles.button}>
        Comment
      </button>
    </form>
  );
}
