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
    // const [profilePic, setProfilePic] = useState(null)
    const [validationErrors, setValidationErrors] = useState([])

    const checkImage = (url) => {
        const image = new Image();
        image.onload = function() {
          if (this.width > 0) {
            console.log("image exists");
            setValidationErrors([])
            return true
        }
    }
    image.onerror = function() {
        console.log("image doesn't exist");
        //   image_tag.src = '*DEFAULT IMAGE OR NO IMAGE, IMAGE LOCATION'
        return false
    }
    image.src = url;
}

useEffect(() => {
    const errors = [];
    if(!checkImage(imageUrl)) errors.push("Please include a valid image URL")
    setValidationErrors(errors)
    console.log("valErr", validationErrors)
}, [imageUrl, dispatch])

const handleSubmit = async(e) => {
    e.preventDefault();
    const image = {
        caption,
        imageUrl,
        // profilePic
    }
        let createdImage = await dispatch(addNewImage(image))
        if(createdImage) {
            history.push(`/users/${userId}`)
        }

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
                placeholder="Caption"
                type="text"
                required
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                />
                <input
                placeholder="Image URL"
                type="text"
                required
                value={imageUrl}
                onChange={((e) => setImageUrl(e.target.value))}
                // onChange={
                //     checkImage(e.target.value)
                // }
                />
                {/* <input
                type="dropdown"
                required
                value={imageUrl}
                onChange={(e) => setCaption(e.target.value)}
                /> */}
                <button type="submit" disabled={validationErrors.length > 0}>Submit</button>
                <button type="click" onClick={handleCancel}>Cancel</button>

            </form>
        </section>
    )
}

export default CreateImage;
