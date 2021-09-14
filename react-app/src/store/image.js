const GET_FOLLOWING = 'images/GET_FOLLOWING'
const GET_IMAGE = 'images/GET_IMAGE'
const DELETE_IMAGE = 'images/DELETE_IMAGE'


const getImage = (image) => ({
type: GET_IMAGE,
image,
})

const deleteImage = (imageId) => ({
type: DELETE_IMAGE,
imageId
})

export const destroyImage = (imageId) => async(dispatch) => {
    const res = await fetch(`/api/images/${imageId}`,
    {
        method: 'DELETE'
    })
    dispatch(deleteImage(imageId))
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
        console.log(image)
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
            
        default: return state
    }
}
export default imageReducer
