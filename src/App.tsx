import { hot } from "react-hot-loader/root";
import { Layout } from "./shared/Layout/index";
import "./main.global.css";
import { CardList, Cards } from "./shared/CardList/CardList";
import { Header } from "./shared/Header";
import { Content } from "./shared/Content";
import React, { useState } from "react";
import { UserPostProvider } from "./shared/context/userPostContext";
import { useEffect } from "react";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "../redux-store";
import thunk from "redux-thunk";
import {
  BrowserRouter,
  createBrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { Post } from "./shared/Post";
import { NotFound } from "./NotFound/index";
import { createContext } from "react";
import { storeonStore } from "../Storeon/Store";
import { customContext } from "storeon/react";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

const StoreonContext = createContext(storeonStore);

export const useStoreon = customContext(StoreonContext);

function AppComponent() {
  const [mounted, setMount] = useState(false);
  useEffect(() => {
    setMount(true);
  });

  return (
    <StoreonContext.Provider value={storeonStore}>
      <Provider store={store}>
        {mounted && (
          <BrowserRouter>
            <UserPostProvider>
              <Layout>
                <Header />
                <Content>
                  <Routes>
                    <Route
                      path="/"
                      element={<Navigate replace to="/posts" />}
                    ></Route>
                    <Route path="/auth" element={<CardList />}></Route>
                    <Route path="/posts" element={<CardList />}>
                      <Route path="/posts/:id" element={<Post />}></Route>
                    </Route>
                    <Route path="*" element={<NotFound />}></Route>
                  </Routes>
                </Content>
              </Layout>
            </UserPostProvider>
          </BrowserRouter>
        )}
      </Provider>
    </StoreonContext.Provider>
  );
}

export const App = hot(() => <AppComponent />);
