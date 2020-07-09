const SET_POSTS: string = 'SET_POSTS'

interface Post {
    id: string,
    title: string,
    content: string
}

let initialState = {
    postData: [] as Array<Post>,
    authID: null as string|null
}

export type InitialStateType = typeof initialState

const postReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_POSTS:
            return {
                ...state,
                postData: action.postData
            }
        default:
            return state
    }
}


export default postReducer