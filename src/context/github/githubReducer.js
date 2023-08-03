function githubReducer(state, action) {
    switch(action.type) {
        case 'SET_ISLOADING': 
            return { ...state, isLoadin: action.payload.isLoading };
        case 'SET_USERS': 
            return { ...state, users: action.payload.users, status: action.payload.status }
        case 'SET_SINGLE_USER': 
            console.log(action)
            return { ...state, user: action.payload.user, repos: action.payload.repos, status: action.payload.status }
        default:
            return state
    }
}
export default githubReducer