import React, { ReactNode } from "react";
import { usePostData } from "../../hooks/usePostData";


interface IPostData {
  title?: string;
  thumbnail?: string;
}

export const userPostContext = React.createContext<IPostData[]>([]);

export function UserPostProvider({ children }: { children: ReactNode }) {
  const [data] = usePostData();
  return (
    <userPostContext.Provider value={data}>{children}</userPostContext.Provider>
  );
}
