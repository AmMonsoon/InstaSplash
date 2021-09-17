import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { setProfilePic } from "../store/user";
import './EditProfilePicture.css'

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
            let createdImage = await dispatch(setProfilePic(imageUrl, userId))
            if(createdImage) {
                await hideEdit()
            }
        }


    }

    return(
        <section className='edit-pic-section'>
            <h1 id='edit-pic-header'>Edit Profile Pic</h1>
            <div>
            {validationErrors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
          </div>
            <form className='edit-pic-form' onSubmit={(e) => handleSubmit(userId, e)}>
                <input className='edit-pic-form-input'
                placeholder="Image URL"
                type="text"
                required
                value={imageUrl}
                onChange={((e) => setImageUrl(e.target.value))}
                />
                {imageUrl && <div><div>Preview Post:</div><img className="edit-profile-preview" src={imageUrl} alt=""></img></div>}
                <button type="submit">Submit</button>
                <button type="click" onClick={hideEdit}>Cancel</button>

            </form>
        </section>
    )
}

export default EditProfilePicture;
