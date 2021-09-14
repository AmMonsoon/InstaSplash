const GET_FOLLOWING = 'images/GET_FOLLOWING'

const GET_IMAGE = 'images/GET_IMAGE'

const ADD_IMAGE = 'images/ADD'

const addImage = (image) => ({
    type: ADD_IMAGE,
    image
})

export const addNewImage = (imagePayload) => async(dispatch) => {
    const res = await fetch('/api/images/add', {
        methods:"POST",
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

export const fetchImage = (imageId) => async (dispatch) => {
    const res = await fetch(`/api/images/${imageId}`)
    const image = await res.json()
    dispatch(getImage(image))
    return image
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
            return newState
        default: return state
    }
}
export default imageReducer
