const GET_FOLLOWING = 'images/GET_FOLLOWING'
const GET_IMAGE = 'images/GET_IMAGE'

const getImage = (image) => ({
type: GET_IMAGE,
image,
})

// const getFollowing = () => ({
//     type: GET_FOLLOWING,
//     images,
// })

export const fetchImage = (imageId) => async (dispatch) => {
    const res = await fetch(`/api/images/${imageId}`)
    const image = await res.json()
    dispatch(getImage(image))
    return image
}

// export const getFollowing = () => async (dispatch) => {
//     const res = await fetch('/api/images/following')
//     const following = await res.json()
//     dispatch(getFollowing(following))
// }
const initialState = {}
const imageReducer = (state = initialState, action) => {
    let newState = { ...state }
    switch (action.type) {
        // case GET_FOLLOWING:
        //     action.images.forEach(image => { newState[image.id] = image })
        case GET_IMAGE:
            newState[action.image.id] = action.image
            return newState
        default: return state
    }
}
export default imageReducer