import React, { ReactNode } from "react";
import { ICardList } from "../CardList";

export const postsPopularContext = React.createContext<ICardList>({
  thumbnail: "",
  title: "",
  index: 0,
  id: "",
  author: "",
  created: 0,
  num_comments: 0,
  score: 0,
});
