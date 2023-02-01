import { hot } from "react-hot-loader/root";
import { Layout } from "./shared/Layout/index";
import "./main.global.css";
import { CardList } from "./shared/CardList/CardList";

import { Header } from "./shared/Header";
import { Content } from "./shared/Content";
import React from "react";

import { UserContextProvider } from "./shared/context/userContext";
import { UserPostProvider } from "./shared/context/userPostContext";
import { useEffect } from "react";
import { createStore } from "redux";
import { Provider, useDispatch } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer, setToken } from "../redux-store";

const store = createStore(rootReducer, composeWithDevTools());

function AppComponent() {
  // const [token] = useToken();
  // const TokenProvider = tokenContext.Provider;
  useEffect(() => {
    console.log("Render");
  });

  return (
    <Provider store={store}>
      <UserPostProvider>
        <UserContextProvider>
          <Layout>
            <Header />
            <Content>
              <CardList />
            </Content>
          </Layout>
        </UserContextProvider>
      </UserPostProvider>
    </Provider>
  );
}

export const App = hot(() => <AppComponent />);
