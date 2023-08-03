import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer.js";

const GithubContext = createContext([])

function GithubContextProvider({ children }) {
  const userModel = {
    name: "",
    type: "",
    avatar_url: "",
    location: "",
    bio: "",
    blog: "",
    twitter_username: "",
    login: "",
    html_url: "",
    followers: "",
    following: "",
    public_repos: "",
    public_gists: "",
    hireable: ""
  } 

  const initialState = { users: [], isLoading: false, user: userModel, repos: [] }

  const [state, dispatch] = useReducer(githubReducer, initialState)

  return (
    <GithubContext.Provider value={{ state, dispatch}}>
      {children}
    </GithubContext.Provider >
  )
}

export { GithubContextProvider, GithubContext }