const GET_FOLLOWING = 'images/GET_FOLLOWING'
const getFollowing = () => ({
    type: GET_FOLLOWING,
    images,
})
export const getFollowing = () => async (dispatch) => {
    const res = await fetch('/api/images/following')
    const following = await res.json()
    dispatch(getFollowing(following))
}
const initialState = {}
const imageReducer = (state = initialState, action) => {
    let newState = { ...state }
    switch (action.type) {
        case GET_FOLLOWING:
            action.images.forEach(image => { newState[image.id] = image })
        default: return state
    }
}
export default imageReducer