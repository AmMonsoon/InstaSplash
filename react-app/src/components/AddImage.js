import { useDispatch, useSelector } from "react-redux"
import { useState, useEffect } from "react"
import { addNewImage } from "../store/image"
import { useHistory } from "react-router-dom"


const CreateImage = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const userId = useSelector(state => state.session.user.id)

    const [imageUrl, setImageUrl] = useState('');
    const [caption, setCaption] = useState('');
    const [profilePic, setProfilePic] = useState(null)

    // useEffect(() => {
    //     const errors = [];
    //     if(!imageUrl.includes(""))
    // })

    const handleSubmit = async(e) => {
        e.preventDefault();
        const image = {
            caption,
            imageUrl,
            profilePic
        }
        await dispatch(addNewImage(image))

        history.push(`/users/${userId}`)
    }

    const handleCancel = async(e) => {
        e.preventDefault();
        history.push(`/users/${userId}`)
    }

    return(
        <section>
            <h1>create image form</h1>
            <form onSubmit={handleSubmit}>
                <input
                placeHolder="Caption"
                type="text"
                required
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                />
                <input
                placeHolder="Image URL"
                type="text"
                required
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                />
                {/* <input
                type="dropdown"
                required
                value={imageUrl}
                onChange={(e) => setCaption(e.target.value)}
                /> */}
                <button type="submit">Submit</button>
                <button type="click" onClick={handleCancel}>Cancel</button>

            </form>
        </section>
    )
}

export default CreateImage;
