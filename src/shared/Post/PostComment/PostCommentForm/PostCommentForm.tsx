import React, {
  ChangeEvent,
  FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./postcommentform.css";

export function PostCommentForm({
  author,
  onBlur: onBlur,
}: {
  author: string;
  onBlur: () => void;
}) {
  const [value, setValue] = useState(`${author},`);
  const textariaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (!textariaRef.current) return;
    textariaRef.current.focus();
    textariaRef.current.selectionStart = textariaRef.current.value.length;
  });

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setValue(event.target.value);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log(value);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} onBlur={onBlur}>
      <textarea
        ref={textariaRef}
        placeholder={`Напишите ваш ответ`}
        className={styles.input}
        value={value}
        onChange={handleChange}
      />
      <button type="submit" className={styles.button}>
        Comment
      </button>
    </form>
  );
}
