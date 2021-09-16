import { useDispatch, useSelector } from "react-redux"
import { useState, useEffect } from "react"

import { useHistory } from "react-router-dom"
import { setProfilePic } from "../store/user";


const EditProfilePicture = ({currentUrl, hideEdit}) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const userId = useSelector(state => state.session.user.id)

    const [imageUrl, setImageUrl] = useState(currentUrl);
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
}, [imageUrl, dispatch, validationErrors])

const handleSubmit = async(e) => {
    e.preventDefault();
   
        let createdImage = await dispatch(setProfilePic(imageUrl, userId))
        if(createdImage) {
            history.push(`/users/${userId}`)
        }

    }

   
  

    return(
        <section>
            <h1>Edit Profile Pic Form</h1>
            <form onSubmit={handleSubmit}>
                <input
                placeholder="Image URL"
                type="text"
                required
                value={imageUrl}
                onChange={((e) => setImageUrl(e.target.value))}
                />
                <button type="submit" disabled={validationErrors.length > 0}>Submit</button>
                <button type="click" onClick={e => hideEdit(e)}>Cancel</button>

            </form>
        </section>
    )
}

export default EditProfilePicture;
