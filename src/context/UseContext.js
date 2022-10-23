import { createContext } from "react";

import useAuth from "../hooks/useAuth";

const Context = createContext()

function UserProvider({ children }) {
  const { authenticated, register, login, logout } = useAuth()

  return <Context.Provider value={{ authenticated, register, login, logout }}>{children}</Context.Provider>
}

//Context: acesso aos métodos, UserProvider: gera a possibilidade de acesso
export { Context, UserProvider }