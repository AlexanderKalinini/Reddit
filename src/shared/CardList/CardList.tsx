import React, { useEffect, useRef, useState } from "react";
import { Card } from "./Card";
import styles from "./cardlist.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux-store";
import { postsRequestAsync } from "../../store/requestPosts/reducer";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import { Post } from "../Post";

export interface ICardList {
  title: string;
  thumbnail: string;
  index: number;
  id?: string;
  author: string;
  created: number;
  num_comments: number;
  score: number;
}
let counter = 0;
export let Cards: JSX.Element[];

export function CardList() {
  const token = useSelector<RootState, string>((state) => state.token);

  const dispatch = useDispatch();

  const postsData: { data: ICardList }[] = useSelector<RootState, []>(
    (state) => state.posts.data.childrens
  );

  const loading = useSelector<RootState, boolean>(
    (state) => state.posts.loading
  );
  const error = useSelector<RootState, string>((state) => state.posts.error);

  const bottomOfRef = useRef<HTMLDivElement>(null);

  function handleClick() {
    //@ts-ignore
    dispatch(postsRequestAsync());
    counter = 0;
  }

  useEffect(() => {
    if (!token || token === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && counter < 2) {
          counter++;
          //@ts-ignore
          dispatch(postsRequestAsync());
        }
      },
      {
        rootMargin: "100px",
      }
    );
    if (bottomOfRef.current) {
      observer.observe(bottomOfRef.current);
    }
    return () => {
      if (bottomOfRef.current) {
        observer.unobserve(bottomOfRef.current);
      }
    };
  }, [bottomOfRef.current, token]);

  Cards = postsData.map((post: { data: ICardList }, index: number) => {
    return (
      <Card
        key={post.data.id}
        postData={{
          title: post.data.title,
          thumbnail: post.data.thumbnail,
          index: index,
          author: post.data.author,
          created: post.data.created,
          num_comments: post.data.num_comments,
          score: post.data.score,
          id: post.data.id,
        }}
      />
    );
  });

  return (
    <div className={styles.cardsList}>
      <ul>
        {postsData.length === 0 && !loading && !error && (
          <div style={{ textAlign: "center" }}>No any posts</div>
        )}

        {Cards}
        <div ref={bottomOfRef}></div>
        {!loading && postsData.length !== 0 && (
          <button className={styles.button} onClick={handleClick}>
            Click to download more...
          </button>
        )}

        {loading && !error && (
          <div className={styles.downloading}>Downloading...</div>
        )}

        {error && (
          <div role="alert" style={{ textAlign: "center", color: "red" }}>
            {error}
          </div>
        )}
        <Outlet />
      </ul>
    </div>
  );
}
