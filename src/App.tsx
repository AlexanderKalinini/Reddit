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
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "../redux-store";
import thunk from "redux-thunk";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

function AppComponent() {
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
