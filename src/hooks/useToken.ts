import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { actionToken } from "../store/saveToken/actions";

export function useToken() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actionToken(window.__token__));
  });
}
