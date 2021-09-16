const ADD_FOLLOW = 'users/ADD_FOLLOW'
const REMOVE_FOLLOW = 'users/REMOVE_FOLLOW'
const GET_USER = 'users/GET_USER'


const addFollow = (followerId, followedId) => ({
    type: ADD_FOLLOW,
    payload:{
        followerId, followedId
    }
})

const removeFollow = (followerId, followedId) => ({
    type: REMOVE_FOLLOW,
    payload:{
        followerId, followedId
    }
})

const getUser = (user) => ({
    type: GET_USER,
    user
})

export const setProfilePic = (imageURL, userId) => async (dispatch) => {
    const res = await fetch(`/api/users/${userId}`, {
        method: "PATCH",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({imageURL})
    })
    if (res.ok) {
        return "success" 

    }
}

export const fetchUser = (userId) => async(dispatch) => {
    const res = await fetch(`/api/users/${userId}`)
    const user = await res.json()
    if (user) {
        dispatch(getUser(user))
    }
    return
}

export const postFollow = (followerId, followedId) => async(dispatch) => {
    const res = await fetch(`/api/users/${followedId}/follow`)
    if (res.ok) {
        dispatch(addFollow(followerId, followedId))
    }
    return
}

export const destroyFollow = (followerId, followedId) => async(dispatch) => {
    const res = await fetch(`/api/users/${followedId}/unfollow`)
    if (res.ok) {
        dispatch(removeFollow( followerId, followedId))
    }
    return
}


const initialState = { all: {}}
const userReducer = ( state = initialState, action) => {
    let newState = { ...state }
    switch(action.type) {
        case GET_USER:
            newState.all[action.user.id] = action.user
            return newState
        case ADD_FOLLOW:
            const followerId = action.payload.followerId
            const followedId = action.payload.followedId
            newState.all[followedId].followers[followerId] = {followedId, followerId}
            return newState
        case REMOVE_FOLLOW:
            const followerId2 = action.payload.followerId
            const followedId2 = action.payload.followedId
            delete newState.all[followedId2].followers[followerId2]
            return newState
        default: return state
    }
}

export default userReducer
