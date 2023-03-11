import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux-store";

export interface IPostData {
  title?: string;
  thumbnail?: string;
  postId: string;
  created: number;
  author: string;
  num_comments: number;
  score: number;
  image: string;
  url: string;
}

const URL_BEST = "https://oauth.reddit.com/best.json?sr_detail=true";

export function usePostData() {
  const [data, setData] = useState<IPostData[]>([]);

  const token = useSelector<RootState, string>((state) => state.token);
  useEffect(() => {
    axios
      .get(URL_BEST, {
        headers: { Authorization: `bearer ${token}` },
      })
      .then((resp) => {
        const postData = resp.data.data.children;

        const userMapedData: IPostData[] = postData.map(
          (el: {
            data: {
              sr_detail: { icon_img: string };
              created: number;
              author: string;
              title: string;
              thumbnail: string;
              id: string;
              num_comments: string;
              score: number;
              url: string;
            };
          }) => {
            return {
              title: el.data.title,
              thumbnail: el.data.thumbnail,
              postId: el.data.id,
              author: el.data.author,
              created: el.data.created,
              num_comments: el.data.num_comments,
              score: el.data.score,
              image: el.data.sr_detail.icon_img,
              article: el.data.url,
            };
          }
        ); // title,thumbnail

        setData(userMapedData);
      })
      .catch(console.log);
  }, [token]);
  return [data];
}
