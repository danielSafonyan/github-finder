function githubReducer(state, action) {
    switch(action.type) {
        case 'SET_ISLOADING': 
            return { ...state, isLoadin: action.payload.isLoading };
        case 'SET_USERS': 
            return { ...state, users: action.payload.users, status: action.payload.status }
        default:
            return state
    }
}
export default githubReducer