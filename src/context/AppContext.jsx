import { createContext } from "react";
export const AppContext = createContext({
  isLoggedIn: false,
  setLogin: () => {},
  removeLogin: () => {},
});
