import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setToken } from "../../redux-store";

export function useToken() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setToken(window.__token__));
  });
}
