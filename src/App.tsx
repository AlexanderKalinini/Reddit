import React from "react";
import { hot } from "react-hot-loader/root";
import { Layout } from "./shared/Layout/index";
import "./main.global.css";
import { CardList } from './shared/CardList/CardList';



function AppComponent() {
  return <Layout children={<CardList/>}></Layout>;
}

export const App = hot(AppComponent);
