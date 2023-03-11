import { meRequestAsync } from "./../store/requestUserData/reducer";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux-store";

interface IUserData {
  name?: string;
  iconImg?: string;
}

export function useUserData() {
  const token = useSelector<RootState, string>((state) => state.token);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!token || token === "undefined") return;
    //@ts-ignore
    dispatch(meRequestAsync());
  }, [token]);
  const data = useSelector<RootState, IUserData>((state) => state.me.data);
  return [data];
}
