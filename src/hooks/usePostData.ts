import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { tokenContext } from "../shared/context/tokenContext";
import { useDispatch, useSelector } from "react-redux";
import { RootState, setToken } from "../../redux-store";
import { useToken } from "./useToken";

interface IPostData {
  title?: string;
  thumbnail?: string;
}

const URL_BEST = "https://oauth.reddit.com/best.json?sr_detail=true";

export function usePostData() {
  const [data, setData] = useState<IPostData[]>([]);
  useToken();
  const token = useSelector<RootState, string>((state) => state.token);
  useEffect(() => {
    axios
      .get(URL_BEST, {
        headers: { Authorization: `bearer ${token}` },
      })
      .then((resp) => {
        const userData = resp.data.data.children;
        const userMapedData: IPostData[] = userData.map(
          (el: { data: { title: any; thumbnail: any } }) => {
            return { title: el.data.title, thumbnail: el.data.thumbnail };
          }
        ); // title,thumbnail
        console.log(userData);
        setData(userMapedData);
      })
      .catch(console.log);
  }, [token]);

  return [data];
}
