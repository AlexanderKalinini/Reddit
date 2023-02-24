import express from "express";
import ReactDOM from "react-dom/server";
import { indexTemplate } from "./indexTemplate";
import { App } from "../App";
import axios from "axios";
import cors from 'cors';

const app = express();

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  optionSuccessStatus: 200
}

app.use(cors(corsOptions))
app.use("/static", express.static("./dist/client"));
app.get("/", (req, res) => {
  res.send(indexTemplate(ReactDOM.renderToString(App())));
});


app.get("/auth", (req, res) => {
  axios
    .post(
      "https://www.reddit.com/api/v1/access_token",
      `grant_type=authorization_code&code=${req.query.code}&redirect_uri=http://localhost:3000/auth`,
      {
        auth: {
          username: "sHPLjma1lrwD3oo5VrmEjQ",
          password: "nZxQD10AcNDikf354drST_ui7gjuPQ",
        },
        headers: { "Content-type": "application/x-www-form-urlencoded" },
      }
    )
    .then(({data}) => {
      res.send(indexTemplate(ReactDOM.renderToString(App()),data['access_token']));
    })
    .then(console.log);
});

app.listen(3000, () => {
  console.log("server started on port http://localhost:3000");
});
