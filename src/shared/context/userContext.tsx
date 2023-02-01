import React, { ReactNode } from "react";
import { useUserData } from "../../hooks/useUserData";
import { usePostData } from '../../hooks/usePostData';

export interface IUserContextData {
  name?: string;
  iconImg?: string;
}

export const userContext = React.createContext<IUserContextData>({});

export function UserContextProvider({
  children,
}: {
  children:ReactNode;
}) {
  const [data] = useUserData();
  return <userContext.Provider value={data}>{children}</userContext.Provider>;
}
