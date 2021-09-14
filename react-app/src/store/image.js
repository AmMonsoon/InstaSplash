const GET_FOLLOWING = 'images/GET_FOLLOWING'
const GET_IMAGE = 'images/GET_IMAGE'
const DELETE_IMAGE = 'images/DELETE_IMAGE'
const ADD_LIKE = 'images/ADD_LIKE'
const REMOVE_LIKE = 'images/REMOVE_LIKE'


const getImage = (image) => ({
type: GET_IMAGE,
image,
})

const deleteImage = (imageId) => ({
type: DELETE_IMAGE,
imageId
})

const addLike = (imageId, userId) => ({
    type: ADD_LIKE,
    payload: {
        imageId, userId
    }
})

const removeLike = (imageId, userId) => ({
    type: REMOVE_LIKE,
    payload: {
        imageId, userId
    }
})

export const postLike = (imageId, userId) => async(dispatch) => {
    const res = await fetch(`/api/images/${imageId}/like`)
    if (res.ok){
        dispatch(addLike(imageId, userId))
    }
}

export const destroyLike = (imageId, userId) => async(dispatch) => {
    const res = await fetch(`/api/images/${imageId}/unlike`)
    if (res.ok){
        dispatch(removeLike(imageId, userId))
    }
    return
}

export const destroyImage = (imageId) => async(dispatch) => {
    const res = await fetch(`/api/images/${imageId}`,
    {
        method: 'DELETE'
    })
    dispatch(deleteImage(imageId))
    return
}

export const fetchImage = (imageId) => async (dispatch) => {
    const res = await fetch(`/api/images/${imageId}`)
    const image = await res.json()
    dispatch(getImage(image))
    return image
}

export const patchCaption = (caption, imageId) => async(dispatch) => {
    const res = await fetch(`/api/images/${imageId}`, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({caption})
    })
    if (res.ok) {
        const image = await res.json()
        dispatch(getImage(image))
        return image
    }
}

const getFollowing = (images) => ({
    type: GET_FOLLOWING,
    images,
})
export const getFollow = () => async (dispatch) => {
    const res = await fetch('/api/images/following')
    const images = await res.json()
    dispatch(getFollowing(images))
    return images
}

const initialState = { all:{}, following: {}, notFollowing: {}}
const imageReducer = (state = initialState, action) => {
    let newState = { ...state }
    switch (action.type) {
        case GET_FOLLOWING:
            Object.values(action.images).forEach(image => {
                newState.following[image.id] = image
                newState.all[image.id] = image
            })
            return newState
        case GET_IMAGE:
            newState.all[action.image.id] = action.image
            return newState
        case DELETE_IMAGE:
            delete newState.all[action.imageId]
            return newState
        case ADD_LIKE:
            const imageId = action.payload.imageId
            console.log('imageid', imageId)
            const userId = action.payload.userId
            console.log('userId', userId)
            newState.all[imageId].likes[userId] = { imageId, userId}
            return newState
        case REMOVE_LIKE:
            const imageId2 = action.payload.imageId
            console.log('imageid', imageId2)
            const userId2 = action.payload.userId
            console.log('userId', userId2)
            delete newState.all[imageId2].likes[userId2]

            return newState
        default: return state
    }
}
export default imageReducer
