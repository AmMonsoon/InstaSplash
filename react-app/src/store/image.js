const ADD_IMAGE = 'images/ADD'
const GET_FOLLOWING = 'images/GET_FOLLOWING'
const GET_IMAGE = 'images/GET_IMAGE'
const DELETE_IMAGE = 'images/DELETE_IMAGE'
const ADD_LIKE = 'images/ADD_LIKE'
const REMOVE_LIKE = 'images/REMOVE_LIKE'
const GET_COMMENTS = 'images/GET_COMMENTS'


const getComments = (comments) => ({
    type: GET_COMMENTS,
    comments
})


export const getAllComments = (imageId) => async(dispatch) => {
    const res = await fetch(`/api/images/${imageId}/comments`)
    const comments = await res.json()
    dispatch(getComments(comments))
    return comments
}

const addImage = (image) => ({
    type: ADD_IMAGE,
    image
})

export const addNewImage = (imagePayload) => async(dispatch) => {
    const res = await fetch('/api/images/add', {
        method:"POST",
        headers: { "Content-Type" : "application/json" },
        body: JSON.stringify(imagePayload)
    })
    const image = await res.json()
    dispatch(addImage(image))
    return image
}

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
        case ADD_IMAGE:
            newState[action.image.id] = action.image
        case DELETE_IMAGE:
            delete newState.all[action.imageId]
            return newState
        case ADD_LIKE:
            const imageId = action.payload.imageId
            const userId = action.payload.userId
            newState.all[imageId].likes[userId] = { imageId, userId}
            return newState
        case REMOVE_LIKE:
            const imageId2 = action.payload.imageId
            const userId2 = action.payload.userId
            delete newState.all[imageId2].likes[userId2]
            return newState
        case GET_COMMENTS:
            Object.values(action.comments).forEach(comment => {
                const commentImgId = comment.imageId
                newState.all[commentImgId].comments[comment.id] = comment
            })
            return newState
        default: return state
    }
}
export default imageReducer
