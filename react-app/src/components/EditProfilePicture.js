import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { setProfilePic } from "../store/user";


const EditProfilePicture = ({currentUrl, hideEdit}) => {
    const dispatch = useDispatch();
    const userId = useSelector(state => state.session.user.id)

    const [imageUrl, setImageUrl] = useState(currentUrl);
    // const [profilePic, setProfilePic] = useState(null)
    const [validationErrors, setValidationErrors] = useState([])

    const checkImage = async(url) => {
        return new Promise((resolve, reject) => {
            const image = new Image();
            image.onload = function() {
              if (this.width > 0) {
                resolve(true)
            }
        }
        image.onerror = function () {
            resolve(false)
        }
        image.src = url;
        })  
}

    const handleSubmit = async (userId, e) => {
        e.preventDefault()
        const errors = [];
        let checkedImage = await checkImage(imageUrl)
        if(!checkedImage) errors.push("Please include a valid image URL")
        if (errors.length) {
            setValidationErrors(errors)
        } else {
            console.log('userid', userId)
            let createdImage = await dispatch(setProfilePic(imageUrl, userId))
            if(createdImage) {
                await hideEdit()
            }
        }


    }

    return(
        <section>
            <h1>Edit Profile Pic Form</h1>
            <div>
            {validationErrors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
          </div>
            <form onSubmit={(e) => handleSubmit(userId, e)}>
                <input
                placeholder="Image URL"
                type="text"
                required
                value={imageUrl}
                onChange={((e) => setImageUrl(e.target.value))}
                />
                <button type="submit">Submit</button>
                <button type="click" onClick={hideEdit}>Cancel</button>

            </form>
        </section>
    )
}

export default EditProfilePicture;
