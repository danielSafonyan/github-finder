import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer.js";

const GithubContext = createContext([])

function GithubContextProvider({ children }) {
  const initialState = { users: [], isLoading: false }
  const [state, dispatch] = useReducer(githubReducer, initialState)

  return (
    <GithubContext.Provider value={{ state, dispatch}}>
      {children}
    </GithubContext.Provider >
  )
}

export { GithubContextProvider, GithubContext }